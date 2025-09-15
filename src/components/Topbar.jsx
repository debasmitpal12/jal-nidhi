import React from "react";
import { FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="w-full bg-white shadow-md px-8 py-5 flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-2xl font-bold text-sky-700">Dashboard</h1>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer hover:text-sky-600 transition" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-sky-600 cursor-pointer"
        />
      </div>
    </div>
  );
}
