import Image from "next/image";
import Todo from "../app/components/Todo.jsx"
export default function Home() {
  return (
   <div className="flex items-center h-screen w-full justify-center">
      <Todo></Todo>
   </div>
  );
}
