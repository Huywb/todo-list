import React from 'react'
import ListTodo from './ListTodo.jsx'
const Todo = () => {
  return (
    <div className='w-[50%] h-[50%] flex items-center justify-center flex-col bg-red-600'>
    <div className='flex flex-col w-full p-4 bg-blue-500 h-full items-start gap-4 '>
      <div className='text-3xl font-bold'>
            Todolist
      </div>
      <div className='text-2xl flex gap-3'>
        <input type="text" className='border rounded-md outline-none p-2'  />
        <button className='p-2 border bg-gray-600 rounded-md'>add</button>
      </div>
      <div className='list todo'>
        <span>List Todo</span>
        <div>Filter</div>
        
      </div>
        <ListTodo></ListTodo>
      </div>
    </div>
  )
}

export default Todo
