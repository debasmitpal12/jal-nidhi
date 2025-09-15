import React, { useState, useEffect } from "react";
import { FaLeaf, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  // Load saved projects from localStorage (simulating persistence)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myProjects")) || [];
    setProjects(saved);
  }, []);

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-extrabold text-sky-700 mb-6">🌱 My Projects</h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Here are all the projects you’ve submitted. Track their status while they go through MRV review.
      </p>

      {projects.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-8 text-center text-gray-500">
          No projects submitted yet. Start by submitting one!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaLeaf className="text-green-500 text-2xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {proj.name}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Location: {proj.location}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Area: {proj.area} hectares
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Submitted on: {proj.date}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  proj.status === "Approved"
                    ? "bg-green-100 text-green-700 flex items-center gap-1"
                    : proj.status === "Rejected"
                    ? "bg-red-100 text-red-700 flex items-center gap-1"
                    : "bg-yellow-100 text-yellow-700 flex items-center gap-1"
                }`}
              >
                {proj.status === "Approved" && <FaCheckCircle />}
                {proj.status === "Rejected" && <FaTimesCircle />}
                {proj.status === "Pending" && <FaClock />}
                {proj.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
