import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <h1 className="font-actay text-2xl">Scorpio</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-inter text-sm uppercase">
          <a href="#" className="hover:text-[#B88A44] transition">Home</a>
          <a href="#" className="hover:text-[#B88A44] transition">About</a>
          <a href="#" className="hover:text-[#B88A44] transition">Services</a>
          <a href="#" className="hover:text-[#B88A44] transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 5h16.5M3.75 12h16.5M3.75 19h16.5"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-center space-y-3 py-4 font-inter text-sm">
          <a href="#" className="block hover:text-[#B88A44]">Home</a>
          <a href="#" className="block hover:text-[#B88A44]">About</a>
          <a href="#" className="block hover:text-[#B88A44]">Services</a>
          <a href="#" className="block hover:text-[#B88A44]">Contact</a>
        </div>
      )}
    </header>
  );
}
