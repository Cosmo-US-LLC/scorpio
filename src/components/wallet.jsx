import { useState } from "react";
import WalletSelectDropdown from "./WalletSelectDropdown";
import USDTicon from "../assets/tokens/usdt.svg"

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
      <div
        className="py-[6px] space-x-[8px] flex justify-center items-center rounded-[8.829px]"
        style={{
          background: "rgba(176, 176, 176, 0.17)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="18"
          viewBox="0 0 34 18"
          fill="none"
        >
          <rect
            width="33.1579"
            height="18"
            rx="2.52907"
            fill="white"
            fill-opacity="0.35"
          />
          <path
            d="M14.2318 5.36914L12.9877 12.6354H14.9775L16.2226 5.36914H14.2318ZM11.3193 5.37729L9.37045 10.3326L9.16267 9.58442C8.77833 8.68289 7.68722 7.38816 6.40625 6.5722L8.18825 12.6318L10.2937 12.6282L13.4273 5.37576L11.3193 5.37729Z"
            fill="black"
          />
          <path
            d="M8.39939 5.89809C8.28373 5.45547 7.94852 5.32355 7.53244 5.30777H4.44746L4.42188 5.45242C6.82261 6.03204 8.41116 7.42865 9.07033 9.10794L8.39939 5.89809ZM20.2475 6.76294C20.7579 6.75163 21.2651 6.84635 21.7368 7.04104L21.9164 7.12508L22.1856 5.55021C21.7915 5.40301 21.1738 5.24512 20.4031 5.24512C18.4368 5.24512 17.0509 6.23069 17.0402 7.64308C17.0274 8.68671 18.0274 9.2694 18.7828 9.61727C19.5581 9.97381 19.8181 10.2005 19.8145 10.5188C19.8084 11.0052 19.1963 11.2283 18.6247 11.2283C17.8278 11.2283 17.4046 11.1188 16.751 10.8478L16.4946 10.7317L16.2147 12.358C16.6804 12.5612 17.5397 12.7359 18.4317 12.7451C20.5233 12.7451 21.8826 11.7713 21.8969 10.2621C21.9056 9.43646 21.3749 8.80641 20.225 8.28943C19.529 7.95225 19.1032 7.72814 19.1073 7.3879C19.1073 7.08586 19.4686 6.76294 20.2475 6.76294ZM27.2921 5.37805H25.7547C25.2772 5.37805 24.922 5.50743 24.7122 5.98111L21.7577 12.6402H23.8473C23.8473 12.6402 24.1882 11.7448 24.2654 11.5487L26.8136 11.5517C26.8729 11.8054 27.0561 12.6402 27.0561 12.6402H28.9021L27.2921 5.37805ZM24.8381 10.0614C25.0019 9.64427 25.6309 8.03069 25.6309 8.03069C25.6201 8.05055 25.7931 7.61048 25.896 7.33697L26.03 7.96345L26.4911 10.0614H24.8381Z"
            fill="black"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="18"
          viewBox="0 0 35 18"
          fill="none"
        >
          <rect
            width="34.1053"
            height="18"
            rx="2.52907"
            fill="white"
            fill-opacity="0.35"
          />
          <path
            d="M13.9757 15.1655C10.6333 15.1655 7.91406 12.5344 7.91406 9.3003C7.91406 6.0662 10.6333 3.43506 13.9757 3.43506C17.3182 3.43506 20.0374 6.0662 20.0374 9.3003C20.0374 12.5344 17.3182 15.1655 13.9757 15.1655Z"
            fill="#EE2C3C"
          />
          <path
            d="M21.2569 3.43506C19.2845 3.43506 17.5461 4.36529 16.4392 5.78116H18.8021C19.0869 6.1448 19.3403 6.5319 19.5318 6.9542H15.7105C15.537 7.33053 15.4058 7.7238 15.319 8.12725H19.9235C20.0022 8.50615 20.0447 8.89911 20.0447 9.3003H15.1953C15.1953 9.70147 15.2377 10.0945 15.3178 10.4733H19.9222C19.8355 10.8768 19.7041 11.2701 19.5306 11.6464H15.7093C15.9009 12.0687 16.1542 12.4558 16.4392 12.8194H18.8021C18.4641 13.251 18.0664 13.6355 17.62 13.9619C18.6631 14.7383 19.941 15.1613 21.2569 15.1655C24.5994 15.1655 27.3187 12.5344 27.3187 9.3003C27.3187 6.0662 24.5994 3.43506 21.2569 3.43506Z"
            fill="#F99D3C"
          />
        </svg>

        <p className="text-[14px] text-[#fff] uppercase font-[700]">Buy with card</p>
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
                  src={selectedToken?.icon || USDTicon}
                  alt={selectedToken?.symbol || "token"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-[5px]">
        <p className="text-[14px] font-[700]">
          You Receive + <span className="text-[#E0AA3E] underline">Bronze NFT</span>:
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
   <button
        onClick={handleBuy}
        className="btn-primary !text-[20px] !text-[#000] mb-4 mt-2 w-[100%] max-md:py-[14px] md:!py-[16px]"
      >
        Connect Wallet
      </button>
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

   
      <div className="">
        
        <div
          className="px-[5px] py-1 w-full"
          style={{
            borderRadius: "7.442px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <p className="!text-[12px] text-center">
            <span className="text-[#E0AA3E]">Special Offer: </span>Get 20% more $SCORP2.0 tokens  with the code SCORP20 (valid for a limited time only)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
