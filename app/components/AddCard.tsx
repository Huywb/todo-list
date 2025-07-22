"use client";
import axios from 'axios';
import React from 'react'


interface AddCardProps {
  item?: {
    _id?: string;
    title: string;
    description: string;
    date: string;
    completed: boolean;
  };
  setOpen: (open: boolean) => void;
}

const AddCard: React.FC<AddCardProps> = ({ setOpen, item }) => {
  const [formData, setFormData] = React.useState({
    _id: item?._id || '',
    title: item?.title || '',
    description: item?.description || '',
    date: item?.date || '',
    completed: item?.completed || false
  });

  const handleChange = (e :any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const submitHandler = async (e: any) => {
  e.preventDefault(); 

  if (!formData.title || !formData.description || !formData.date) {
    alert('Please fill all fields');
    return;
  }

  try {
    if (item?._id) {
      const response = await axios.put(`http://localhost:3000/api/${item?._id}`, formData);
      if (response.status === 200) {
        alert('Task updated successfully');
        setOpen(false);
        window.location.reload();
      } else {
        alert('Failed to update task');
      }
    } else {
      const response = await axios.post('http://localhost:3000/api', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setOpen(false);
        setFormData({
          _id: '',
          title: '',
          description: '',
          date: '',
          completed: false
        });
        alert('Task created successfully');
        window.location.reload();
      } else {
        alert('Failed to create task');
      }
    }
  } catch (error) {
    console.error('Error submitting task:', error);
    alert('An error occurred.');
  }
};


  return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex items-center justify-center">
          <div className="bg-gray-700 p-4 rounded-md w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">{item?._id ? 'Edit Task' : 'Add New Task'}</h2>
              <button onClick={() => setOpen(false)} className=" bg-red-500 p-2 px-3 rounded-md cursor-pointer">X</button>
            </div>
            <div className="flex flex-col gap-2" >
              <input type="text" onChange={(e) => handleChange(e)} value={formData?.title} name='title' placeholder="Task Title" className="mb-2 p-2 rounded-md bg-gray-600 text-white" />
              <textarea name='description' onChange={(e) => handleChange(e)} value={formData?.description} placeholder="Task Description" className="mb-2 p-2 rounded-md bg-gray-600 text-white"></textarea>
              <input type="date" name='date' onChange={(e) => handleChange(e)} value={formData?.date} className="mb-2 p-2 rounded-md bg-gray-600 text-white" />
              <div className="flex items-center gap-4 mb-2">
                <h1>Completed</h1>
                <input type="checkbox" name='completed' onChange={(e) => handleChange(e)} checked={formData?.completed} className="ml-2 w-4 h-4" />
              </div>
              <button type="submit" onClick={(e) => submitHandler(e)} className="bg-blue-500 p-2 rounded-md cursor-pointer hover:bg-blue-600 duration-300">{item?._id ? 'Update Task' : 'Add Task'}</button>
            </div>
            
          </div>
        </div>
  )
}

export default AddCard
