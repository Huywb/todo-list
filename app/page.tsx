"use client";
import Image from "next/image";
import ListTodo from "./components/ListTodo";
import { useEffect, useState } from "react";

import AddCard from "./components/AddCard";
import axios from "axios";
import { set } from "mongoose";
export default function Home() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [ListTask, setListTask] = useState([]);
  useEffect(() => {
    const fetchData  = async () => {
      const response = await axios.get('http://localhost:3000/api');
      const result = response.data;
      setData(result);
    }
    fetchData();
  }, []);
  
  let filtered = data;
  console.log(data);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value;
  setFilter(value);

  if (value === 'Completed') filtered = data.filter((item :any) => item.completed === true);
  if (value === 'Incompleted') filtered = data.filter((item :any) => item.completed === false);

  setListTask(filtered);
};


  return (
   <div className="flex items-center h-screen w-full justify-center bg-black">
      <div className="flex w-[80%] h-auto flex-col items-start justify-center bg-gray-500 p-2 rounded-md">
          <div className="flex w-full h-auto justify-between p-2 rounded-md">
          <select onChange={handleFilterChange} className="text-black cursor-pointer outline-none bg-gray-200 p-2 rounded-2xl">
            <option value="">All Task</option>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
          </select>
          <h1 onClick={() => setOpen(true)} className=" cursor-pointer hover:translate-x-1 bg-gray-200 text-black p-2 rounded-xl duration-300">Add Task</h1>
          </div>
          <div className="flex w-full h-auto flex-wrap bg-gray-600 p-2 rounded-md">
            <ListTodo  ListTask={filter ? ListTask : data} page={page} />
          </div>
          <div className="w-full flex items-center gap-4 justify-center">
            {[...Array(Math.ceil(data.length / 10))].map((_, i) => (
              <div
                key={i + 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${page === i + 1 ? 'bg-gray-800' : 'bg-gray-600'}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
      </div>
      {open && (
        <AddCard setOpen={setOpen} />
      )}
    </div>
  )
}
