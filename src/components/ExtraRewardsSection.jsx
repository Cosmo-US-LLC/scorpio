import { useState } from "react";
import card1 from "../assets/Rewards/card (5).webp";
import card2 from "../assets/Rewards/card (4).webp";
import card3 from "../assets/Rewards/card (3).webp";
import card4 from "../assets/Rewards/card (2).webp";
import card5 from "../assets/Rewards/card (1).webp";
import tick from "../assets/Rewards/tick.webp";

const ExtraRewardsSection = () => {
  const [spendAmount, setSpendAmount] = useState(56256);

  const getTierInfo = (amount) => {
    if (amount >= 100000) {
      return {
        tier: "Diamond",
        nft: "Diamond Scorpion NFT",
        threshold: "$90000",
        card: card5,
        rewards: [
          { text: "60% $SCORP2.0 Bonus", tick: true },
          { text: "40% Casino Credits", tick: true },
          { text: "20% Bonus Staking Rewards", tick: true },
          { text: "20% USDT Staking Rewards", tick: true },
          { text: "Scorpion Casino VIP Package", tick: true },
        ],
      };
    } else if (amount >= 26,369) {
      return {
        tier: "Platinum",
        nft: "Platinum Scorpion NFT",
        threshold: "$58,256",
        card: card4,
        rewards: [
          { text: "40% $SCORP2.0 Bonus", tick: true },
          { text: "25% Casino Credits", tick: true },
          { text: "10% Bonus Staking Rewards", tick: false },
          { text: "15% USDT Staking Rewards", tick: false },
          { text: "Scorpion Casino VIP Package", tick: false },
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
        threshold: "$58,256",
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
                <h6 className="">How much do you want to sh6end?</h6>
                <h6 className="">{formatCurrency(spendAmount)}</h6>
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
                  className="absolute top-[9px] -translate-y-1/2 w-[5px] h-[30px] bg-[#FFF] rounded-full  pointer-events-none"
                  style={{
                    left: `calc(${(spendAmount / 100000) * 100}% - 0px)`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="w-full md:max-w-[700px] overflow-hidden md:max-w-[700px]  rounded-[15.289px] px-[24px] py-[32px] "
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
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M7.64062 4.93652V8.28097"
                            stroke="#8D8F8F"
                            stroke-width="1.14667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.4266 5.46614V9.82345C13.4266 10.5369 13.0443 11.1995 12.4264 11.5626L8.6424 13.7476C8.02447 14.1044 7.26001 14.1044 6.63572 13.7476L2.85172 11.5626C2.23379 11.2058 1.85156 10.5433 1.85156 9.82345V5.46614C1.85156 4.75266 2.23379 4.09011 2.85172 3.727L6.63572 1.54197C7.25364 1.18523 8.0181 1.18523 8.6424 1.54197L12.4264 3.727C13.0443 4.09011 13.4266 4.74629 13.4266 5.46614Z"
                            stroke="#8D8F8F"
                            stroke-width="1.14667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.64062 10.3203V10.384"
                            stroke="#8D8F8F"
                            stroke-width="1.52889"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full">Buy $SCORP2.0</button>

                <p className="!leading-[111%] pt-4 text-center !text-[14px]">
                  You will get the membership NFT <br /> automatically when you
                  purchase $SCORP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-custom::-webkit-slider-thumb {
          appearance: none;
          width: 0px;
          height: 0px;
          border-radius: 50%;
          // background: linear-gradient(to right, #fcd34d, #fbbf24);
          cursor: pointer;
          // box-shadow: 0 0 15px rgba(252, 211, 77, 0.8);
          // border: 2px solid #fff;
        }

        .slider-custom::-moz-range-thumb {
          width: 0px;
          height: 0px;
          border-radius: 50%;
          // background: linear-gradient(to right, #fcd34d, #fbbf24);
          cursor: pointer;
          // box-shadow: 0 0 15px rgba(252, 211, 77, 0.8);
          // border: 2px solid #fff;
        }

        .slider-custom::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }

        .slider-custom::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default ExtraRewardsSection;
