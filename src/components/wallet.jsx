import { useState } from "react";
import WalletSelectDropdown from "./WalletSelectDropdown";

import Scorpiontoken from "../assets/tokens/Scorpion_token.svg";
import { tokenImageMap, chainImgMap } from "../assets/tokens";
const Wallet = ({ onTabChange }) => {
  const [selectedToken, setSelectedToken] = useState();
  const [selectedWallet, setSelectedWallet] = useState();
  const [paymentAmount, setPaymentAmount] = useState("1");
  const [receiveAmount, setReceiveAmount] = useState("0");

  const TOKEN_PRICE = 0.02; // static price for now

  const tokenSelect = [
    [
      { id: 1, symbol: "ETH", sub_symbol: "ERC-20" },
      { id: 2, symbol: "USDT", sub_symbol: "ERC-20" },
      { id: 3, symbol: "SHIB", sub_symbol: "ERC-20" },
      { id: 4, symbol: "PEPE", sub_symbol: "ERC-20" },
      { id: 5, symbol: "USDTC", sub_symbol: "ERC-20" },
    ],
    [
      { id: 6, symbol: "BNB", sub_symbol: "BEP-20" },
      { id: 6, symbol: "BUSD", sub_symbol: "BEP-20" },
      { id: 7, symbol: "USDT", sub_symbol: "BEP-20" },
      { id: 8, symbol: "USDC", sub_symbol: "BEP-20" },
    ],
    [
      { id: 9, symbol: "USDT", sub_symbol: "ERC-20" },
      { id: 10, symbol: "USDT", sub_symbol: "TRC-20" },
      { id: 11, symbol: "USDT", sub_symbol: "SOLANA" },
      { id: 12, symbol: "USDT", sub_symbol: "BEP-20" },
    ],
    [
       { id: 13, symbol: "USDC", sub_symbol: "BEP-20" },
      { id: 14, symbol: "BTC", sub_symbol: "SOLANA" },
      { id: 15, symbol: "USDT", sub_symbol: "SOLANA" },
      { id: 16, symbol: "USDC", sub_symbol: "SOLANA" },
    ],
    [
      { id: 17, symbol: "SOL", sub_symbol: "ERC-20" },
      { id: 18, symbol: "BNB", sub_symbol: "ERC-20" },
    ],
    [
      { id: 19, symbol: "More" },
      { id: 20, symbol: "XRP", sub_symbol: "XRP" },
      { id: 21, symbol: "DOGE", sub_symbol: "DOGECOIN" },
      { id: 22, symbol: "TON", sub_symbol: "TON CHAIN" },
      { id: 23, symbol: "TRX", sub_symbol: "TRX-20" },
      { id: 24, symbol: "ADA", sub_symbol: "CARDANO" },
      { id: 25, symbol: "USDT", sub_symbol: "TRC-20" },
      { id: 26, symbol: "LCT", sub_symbol: "LITECOIN" },
      { id: 27, symbol: "USDC", sub_symbol: "BASE" },
      { id: 28, symbol: "ETH", sub_symbol: "BASE" },
    ],
  ];

  const handlePaymentChange = (value) => {
    const regex = /^(\d*|(\d+\.?\d*))$/;
    if (!regex.test(value)) return;

    setPaymentAmount(value);
    const paymentNum = parseFloat(value) || 0;
    const received = paymentNum / TOKEN_PRICE; // static ratio for now
    setReceiveAmount(received.toFixed(4));
  };
  const handleBuy = () => {
    console.log("Buy button clicked!");
    // your logic here — e.g., validate inputs, submit transaction, etc.
  };

  return (
    <div
      className="justify-between max-md:space-y-[15px] md:space-y-[10px] flex max-md:p-[12px] md:p-[24px] flex-col relative w-full min-h-full isolate"
      style={{
        borderRadius: "13.675px",
        border: "0.684px solid #D4AA49",
        background: "rgba(18, 19, 31, 0.40)",
        backdropFilter: "blur(6.837605953216553px)",
      }}
    >
      <h2
        className="text-center md:text-[25px] max-md:!text-[22px]"
        style={{
          color: "rgba(255, 255, 254, 0.50)",
        }}
      >
        SCORP2.0 PRESALE
      </h2>
      <div
        className="px-[30px] py-[20px] space-y-[8px] border-[1px] border-[#F9F295] rounded-[8px]"
        style={{ background: "#000" }}
      >
        <h2 className="text-center text_gradient md:text-[40px] max-md:!text-[32px] font-[700]">
          $11,756,398.80
        </h2>
        <div className="">
          <div className="flex justify-between items-center pb-1">
            <p className="text-[#fff] text-[14px] font-[700] leading-[100%]">
              80% of presale stage softcap
            </p>
          </div>
          <div className="bg-gray-800 w-[100%] md:h-[17px] max-md:h-[32px] rounded-[20px]">
            <div
              className="md:h-[17px] max-md:h-[32px] rounded-[20px]"
              style={{
                width: "65%",
                background: "#E2B146",
              }}
            />
          </div>
          <div>
            <p
              className=" !text-[14px] text-end  font-[700] leading-[150%]"
              style={{
                color: "rgba(255, 255, 255, 0.50)",
              }}
            >
              $12,000,000
            </p>
          </div>
        </div>
        <div className="">
          <h5 className="text-center max-md:!text-[18px]">18,948 Holders</h5>
        </div>
      </div>

      {/* Token Select */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-3">
        {tokenSelect.map((data, index) => (
          <WalletSelectDropdown
            key={index}
            tokens={
              Array.isArray(data)
                ? data.map((token) => ({
                    ...token,
                    icon:
                      tokenImageMap?.[token.symbol?.toLowerCase()] ||
                      chainImgMap?.[token.sub_symbol?.toUpperCase()] ||
                      undefined,
                  }))
                : []
            }
            onChange={(token) => setSelectedToken(token)}
          />
        ))}
      </div>

      <div
        className="rounded-[68.376px] flex items-center justify-center max-md:space-x-0 md:space-x-4 md:py-2 max-md:py-1 md:px-4 max-md:px-1 w-full"
        style={{
          background: "rgba(60, 60, 60, 0.50)",
        }}
      >
        <p className="md:!text-[14px] max-md:!text-[13px] max-md:pr-[2px]">
          Presale Price = <span className="text_gradient">$0.055</span>
        </p>
        <p className="md:!text-[14px] max-md:!text-[13px]">|</p>
        <p className="md:!text-[14px] max-md:!text-[13px] max-md:pl-[2px]">
          Listing Price = <span className="text_gradient">$0.15</span>
        </p>
      </div>

      {/* Payment Input */}
      <div className="space-y-[5px]">
        <p className="text-[14px] font-[700]">You Pay:</p>
        <div className="px-2 rounded-[8px] walletinput_bg">
          <div className="px-1 flex justify-between items-center">
            <div className="w-[80%] ">
              <input
                type="text"
                className="py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none bg-transparent"
                value={paymentAmount}
                onChange={(e) => handlePaymentChange(e.target.value)}
              />
            </div>
            <div
              className="relative flex justify-center py-2  px-[10px] w-[70px]"
              style={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
              }}
            >
              <div className="w-[100%] justify-center flex  items-center">
                <img
                  className="w-[25.813px] h-[25.813px] object-cover"
                  src={selectedToken?.icon || "/placeholder.svg"}
                  alt={selectedToken?.symbol || "token"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-[5px]">
        <p className="text-[14px] font-[700]">
          You Receive + <span className="text-[#E0AA3E]">Bronze NFT</span>:
        </p>
        <div className="px-2 rounded-[8px] walletinput_bg">
          <div className="px-1 flex justify-between items-center">
            <div className="w-[80%] ">
              <input
                type="text"
                className="py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none bg-transparent"
                value={paymentAmount}
                onChange={(e) => handlePaymentChange(e.target.value)}
              />
            </div>
            <div
              className="relative flex justify-center py-2  px-[10px] w-[70px]"
              style={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
              }}
            >
              <div className="w-[100%] justify-center flex  items-center">
                <img
                  className="w-[25.813px] h-[25.813px] object-cover"
                  src={Scorpiontoken}
                  alt="Scorpiontoken"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-[8px]">
        <div className="flex justify-center space-x-3">
          <button
            className="!text-[14px] max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="mr-1"
            >
              <path
                d="M7.50359 11.1722C7.82702 11.1722 8.08921 10.91 8.08921 10.5866C8.08921 10.2632 7.82702 10.001 7.50359 10.001C7.18016 10.001 6.91797 10.2632 6.91797 10.5866C6.91797 10.91 7.18016 11.1722 7.50359 11.1722Z"
                fill="white"
              />
              <path
                d="M7.50488 2.04883C10.6372 2.04885 13.1719 4.58388 13.1719 7.71582C13.1719 10.8482 10.6368 13.3828 7.50488 13.3828C4.37252 13.3828 1.83791 10.8478 1.83789 7.71582C1.83789 4.58345 4.37294 2.04883 7.50488 2.04883ZM7.50488 3.06055C4.93158 3.06055 2.84961 5.14286 2.84961 7.71582C2.84963 10.2891 4.93194 12.3711 7.50488 12.3711C10.0782 12.3711 12.1601 10.2888 12.1602 7.71582C12.1602 5.14253 10.0778 3.06057 7.50488 3.06055Z"
                fill="white"
                stroke="white"
                stroke-width="0.136752"
              />
              <path
                d="M7.50344 4.72852C6.46982 4.72852 5.62891 5.56943 5.62891 6.60305C5.62891 6.86187 5.83871 7.07168 6.09754 7.07168C6.35636 7.07168 6.56617 6.86187 6.56617 6.60305C6.56617 6.08624 6.98663 5.66578 7.50344 5.66578C8.02025 5.66578 8.4407 6.08624 8.4407 6.60305C8.4407 7.11985 8.02025 7.54031 7.50344 7.54031C7.24461 7.54031 7.0348 7.75012 7.0348 8.00894V9.18053C7.0348 9.43935 7.24461 9.64916 7.50344 9.64916C7.76226 9.64916 7.97207 9.43935 7.97207 9.18053V8.41827C8.77966 8.20966 9.37797 7.47491 9.37797 6.60305C9.37797 5.56943 8.53705 4.72852 7.50344 4.72852Z"
                fill="white"
              />
            </svg>
            Bonus Code
          </button>
          <button
            className="!text-[14px] max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M8.38145 7.09912C9.68959 8.40726 9.68959 10.5235 8.38145 11.8259C7.07331 13.1282 4.95703 13.134 3.65471 11.8259C2.35238 10.5177 2.34657 8.40145 3.65471 7.09912"
                stroke="white"
                stroke-width="1.02534"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.94613 8.53573C5.58566 7.17526 5.58566 4.96596 6.94613 3.59968C8.30659 2.2334 10.5159 2.23921 11.8822 3.59968C13.2485 4.96014 13.2426 7.16945 11.8822 8.53573"
                stroke="white"
                stroke-width="1.02534"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            5% Referral Link
          </button>
        </div>
        <div className="flex justify-center space-x-3">
          <button
            className="!text-[14px] max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.83953 11.1722C8.16296 11.1722 8.42515 10.91 8.42515 10.5866C8.42515 10.2632 8.16296 10.001 7.83953 10.001C7.5161 10.001 7.25391 10.2632 7.25391 10.5866C7.25391 10.91 7.5161 11.1722 7.83953 11.1722Z"
                fill="white"
              />
              <path
                d="M7.84082 2.04883C10.9732 2.04885 13.5078 4.58388 13.5078 7.71582C13.5078 10.8482 10.9727 13.3828 7.84082 13.3828C4.70846 13.3828 2.17385 10.8478 2.17383 7.71582C2.17383 4.58345 4.70887 2.04883 7.84082 2.04883ZM7.84082 3.06055C5.26752 3.06055 3.18555 5.14286 3.18555 7.71582C3.18557 10.2891 5.26787 12.3711 7.84082 12.3711C10.4141 12.3711 12.4961 10.2888 12.4961 7.71582C12.4961 5.14253 10.4138 3.06057 7.84082 3.06055Z"
                fill="white"
                stroke="white"
                stroke-width="0.136752"
              />
              <path
                d="M7.83937 4.72852C6.80576 4.72852 5.96484 5.56943 5.96484 6.60305C5.96484 6.86187 6.17465 7.07168 6.43348 7.07168C6.6923 7.07168 6.90211 6.86187 6.90211 6.60305C6.90211 6.08624 7.32257 5.66578 7.83937 5.66578C8.35618 5.66578 8.77664 6.08624 8.77664 6.60305C8.77664 7.11985 8.35618 7.54031 7.83937 7.54031C7.58055 7.54031 7.37074 7.75012 7.37074 8.00894V9.18053C7.37074 9.43935 7.58055 9.64916 7.83937 9.64916C8.0982 9.64916 8.30801 9.43935 8.30801 9.18053V8.41827C9.1156 8.20966 9.71391 7.47491 9.71391 6.60305C9.71391 5.56943 8.87299 4.72852 7.83937 4.72852Z"
                fill="white"
              />
            </svg>
            How to buy
          </button>
        </div>
      </div>

      <button
        onClick={handleBuy}
        className="btn-primary !text-[20px] !text-[#000] w-[100%] max-md:py-[14px] md:!py-[16px]"
      >
        Connect Wallet
      </button>
      <div className="space-y-[8px]">
        <p className="text-[#E0AA3E] !text-center !text-[14px]">
          Special Easter Offer (Final Bonus Code)
        </p>
        <div
          className="px-[5px] py-1 w-full"
          style={{
            borderRadius: "7.442px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <p className="!text-[14px] text-center">
            Get 40% more $SCORP tokens with the code EASTER40 (Valid for a
            limited time only)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
