import React from "react";
import { FaLeaf, FaChartLine, FaShieldAlt, FaCloud } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      title: "Eco-friendly Tracking",
      desc: "Accurately track carbon reduction from mangroves, wetlands, and coral reefs with transparent data.",
    },
    {
      icon: <FaChartLine className="text-sky-500 text-3xl" />,
      title: "Analytics Dashboard",
      desc: "Visualize carbon credits, project growth, and partner contributions with rich charts and insights.",
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
      title: "Secure & Verified",
      desc: "Blockchain-backed verification ensures every credit is authentic, traceable, and tamper-proof.",
    },
    {
      icon: <FaCloud className="text-orange-500 text-3xl" />,
      title: "Cloud Integration",
      desc: "Easily connect with cloud platforms to upload project data, images, and supporting documents.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="w-full px-8 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-sky-700">
            🌟 Powerful Features
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            JalNidhi provides a complete ecosystem for managing carbon projects —
            from submission to verification, credits, and analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105 text-center flex flex-col items-center"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
