import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/navabar/logo.webp";
import social1 from "../assets/navabar/insta.webp";
import social2 from "../assets/navabar/insta (2).webp";
import social3 from "../assets/navabar/insta (1).webp";
import enflag from "../assets/navabar/flags/en.svg";
import flag15 from "../assets/navabar/flags/ar.png";
import flag1 from "../assets/navabar/flags/flg (1).svg";
import flag10 from "../assets/navabar/flags/flg (10).svg";
import flag11 from "../assets/navabar/flags/flg (11).svg";
import flag12 from "../assets/navabar/flags/flg (12).svg";
import flag13 from "../assets/navabar/flags/flg (13).svg";
import flag14 from "../assets/navabar/flags/flg (14).svg";
import flag2 from "../assets/navabar/flags/flg (2).svg";
import flag3 from "../assets/navabar/flags/flg (3).svg";
import flag4 from "../assets/navabar/flags/flg (4).svg";
import flag5 from "../assets/navabar/flags/flg (5).svg";
import flag6 from "../assets/navabar/flags/flg (6).svg";
import flag8 from "../assets/navabar/flags/flg (8).svg";
import flag9 from "../assets/navabar/flags/flg (9).svg";
import { getConfig, useAccount } from "@/presale-gg/web3";
import { showConnectWalletModal } from "@/presale-gg/stores";
import { disconnect } from "@wagmi/core";
import { truncateString } from "@/presale-gg/util";

