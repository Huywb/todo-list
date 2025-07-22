import React from 'react'

const ListTodo = ({ page }) => {
  const number = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]; // Example array for pagination
  return (
    <div className='flex w-full h-auto flex-wrap bg-gray-600 p-2 rounded-md'>
      {
        number.map((item,index) => {
          if(index < (page - 1) * 10 || index >= page * 10  ) return null; // Pagination logic
          // Display only items for the current page
          return <div key={item} className='w-[20%]'>List todo {item}</div>
        })
      }
    </div>
  )
}

export default ListTodo
