import React, { useState } from "react";
import { FaLeaf, FaMapMarkerAlt, FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";

export default function ProjectSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    area: "",
    description: "",
  });
  const [fileName, setFileName] = useState("");

  // Handle form inputs
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle file uploads (store only name for now)
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Submit project
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      file: fileName || "No file uploaded",
      date: new Date().toLocaleDateString(),
      status: "Pending", // Default status for new submissions
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("myProjects")) || [];
    existing.push(newProject);
    localStorage.setItem("myProjects", JSON.stringify(existing));

    alert("✅ Project submitted successfully!");

    // Reset form
    setFormData({ name: "", location: "", area: "", description: "" });
    setFileName("");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-800 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">🌱 Submit a New Project</h2>
          <p className="text-sm text-sky-200 mt-1">
            Fill in the details below to onboard your carbon project.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FaLeaf className="text-sky-600" /> Project Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Mangrove Restoration – Sundarbans"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="text-sky-600" /> Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="West Bengal, India"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FaLeaf className="text-sky-600" /> Area Restored (ha)
            </label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="24"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FaFileAlt className="text-sky-600" /> Project Documents
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaCloudUploadAlt className="text-4xl text-sky-500 mb-2" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Click to upload</span> or drag & drop
                  </p>
                  <p className="text-xs text-gray-400">PDF, DOCX, max 10MB</p>
                  {fileName && <p className="mt-2 text-sm text-sky-600">📂 {fileName}</p>}
                </div>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FaFileAlt className="text-sky-600" /> Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Provide a detailed description of the project..."
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              🚀 Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
