import React, { useState } from "react";
import Logo from "../assets/navabar/logo.webp";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[1280px] w-full  mx-auto md:px-0 max-md:px-4 py-4">
       
       <div className="w-full flex justify-between items-center">
        
        <div className="max-w-[138px] w-[100%]">
          <img src={Logo} alt="" />
        </div>
        <nav className="hidden md:flex space-x-[27px] ">
          <a href="#" className="hover:text-[#B88A44] a_tags transition">What is Scorpion Casino?</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">How to Buy</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">Whitepaper</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">Tokenomics</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">Growth Potential</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">FAQ</a>
          <a href="#" className="hover:text-[#B88A44] a_tags transition">English</a>
        </nav>

        <button className="px-[13px] btn-primary cursor-pointer py-[16px]">Connect Wallet</button>
       </div>

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
