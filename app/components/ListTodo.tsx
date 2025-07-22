import React, { useEffect } from 'react'
import Card from './Card'
import axios from 'axios';

interface dataItem {
  ListTask?: {
    _id: string;
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }[];
  page?: number;
}
const ListTodo: React.FC<dataItem> = ({ ListTask = [], page = 1 }) => {
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return (
    <div className='flex w-full h-auto flex-wrap bg-gray-600 p-2 gap-3 rounded-md'>
      {ListTask.slice(start, end).map((item, index) => (
        <div key={item._id} className='w-[19%]'>
          <Card
            _id={item._id}
            title={item.title}
            description={item.description}
            date={item.date}
            completed={item.completed}
          />
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
