import { useState } from "react";

const ExtraRewardsSection = () => {
  const [spendAmount, setSpendAmount] = useState(56256);

  // Determine which tier based on spend amount
  const getTierInfo = (amount) => {
    if (amount >= 58256) {
      return {
        tier: "PLATINUM",
        nft: "Platinum Scorpion NFT",
        threshold: "$58,256",
        rewards: [
          { text: "40% $SCORP2.0 Bonus", info: true },
          { text: "25% Casino Credits", info: true },
          { text: "10% Bonus Staking Rewards", info: true },
          { text: "15% USDT Staking Rewards", info: true },
          { text: "Scorpion Casino VIP Package", info: true },
        ],
      };
    } else if (amount >= 10000) {
      return {
        tier: "GOLD",
        nft: "Gold Scorpion NFT",
        threshold: "$10,000",
        rewards: [
          { text: "30% $SCORP2.0 Bonus", info: true },
          { text: "15% Casino Credits", info: true },
          { text: "5% Bonus Staking Rewards", info: true },
          { text: "Exclusive Member Benefits", info: true },
        ],
      };
    } else if (amount >= 1000) {
      return {
        tier: "SILVER",
        nft: "Silver Scorpion NFT",
        threshold: "$1,000",
        rewards: [
          { text: "20% $SCORP2.0 Bonus", info: true },
          { text: "10% Casino Credits", info: true },
          { text: "Member Benefits", info: true },
        ],
      };
    } else {
      return {
        tier: "STARTER",
        nft: "Starter Benefits",
        threshold: "$100",
        rewards: [{ text: "10% $SCORP2.0 Bonus", info: true }],
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
    <section className="relative w-full bg-linear-to-br from-black to-[#121212] py-16 px-6 md:px-16 overflow-hidden">
      {/* Decorative Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F7D774] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7D774] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Column - Text & Slider */}
          <div className="flex-1 w-full">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
              <span className="text-white">Get </span>
              <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
                Extra Rewards
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Starting From $1,000
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-6 mt-4 text-gray-300/90 max-w-xl">
              Unlock an even greater rewards! Enroll in the Elite Scorpion
              Members Club and enjoy incredible benefits starting from as little
              as $1,000. These advantages are exclusively available during the
              presale phase.
            </p>

            {/* Spend Slider */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm md:text-base text-gray-400 font-medium">
                  How much do you want to spend?
                </label>
                <span className="text-lg md:text-xl font-bold text-white">
                  {formatCurrency(spendAmount)}
                </span>
              </div>

              {/* Custom Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="100"
                  max="100000"
                  step="100"
                  value={spendAmount}
                  onChange={(e) => setSpendAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer slider-custom"
                  style={{
                    background: `linear-gradient(to right, #F7D774 0%, #F3B74E ${
                      (spendAmount / 100000) * 100
                    }%, #374151 ${
                      (spendAmount / 100000) * 100
                    }%, #374151 100%)`,
                  }}
                />
                {/* Slider Thumb Glow Effect */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-linear-to-r from-[#fcd34d] to-[#fbbf24] shadow-[0_0_15px_rgba(252,211,77,0.8)] pointer-events-none"
                  style={{
                    left: `calc(${(spendAmount / 100000) * 100}% - 12px)`,
                  }}
                ></div>
              </div>

              {/* Tier Markers */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>$100</span>
                <span>$1,000</span>
                <span>$10,000</span>
                <span>$100,000</span>
              </div>
            </div>
          </div>

          {/* Right Column - Reward Card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-[#F7D774]/30 transition-all duration-300">
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                  {tierInfo.tier} SCORPION NFT
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  When you spend {tierInfo.threshold} or more
                </p>
              </div>

              {/* NFT Image */}
              <div className="relative mb-6">
                <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#F7D774]/30 via-transparent to-transparent blur-2xl"></div>

                  {/* NFT Coin */}
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_60px_rgba(247,215,116,0.4)]"
                    style={{
                      transform:
                        "perspective(1000px) rotateY(-10deg) rotateX(5deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Metallic Gradient Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#E5E7EB] via-[#9CA3AF] to-[#6B7280] border-4 border-[#F7D774]"></div>

                    {/* Inner Ring */}
                    <div className="absolute inset-4 rounded-full border-2 border-white/30"></div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl mb-2">🦂</div>
                        <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                          {tierInfo.tier}
                        </div>
                        <div className="text-[10px] text-gray-600 uppercase mt-1">
                          Member
                        </div>
                      </div>
                    </div>

                    {/* Edge Highlights */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                  </div>
                </div>
              </div>

              {/* Rewards List */}
              <div className="space-y-3 mb-6">
                {tierInfo.rewards.map((reward, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {/* Checkmark Icon */}
                    <svg
                      className="w-5 h-5 shrink-0 text-[#F7D774] mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm text-gray-200 font-medium">
                        {reward.text}
                      </span>
                      {reward.info && (
                        <svg
                          className="w-4 h-4 text-gray-500 cursor-help"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold text-base md:text-lg py-3 rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105 mb-3">
                Buy $SCORP
              </button>

              {/* Small Caption */}
              <p className="text-xs text-center text-gray-400 leading-relaxed">
                You will get the membership NFT automatically when you purchase
                $SCORP!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider-custom::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #fcd34d, #fbbf24);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(252, 211, 77, 0.8);
          border: 2px solid #fff;
        }

        .slider-custom::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(to right, #fcd34d, #fbbf24);
          cursor: pointer;
          box-shadow: 0 0 15px rgba(252, 211, 77, 0.8);
          border: 2px solid #fff;
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
