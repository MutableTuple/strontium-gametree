import React from "react";
import { IoCreate } from "react-icons/io5";
export default function CreateMyOwnPage() {
  return (
    <div className="my-2 flex gap-2 items-center bg-stone-900 py-2 px-4 w-fit text-stone-50 rounded-lg text-xl font-semibold capitalize shadow-md border-2 hover:scale-105 transition-all duration-300 cursor-pointer hover:rotate-2 hover:bg-stone-50 hover:text-stone-950">
      <IoCreate /> create my own page
    </div>
  );
}
