import axios from 'axios';
import { set } from 'mongoose';
import React, { useEffect } from 'react'
import AddCard from './AddCard';

interface CardProps {
  _id?: string;
  title?: string;
  description?: string;
  date?: string;
  completed?: boolean;
}

const Card: React.FC<CardProps> = ({ _id, title, description, date, completed }) => {

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState<CardProps>({ _id, title, description, date, completed });
  const handleEdit = () => {
    setOpen(true);
    setItem({ _id: item._id, title, description, date, completed });
  };
  const handleDelete = async () => {
    console.log('1', item._id);
    const response = await axios.delete(`http://localhost:3000/api/${item._id}`);
    if (response.status === 200) {
      alert('Task deleted successfully');
      window.location.reload();
    } else {
      alert('Failed to delete task');
    }
  };


  const parsedDate = new Date(date || '');

  const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}/${
  (parsedDate.getMonth() + 1).toString().padStart(2, '0')
  }/${parsedDate.getFullYear()}`;
  return (
    <div className='flex flex-col items-start gap-2  border-dashed border p-4 rounded-md justify-between w-full '>
          <div className='text-xl font-bold '>
              {title}
          </div>
          <p className='text-sm min-h-16'>{description}</p>
        <div className='flex items-start gap-1 flex-col bottom-0 w-full'>
          <p className='text-sm'>
            {formattedDate}
          </p>
          <div>
              <div className={` p-2 rounded-2xl ${completed ? 'bg-green-500' : 'bg-red-500'} outline-none `}>{completed ? 'Completed' : 'InCompleted'}</div>
          </div>
          <div className='flex justify-between w-[100%] '>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
        {open && (
          <AddCard
            item={{
              _id: item._id,
              title: item.title ?? '',
              description: item.description ?? '',
              date: item.date ?? '',
              completed: item.completed ?? false,
            }}
            setOpen={setOpen}
          />
        )}
    </div>
  )
}

export default Card
    