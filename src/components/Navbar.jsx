import React, { useState, useEffect } from "react";
import Logo from "../assets/navabar/logo.webp";
import social1 from "../assets/navabar/insta.webp";
import social2 from "../assets/navabar/insta (2).webp";
import social3 from "../assets/navabar/insta (1).webp";
import enflag from "../assets/navabar/flags/en.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 w-full z-[999] text-white  transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[rgba(5, 5, 5, 0.45)] top-0 "
          : "bg-transparent top-0 "
      }`}
    >
      <div className="max-w-[1280px] w-full  mx-auto md:px-0 max-md:px-4 py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex space-x-1">
            <button
              className="md:hidden focus:outline-none cursor-pointer"
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 5h16.5M3.75 12h16.5M3.75 19h16.5"
                  }
                />
              </svg>
            </button>
            <div className="max-w-[138px] w-[100%]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-[27px] items-center ">
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              What is Scorpion Casino?
            </a>
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              How to Buy
            </a>
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              Whitepaper
            </a>
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              Tokenomics
            </a>
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              Growth Potential
            </a>
            <a href="#" className="hover:text-[#B88A44] a_tags transition">
              FAQ
            </a>
            <div className="px-3 py-[5px] cursor-pointer flex space-x-1 border-[1px] border-[#fff] rounded-[4px]">
              <img src={enflag} alt="english" />
              <a href="#" className="hover:text-[#B88A44] a_tags transition">
                English
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.6167 6.11816L9.15985 10.575C8.63351 11.1013 7.77223 11.1013 7.24588 10.575L2.78906 6.11816"
                  stroke="white"
                  stroke-width="1.02534"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </nav>

          <button className="md:px-[13px] max-md:px-[12px] max-md:text-[14px] btn-primary cursor-pointer max-md:py-[13px] md:py-[16px]">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0D10] relative flex flex-col justify-between h-[90vh] text-center space-y-3 py-12 font-inter text-sm">
          <div
            className="absolute bottom-[-20%] right-[-70%] mx-auto"
            style={{
              width: "490px",
              height: "490px",
              borderRadius: "1262px",
              background: "#4D1200",
              filter: "blur(250px)",
              zIndex: 0,
            }}
          ></div>
          <div className="space-y-[27px]">
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                What is Scorpion Casino?
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                How to Buy
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                Whitepaper
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                Tokenomics
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                Growth Potential
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                FAQ
              </a>
            </h5>
            <h5>
              <a href="#" className="text-[16px] block hover:text-[#B88A44]">
                English
              </a>
            </h5>
          </div>
          <div className="space-y-2">
            <h5>Join Our Social </h5>
            <div className="flex justify-center items-center space-x-2">
              <img className="w-[36px] h-[36px]" src={social1} alt="" />
              <img className="w-[36px] h-[36px]" src={social2} alt="" />
              <img className="w-[36px] h-[36px]" src={social3} alt="" />
            </div>
            <p className="text-[14px]">Email: info@scorpion.casino</p>
          </div>
          <div>
            <p className="text-[#fff] text-[14px]">
              Copyright 2025 Scorpion Casino <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
