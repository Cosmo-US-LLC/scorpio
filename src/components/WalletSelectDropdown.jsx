import { useState, useRef, useEffect } from "react";

export default function WalletSelectDropdown({ tokens, onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(tokens[0]);
  const dropdownRef = useRef(null);

  const handleSelect = (token) => {
    setSelected(token);
    setOpen(false);
    onChange?.(token);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-[100%]" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full pl-[8px] min-h-[45px] pr-[16px] py-[6px] rounded-full cursor-pointer"
        style={{ background: "rgba(176, 176, 176, 0.17)",
          border:"0.85px solid rgba(255, 255, 255, 0.12)",
          borderRadius:"84.498px"


         }}
      >
        <span className="flex items-center 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-[5px] gap-[4px] text-[11.7px] font-[700] font-[Inter]">
          <div className="min-w-[20px]">
            {selected.icon && (
              <img
                src={selected.icon}
                alt={selected.symbol}
                className="2xl:max-h-[22px] xl:max-h-[22px] lg:max-h-[22px] md:max-h-[22px] sm:max-h-[16px] max-h-[16px]"
              />
            )}
          </div>
          <span
            className={`leading-[15px] text-[#fff] text-start ${
              selected.symbol === "More"
                ? "text-[14px] font-[700] "
                : "2xl:text-[14px] font-[700] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[9.7px] text-[9.7px] "
            }`}
          >
            {selected.symbol}
            <br />
            {selected.sub_symbol && (
              <span className="md:text-[12px] text-[9px] text-gray-500 leading-[8px] font-[400]">
                {selected.sub_symbol}
              </span>
            )}
          </span>
        </span>
        <svg
          className={`w-4 h-4 transition-transform text-[#0c2f71] ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M15.355 6.89648L10.3306 11.9209C9.73723 12.5143 8.76625 12.5143 8.17287 11.9209L3.14844 6.89648"
            stroke="white"
            stroke-width="1.27411"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 max-h-[250px] overflow-y-scroll mt-1 w-full border border-gray-300 rounded-md shadow-md z-10 overflow-hidden"
          style={{
            background: "#929292ff",
            backdropFilter: "blur(5px)",
          }}
        >
          {tokens.map((token) => (
            <button
              key={token.id}
              onClick={() => handleSelect(token)}
              className="flex items-center text-[#fff] gap-x-2 w-full px-3 py-2 text-[11.7px] font-[700] font-[Inter] text-left hover:bg-[#8a8a8aff] bg-[#929292ff]"
            >
              {token.icon && (
                <img
                  src={token.icon}
                  alt={token.symbol}
                  className="max-h-[20px]"
                />
              )}
              <span className="flex flex-col leading-[10px] space-y-[-10px]">
                {token.symbol}
                <span className="text-[9px] font-[500]">
                  {token.sub_symbol}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
