"use client";
import Image from "next/image";
import ListTodo from "./components/ListTodo";
import { useState } from "react";

import AddCard from "./components/AddCard";
export default function Home() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const number = 3
  return (
   <div className="flex items-center h-screen w-full justify-center bg-black">
      <div className="flex w-[80%] h-auto flex-col items-start justify-center bg-gray-500 p-2 rounded-md">
          <div className="flex w-full h-auto justify-between p-2 rounded-md">
          <select className="text-black cursor-pointer outline-none bg-gray-600 p-2">
            <option value="1">All Task</option>
            <option value="2">Completed</option>
            <option value="3">Incompleted</option>
          </select>
          <h1 onClick={() => setOpen(true)} className="text-3xl cursor-pointer hover:rotate-90 duration-300">+</h1>
          </div>
          <div className="flex w-full h-auto flex-wrap bg-gray-600 p-2 rounded-md">
            <ListTodo  page={page} />
          </div>
          <div className="w-full flex items-center gap-4 justify-center">
            <div>Prev</div>
            {[...Array(number)].map((_, i) => (
              <div
                key={i + 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${page === i + 1 ? 'bg-gray-800' : 'bg-gray-600'}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
            <div>Next</div>
          </div>
      </div>
      {open && (
        <AddCard setOpen={setOpen} />
      )}
    </div>
  )
}