const flags = [
  { flag: flag1, abbreviation: "EN", name: "English" },
  { flag: flag2, abbreviation: "VI", name: "Vietnamese" },
  { flag: flag3, abbreviation: "DE", name: "German" },
  { flag: flag4, abbreviation: "NL", name: "Dutch" },
  { flag: flag5, abbreviation: "JA", name: "Japanese" },
  { flag: flag6, abbreviation: "TR", name: "Turkish" },
  { flag: flag15, abbreviation: "AR", name: "Arabic" },
  { flag: flag8, abbreviation: "IT", name: "Italian" },
  { flag: flag9, abbreviation: "NO", name: "Norwegian" },
  { flag: flag10, abbreviation: "ZH", name: "Chinese" },
  { flag: flag11, abbreviation: "RU", name: "Russian" },
  { flag: flag12, abbreviation: "FR", name: "French" },
  { flag: flag13, abbreviation: "PT", name: "Portuguese" },
  { flag: flag14, abbreviation: "ES", name: "Spanish" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpendrop, setIsOpendrop] = useState(false);
  const [selectedLang, setSelectedLang] = useState(flags[0]);
  const dropdownRef = useRef(null);

  const handleSelectLanguage = (lang) => {
    setSelectedLang(lang);
    setIsOpendrop(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpendrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      href: "#what-is-scorpion",
      label: "What is Scorpion Casino?",
      offset: -50,
    },
    { href: "#how-to-buy", label: "How to Buy", offset: -50 },
    { href: "#whitepaper", label: "Whitepaper", offset: -50 },
    { href: "#tokenomics", label: "Tokenomics", offset: -70 },
    { href: "#growth-potential", label: "Growth Potential", offset: -50 },
    { href: "#faq", label: "FAQ", offset: -10 },
  ];
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

  const accountData = useAccount()

  return (
    <header
      className={`fixed left-0 w-full  z-[99] text-white  transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#000] top-0 "
          : "bg-[#000] top-0 "
      }
       ${isOpen ? "max-md:h-[100dvh] !min-h-[100svh]" : "max-md:h-auto"}
      `}
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
              <a
                href="#wallet"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#wallet");
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY +
                      -70;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
          <nav className="hidden md:flex space-x-[27px] items-center ">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY +
                      item.offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="hover:text-[#B88A44] a_tags transition cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <div className="relative" ref={dropdownRef}>
              {/* Trigger */}
              <div
                onClick={() => setIsOpendrop(!isOpendrop)}
                className="px-3 py-[5px] cursor-pointer flex items-center space-x-1 border border-white rounded-[4px] transition hover:border-[#B88A44]"
              >
                <img
                src={flag1}
                  // src={selectedLang.flag}
                  // alt={selectedLang.name}
                  alt="eng"
                  className="w-[20px] h-[20px]"
                />
                <span className="hover:text-[#B88A44] transition">
                  {selectedLang.name}
                </span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  className={`transition-transform duration-200 ${
                    isOpendrop ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    d="M13.6167 6.11816L9.15985 10.575C8.63351 11.1013 7.77223 11.1013 7.24588 10.575L2.78906 6.11816"
                    stroke="white"
                    strokeWidth="1.02534"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </div>

              {/* Dropdown */}
              {/* {isOpendrop && (
                <div className="absolute border border-[#B88A44] top-[40px] right-0 w-[439px] rounded-[13px] px-[55px] py-[41px] bg-[#000] shadow-lg z-50 animate-fadeIn">
                  <h3 className="text-[20px] text-white font-[700] mb-4">
                    Languages
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6">
                    {flags.map((lang, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectLanguage(lang)}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-[#0d1b21] p-2 mb-[12px] rounded transition"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-[28px] h-[28px]"
                        />
                        <span className="text-[14px] font-[500] text-white">
                          {lang.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </nav>

          <button
            className="md:px-[13px] max-md:px-[12px] max-md:text-[14px] btn-primary cursor-pointer leading-[1.1] h-[2.75rem] md:h-[3.125rem] py-0 min-w-[8rem] md:min-w-[9.5rem]"
            onClick={async () => {
              if (accountData.isConnected) {
                const { config } = await getConfig()
                // Disconnect twice to avoid issues
                await disconnect(config)
                setTimeout(() => disconnect(config), 100)
              } else {
                showConnectWalletModal()
              }
            }}
          >
            {accountData.isConnected ? <>Disconnect<br />{truncateString(accountData.address ?? "", 11)}</>: "Connect Wallet"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#000] relative flex flex-col !min-h-[100svh] justify-between h-[100dvh] text-center space-y-3 pt-12 pb-30 font-inter text-sm">
          <div
            className="absolute bottom-[-20%]  z-[1] right-[-70%] mx-auto"
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
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector(item.href);
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY +
                      item.offset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="hover:text-[#B88A44]  a_tags transition cursor-pointer"
              >
                <h5>
                  <a
                    href="#"
                    className="text-[16px] mb-[27px] block hover:text-[#B88A44]"
                  >
                    {item.label}
                  </a>
                </h5>
              </a>
            ))}
            <div className="relative " ref={dropdownRef}>
              {/* Trigger */}
              <div
                onClick={() => setIsOpendrop(!isOpendrop)}
                className="px-3 max-w-[160px] w-auto mx-auto py-[5px] cursor-pointer flex items-center justify-center space-x-1 border border-white rounded-[4px] transition hover:border-[#B88A44]"
              >
                <img
                src={flag1}
                  // src={selectedLang.flag}
                  // alt={selectedLang.name}
                  alt="eng"
                  className="w-[20px] h-[20px]"
                />
                <span className="hover:text-[#B88A44] transition">
                  {selectedLang.name}
                </span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  className={`transition-transform duration-200 ${
                    isOpendrop ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    d="M13.6167 6.11816L9.15985 10.575C8.63351 11.1013 7.77223 11.1013 7.24588 10.575L2.78906 6.11816"
                    stroke="white"
                    strokeWidth="1.02534"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </div>

              {/* Dropdown */}
              {/* {isOpendrop && (
                <div className="absolute border max-w-[200px] border-[#B88A44] max-h-[200px] overflow-y-scroll top-[35px] left-[30%] w-[439px] rounded-[13px] px-[15px] py-[11px] bg-[#000] shadow-lg z-50 animate-fadeIn">
                  <div className="grid grid-cols-1">
                    {flags.map((lang, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectLanguage(lang)}
                        className="flex items-center space-x-1 cursor-pointer hover:bg-[#0d1b21] p-1 mb-[12px] rounded transition"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.name}
                          className="w-[18px] h-[18px]"
                        />
                        <span className="text-[12px] font-[500] text-white">
                          {lang.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </div>
         <div className="space-y-[25px]">
           <div className="space-y-2 relative z-[9]">
            <h5>Join Our Social </h5>
            <div className="flex justify-center items-center space-x-2">
              <a
                href="https://x.com/ScorpionCasino"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[36px] h-[36px]" src={social1} alt="" />
              </a>
              <a
                href="https://t.me/scorpioncasino_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[36px] h-[36px]" src={social2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/scorpion.casino/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-[36px] h-[36px]" src={social3} alt="" />
              </a>
            </div>
            <p className="text-[14px]">
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scorpion.casino"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@scorpion.casino
              </a>
            </p>
          </div>
          <div>
            <p className="text-[#fff] text-[14px]">
              Copyright 2025 Scorpion Casino <br />
              All Rights Reserved.
            </p>
          </div>
         </div>
        </div>
      )}
    </header>
  );
}
