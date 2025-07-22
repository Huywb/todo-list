import React, { useEffect } from 'react'
import Card from './Card'
import axios from 'axios';

interface ListTodoProps {
  page: number;
}

interface TodoItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

const ListTodo = ({ page }: ListTodoProps) => {
  const [data, setData] = React.useState<TodoItem[]>([]);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get('http://localhost:3000/api');
      const result = response.data;
      setData(result);
    }
    data();
  }, []);
  console.log(data);
  const number = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]; 
  return (
    <div className='flex w-full h-auto flex-wrap bg-gray-600 p-2 gap-3 rounded-md'>
      {
        data.map((item,index) => {
          if(index < (page - 1) * 10 || index >= page * 10  ) return null; 

          return <div key={item._id} className='w-[19%]'><Card _id={item._id} title={item.title} description={item.description} date={item.date} completed={item.completed} /></div>
        })
      }
    </div>
  )
}

export default ListTodo
