import React from 'react'

const AddCart = ({setOpen}) => {
  return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex items-center justify-center">
          <div className="bg-gray-700 p-4 rounded-md w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Add New Task</h2>
              <button onClick={() => setOpen(false)} className=" bg-red-500 p-2 px-3 rounded-md">X</button>
            </div>
            <form className="flex flex-col gap-2">
              <input type="text" placeholder="Task Title" className="mb-2 p-2 rounded-md bg-gray-600 text-white" />
              <textarea placeholder="Task Description" className="mb-2 p-2 rounded-md bg-gray-600 text-white"></textarea>
              <input type="date" className="mb-2 p-2 rounded-md bg-gray-600 text-white" />
              <div className="flex items-center gap-4 mb-2">
                <h1>Completed</h1>
                <input type="checkbox" className="ml-2 w-4 h-4" />
              </div>
              <button type="submit" className="bg-blue-500 p-2 rounded-md cursor-pointer hover:bg-blue-600 duration-300">Add Task</button>
            </form>
            
          </div>
        </div>
  )
}

export default AddCart
