import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function MRVReview() {
  const [projects] = useState([
    {
      id: 1,
      name: "Mangrove Restoration – Goa",
      submittedBy: "EcoOrg",
      area: "120 hectares",
      status: "Pending",
      documents: ["proposal.pdf", "satellite-data.zip"],
    },
    {
      id: 2,
      name: "Wetland Revival – Sundarbans",
      submittedBy: "GreenFuture",
      area: "85 hectares",
      status: "Approved",
      documents: ["project-plan.docx", "carbon-report.pdf"],
    },
    {
      id: 3,
      name: "Coral Reef Recovery – Andaman",
      submittedBy: "OceanCare",
      area: "60 hectares",
      status: "Rejected",
      documents: ["reef-data.xlsx"],
    },
  ]);

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-extrabold text-sky-700 mb-6">
        📊 MRV Status
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Here you can track the review status of your submitted projects.  
        Once the MRV team verifies your documents, your project status will
        automatically update.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
          <thead className="bg-sky-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Project Name</th>
              <th className="py-3 px-4 text-left">Submitted By</th>
              <th className="py-3 px-4">Area</th>
              <th className="py-3 px-4">Documents</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj) => (
              <tr
                key={proj.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="py-3 px-4 font-medium">{proj.name}</td>
                <td className="py-3 px-4">{proj.submittedBy}</td>
                <td className="py-3 px-4">{proj.area}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2 flex-wrap">
                    {proj.documents.map((doc, i) => (
                      <button
                        key={i}
                        className="flex items-center gap-1 text-sky-600 hover:text-sky-800 text-sm font-medium"
                      >
                        <FaEye /> {doc}
                      </button>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      proj.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : proj.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {proj.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
