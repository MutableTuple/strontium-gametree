import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaTwitch,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
export default function Socials() {
  return (
    <div className="flex gap-4 my-4 w-3/4 bg-gradient-to-r from-green-400 via-purple-500 via-pink-500 via-indigo-500 to-blue-500 p-4 rounded-lg justify-between shadow-sm bg-[length:200%_200%] animate-gradient-move transition-all duration-500 hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.8)] ">
      <FaXTwitter
        className="text-gray-50 cursor-pointer hover:text-stone-950 transition-transform transform hover:scale-110 duration-300"
        size={24}
      />
      <FaInstagram
        className="text-gray-50 cursor-pointer hover:text-pink-600 transition-transform transform hover:scale-110 duration-300"
        size={24}
      />
      <FaTwitch
        className="text-gray-50 cursor-pointer hover:text-purple-700 transition-transform transform hover:scale-110 duration-300"
        size={24}
      />
      <FaGithub
        className="text-gray-50 cursor-pointer hover:text-black transition-transform transform hover:scale-110 duration-300"
        size={24}
      />
      <FaYoutube
        className="text-gray-50 cursor-pointer hover:text-red-500 transition-transform transform hover:scale-110 duration-300"
        size={24}
      />
    </div>
  );
}
