import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export default function Header({ onHowItWorksClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const openAuth = (mode = "login") => {
    navigate(`/auth?mode=${mode}`);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-8 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-extrabold tracking-wide ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          Jal<span className="text-yellow-300">Nidhi</span>
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex gap-10 text-lg font-medium ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          <ScrollLink
            to="features"
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-yellow-300 hover:underline transition"
          >
            Features
          </ScrollLink>

          <button
            onClick={(e) => {
              e.preventDefault();
              onHowItWorksClick();
              setMenuOpen(false);
            }}
            className="hover:text-yellow-300 hover:underline transition"
          >
            How it works
          </button>

          <Link to="/dashboard" className="hover:text-yellow-300 hover:underline transition">
            Dashboard
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => openAuth("login")}
            className="px-5 py-2 rounded-full border-2 border-yellow-300 text-yellow-300 font-semibold hover:bg-yellow-300 hover:text-sky-900 transition"
          >
            Login
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="px-5 py-2 rounded-full bg-yellow-300 text-sky-900 font-bold hover:bg-yellow-400 transition shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-sky-700 text-white px-6 py-4 space-y-4 shadow-lg">
          <ScrollLink
            to="features"
            smooth={true}
            duration={600}
            offset={-80}
            className="block cursor-pointer hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </ScrollLink>

          <button
            onClick={(e) => {
              e.preventDefault();
              onHowItWorksClick();
              setMenuOpen(false);
            }}
            className="block hover:text-yellow-300"
          >
            How it works
          </button>

          <Link
            to="/dashboard"
            className="block hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>

          <hr className="border-sky-400/50" />

          <button
            onClick={() => openAuth("login")}
            className="w-full text-left hover:text-yellow-300"
          >
            Login
          </button>
          <button
            onClick={() => openAuth("signup")}
            className="w-full text-left hover:text-yellow-300"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
