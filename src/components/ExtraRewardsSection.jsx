import { useState } from "react";
import card1 from "../assets/Rewards/card (5).webp";
import card2 from "../assets/Rewards/card (4).webp";
import card3 from "../assets/Rewards/card (3).webp";
import card4 from "../assets/Rewards/card (2).webp";
import card5 from "../assets/Rewards/card (1).webp";
import tick from "../assets/Rewards/tick.webp";

const ExtraRewardsSection = () => {
  const [spendAmount, setSpendAmount] = useState(1000);

  const getTierInfo = (amount) => {
    if (amount >= 100000) {
      return {
        tier: "Diamond",
        nft: "Diamond Scorpion NFT",
        threshold: "$100000",
        card: card5,
        rewards: [
          { text: "60% $SCORP2.0 Bonus", tick: true },
          { text: "40% Casino Credits", tick: true },
          { text: "20% Bonus Staking Rewards", tick: true },
          { text: "20% USDT Staking Rewards", tick: true },
          { text: "Scorpion Casino VIP Package", tick: true },
        ],
      };
    } else if (amount >= 26369) {
      return {
        tier: "Platinum",
        nft: "Platinum Scorpion NFT",
        threshold: "$26369",
        card: card4,
        rewards: [
          { text: "40% $SCORP2.0 Bonus", tick: true },
          { text: "25% Casino Credits", tick: true },
          { text: "10% Bonus Staking Rewards", tick: true },
          { text: "15% USDT Staking Rewards", tick: true },
          { text: "Scorpion Casino VIP Package", tick: true },
        ],
      };
    } else if (amount >= 10435) {
      return {
        tier: "GOLD",
        nft: "Gold Scorpion NFT",
        threshold: "$10,000",
        card: card3,
        rewards: [
          { text: "25% $SCORP2.0 Bonus", tick: true },
          { text: "15% Casino Credits", tick: true },
          { text: "5% Bonus Staking Rewards", tick: true },
          { text: "10% USDT Staking Rewards", tick: true },
          { text: "Scorpion Casino VIP Package", tick: false },
        ],
      };
    } else if (amount >= 5306) {
      return {
        tier: "SILVER",
        nft: "Silver Scorpion NFT",
        threshold: "$1,000",
        card: card2,
        rewards: [
          { text: "15% $SCORP2.0 Bonus", tick: true },
          { text: "10% Casino Credits", tick: true },
          { text: "2% Bonus Staking Rewards", tick: true },
          { text: "USDT Staking Rewards", tick: false },
          { text: "Scorpion Casino VIP Package", tick: false },
        ],
      };
    } else {
      return {
        tier: "Bronze",
        nft: "Bronze Scorpion NFT",
        threshold: "$1,000",
        card: card1,
        rewards: [
          { text: "10% $SCORP2.0 Bonus", tick: true },
          { text: "5% Casino Credits", tick: true },
          { text: "Bonus Staking Rewards", tick: false },
          { text: "USDT Staking Rewards", tick: false },
          { text: "Scorpion Casino VIP Package", tick: false },
        ],
      };
    }
  };

  const tierInfo = getTierInfo(spendAmount);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="relative w-full max-md:pt-0 py-16 px-4 md:px-16 ">
      {/* Decorative Glow Accents */}

      <div className="max-w-[1280px] mx-auto rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full max-w-[482px] ">
            <h2 className="mb-2 tracking-[-2px] max-md:text-center md:text-start max-md:min-w-[100%] md:min-w-[550px]">
              Get Extra <span className="text_gradient">Rewards Starting</span>{" "}
              From $1,000
            </h2>

            <p className="max-md:text-center md:text-base  mt-4 ">
              Not only will you get more $SCORP2.0, but you’ll also unlock
              greater rewards! Enroll in the Elite Scorpion Members Club and
              enjoy incredible benefits starting from as little as $1000. These
              advantages are exclusively available during the presale.
            </p>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <h6 className="!font-[700] max:md!text-[14px]">How much do you want to send?</h6>
                <h6 className="max:md!text-[14px] !font-[700]">{formatCurrency(spendAmount)}</h6>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="100"
                  value={spendAmount}
                  onChange={(e) => setSpendAmount(Number(e.target.value))}
                  className="w-full h-[18px] rounded-full appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #94A7B5 ${
                      ((spendAmount - 1000) / (100000 - 1000)) * 100
                    }%, rgba(255, 255, 255, 0.20) ${
                      ((spendAmount - 1000) / (100000 - 1000)) * 100
                    }%, rgba(255, 255, 255, 0.20))`,
                  }}
                />
                <div
                  className="absolute top-[9px] -translate-y-1/2 w-[7px] h-[30px] bg-[#FFF] rounded-full  pointer-events-none"
                  style={{
                    left: `calc(${(spendAmount / 100000) * 100}% - 7px)`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="w-full max-md:mt-4 md:max-w-[700px] overflow-hidden md:max-w-[700px]  rounded-[15.289px] px-[24px] py-[32px] "
            style={{
              border: "0.764px solid rgba(255, 255, 255, 0.10)",
              background: "rgba(27, 26, 22, 0.40)",
              backdropFilter: "blur(7.644444465637207px)",
            }}
          >
            <div className="flex max-md:flex-col max-md:space-y-[20px] justify-between items-center md:space-x-4 ">
              <div className="relative md:max-w-[300px] w-[100%]">
                <h3 className="text_gradient_gray  text-start !text-[30px]">
                  {tierInfo.tier} <br /> SCORPION NFT
                </h3>
                <p className="pb-4 pt-2 ">
                  When you spend {formatCurrency(spendAmount)} or more
                </p>
                <div className="">
                  <img src={tierInfo.card} alt="" />
                </div>
                <div
                  className="absolute bottom-[100px]"
                  style={{
                    width: "249.209px",
                    height: "94.791px",
                    borderRadius: "249.209px",
                    background:
                      "linear-gradient(90deg, #E5E4E2 5.47%, #AABBC8 38.55%, #E5E4E2 69.43%, #94A7B5 97.22%)",
                    filter: "blur(114.66667175292969px)",
                    zIndex: 0,
                  }}
                ></div>
              </div>

              <div>
                <div className="space-y-4 mb-6">
                  {tierInfo.rewards.map((reward, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex items-center gap-2 flex-1">
                        {reward.tick ? (
                          <img
                            src={tick}
                            className="w-[19.876px] h-[19.876px]"
                            alt="Tick icon"
                          />
                        ) : (
                          <div
                            style={{
                              borderRadius: "3.058px",
                              border: "0.764px solid rgba(255, 255, 255, 0.20)",
                              background: "#313133",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M11.4653 3.82227L3.82031 11.4673"
                                stroke="#CCCCCC"
                                stroke-width="1.27417"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M3.82031 3.82227L11.4653 11.4673"
                                stroke="#CCCCCC"
                                stroke-width="1.27417"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        )}
                        <h4 className="max-md:!text-[14px] md:text-[16px]">
                          {reward.text}
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 22 22"
                          fill="none"
                          class="cursor-pointer"
                        >
                          <path
                            d="M10.5 0C16.023 0 20.5 4.477 20.5 10C20.5 15.523 16.023 20 10.5 20C4.977 20 0.5 15.523 0.5 10C0.5 4.477 4.977 0 10.5 0ZM10.5 1.395C8.21781 1.395 6.0291 2.3016 4.41535 3.91535C2.8016 5.5291 1.895 7.71781 1.895 10C1.895 12.2822 2.8016 14.4709 4.41535 16.0847C6.0291 17.6984 8.21781 18.605 10.5 18.605C12.7822 18.605 14.9709 17.6984 16.5847 16.0847C18.1984 14.4709 19.105 12.2822 19.105 10C19.105 7.71781 18.1984 5.5291 16.5847 3.91535C14.9709 2.3016 12.7822 1.395 10.5 1.395ZM10.355 7.21C10.74 7.21 11.052 7.523 11.052 7.908V15.466C11.0452 15.6464 10.9687 15.8172 10.8386 15.9424C10.7086 16.0676 10.535 16.1376 10.3545 16.1376C10.174 16.1376 10.0004 16.0676 9.87037 15.9424C9.74031 15.8172 9.66383 15.6464 9.657 15.466V7.907C9.657 7.522 9.969 7.21 10.355 7.21ZM10.383 4.419C10.6297 4.419 10.8662 4.51698 11.0406 4.69139C11.215 4.8658 11.313 5.10235 11.313 5.349C11.313 5.59565 11.215 5.8322 11.0406 6.00661C10.8662 6.18102 10.6297 6.279 10.383 6.279C10.1363 6.279 9.8998 6.18102 9.72539 6.00661C9.55098 5.8322 9.453 5.59565 9.453 5.349C9.453 5.10235 9.55098 4.8658 9.72539 4.69139C9.8998 4.51698 10.1363 4.419 10.383 4.419Z"
                            fill="white"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#wallet");
                    if (target) {
                      const yOffset = 20;
                      const y =
                        target.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="btn-primary w-full"
                >
                  Buy $SCORP2.0
                </button>

                <p className="!leading-[111%] pt-4 text-center !text-[14px]">
                  (You will get the membership NFT <br /> automatically when you
                  purchase $SCORP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-custom {
          -webkit-appearance: none; /* Safari / iOS Safari reset */
          appearance: none;
          width: 100%;
          height: 18px;
          background: #ddd;
          border-radius: 18px;
          outline: none;
        }

        /* ---------- WebKit browsers (Chrome, Safari, iOS Safari) ---------- */
        .slider-custom::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px !important;
          height: 18px !important;
          border-radius: 50%;
           background: #00000002;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 0 0px #fff !important;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        /* ---------- Firefox ---------- */
        .slider-custom::-moz-range-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px !important;
          height: 18px !important;
          border-radius: 50%;
           background: #00000002;
          cursor: pointer;
          transition: transform 0.2s ease;
          box-shadow: 0 0 0px #ddd !important;
        }

        .slider-custom::-moz-range-thumb:hover {
          transform: scale(1.1);
        }

        /* ---------- Optional: track styling for iOS Safari ---------- */
        .slider-custom::-webkit-slider-runnable-track {
          height: 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default ExtraRewardsSection;
