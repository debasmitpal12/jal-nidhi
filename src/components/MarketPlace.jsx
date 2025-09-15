import React, { useState } from "react";
import { FaLeaf, FaShoppingCart } from "react-icons/fa";

export default function Marketplace() {
  const [credits] = useState([
    {
      id: 1,
      project: "Mangrove Restoration – Goa",
      price: 12.5,
      available: 500,
      type: "Blue Carbon",
    },
    {
      id: 2,
      project: "Wetland Revival – Sundarbans",
      price: 15.0,
      available: 320,
      type: "Wetland Carbon",
    },
    {
      id: 3,
      project: "Coral Reef Recovery – Andaman",
      price: 18.0,
      available: 200,
      type: "Marine Carbon",
    },
  ]);

  const handleBuy = (id) => {
    alert(`✅ You initiated purchase for credits from project ID: ${id}`);
  };

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-extrabold text-sky-700 mb-6">
        🌍 Carbon Credit Marketplace
      </h2>
      <p className="text-gray-600 mb-10 max-w-3xl">
        Browse verified blue carbon credits from ongoing projects. Purchase to
        offset your carbon footprint and support sustainability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {credits.map((credit) => (
          <div
            key={credit.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform hover:scale-105"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FaLeaf className="text-green-500 text-2xl" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {credit.project}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{credit.type}</p>
              <p className="text-lg font-semibold text-sky-700 mb-1">
                ${credit.price.toFixed(2)} / credit
              </p>
              <p className="text-sm text-gray-500">
                {credit.available} credits available
              </p>
            </div>
            <button
              onClick={() => handleBuy(credit.id)}
              className="mt-6 px-5 py-2 flex items-center justify-center gap-2 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
            >
              <FaShoppingCart /> Buy Credits
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
