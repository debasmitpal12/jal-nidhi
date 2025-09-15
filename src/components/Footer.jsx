import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-sky-800 text-white mt-12">
      <div className="w-full px-12 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold">JalNidhi</h3>
          <p className="mt-4 text-sm text-gray-200 max-w-[260px]">
            Accurate carbon tracking for coastal ecosystems with clear
            provenance and trust.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#features" className="hover:text-yellow-300">Features</a></li>
            <li><a href="#get-started" className="hover:text-yellow-300">Onboarding</a></li>
            <li><a href="#" className="hover:text-yellow-300">Documentation</a></li>
            <li><a href="#" className="hover:text-yellow-300">API</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Careers</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-300">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-lg px-4 py-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-yellow-300 text-sky-900 font-semibold hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 mt-6 text-xl">
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaGithub /></a>
            <a href="#" className="hover:text-yellow-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-500 text-sm text-gray-200 text-center py-6">
        © {new Date().getFullYear()} JalNidhi — All rights reserved.
      </div>
    </footer>
  );
}
