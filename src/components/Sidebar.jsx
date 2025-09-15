import React from "react";
import {
  FaHome,
  FaPlus,
  FaLeaf,
  FaClipboardList,
  FaStore,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition text-lg font-medium ${
      isActive ? "bg-sky-500 text-white shadow-md" : "hover:bg-sky-600"
    }`;

  return (
    <div className="w-72 bg-gradient-to-b from-sky-700 to-sky-900 text-white min-h-screen flex flex-col shadow-xl">
      {/* Brand */}
      <div className="px-6 py-8 text-3xl font-extrabold tracking-wide">
        🌊 Jal<span className="text-yellow-300">Nidhi</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/submit" className={linkClass}>
          <FaPlus /> Submit Project
        </NavLink>

        <NavLink to="/dashboard/projects" className={linkClass}>
          <FaLeaf /> My Projects
        </NavLink>

        <NavLink to="/dashboard/mrv-review" className={linkClass}>
          <FaClipboardList /> MRV Review
        </NavLink>

        <NavLink to="/dashboard/marketplace" className={linkClass}>
          <FaStore /> Marketplace
        </NavLink>
      </nav>
    </div>
  );
}
