import React, { useState, useEffect, useRef } from "react";

const WalletSelectDropdown = ({ tokens = [], selectedTokenId, onChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    console.log("Tokens received in WalletSelectDropdown:", tokens);
  }, [tokens]);

  // Pick selected token based on ID or default to first
  const selectedToken =
    tokens.find((t) => t.id === selectedTokenId) || tokens[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" flex flex-col w-full" ref={containerRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setDropdownOpen((open) => !open)}
        className="flex items-center justify-start  px-3 py-3 gap-[6px] cursor-pointer transition-all  dropdown_bg"
      >
        {selectedToken && (
          <>
            <img
              className="w-[18px] h-[18px] object-cover"
              src={selectedToken.icon}
              alt={selectedToken.symbol}
            />
            <p className="!text-[14px] font-[700">
              {selectedToken.symbol.toUpperCase()}
            </p>
          </>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
            className={`w-3 h-3 flex-shrink-0 ml-auto transition-transform ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M15.9566 7.61182L10.9322 12.6363C10.3388 13.2296 9.36781 13.2296 8.77443 12.6363L3.75 7.61182"
            stroke="white"
            stroke-width="1.27411"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown List */}
      {tokens.length > 0 && (
        <div
          className={`absolute top-8 left-0 w-full bg-[#fff] border border-[#D3D3D3] shadow-md rounded-[6px] z-[9999] max-h-48 overflow-y-auto transition-all duration-200 ${
            dropdownOpen
              ? "opacity-100 translate-y-1 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {tokens.map((token, index) => (
            <button
              key={index}
              className="flex items-center gap-x-[6px] py-2 px-2 w-full text-left hover:bg-gray-100"
              onClick={() => {
                console.log("Selected token:", token);
                onChange(token);
                setDropdownOpen(false);
              }}
            >
              <img
                className="w-[18px] h-[18px] object-cover"
                src={token.icon}
                alt={token.symbol}
              />
              <span className="text-[#545454] text-[11.688px] font-[700] leading-[1]">
                {token.symbol.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletSelectDropdown;
