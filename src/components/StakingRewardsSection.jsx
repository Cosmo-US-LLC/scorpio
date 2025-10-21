const StakingRewardsSection = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-black via-[#0a0a0a] to-[#121212] py-16 px-6 md:px-16 overflow-hidden">
      {/* Decorative Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcd34d] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#d4af37]/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      {/* Decorative Stars */}
      <svg
        className="absolute top-16 right-20 w-4 h-4 text-[#fcd34d] opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-24 left-16 w-3 h-3 text-[#fcd34d] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1.5s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="max-w-7xl mx-auto rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column - Phone Mockup with Casino Elements */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-[#fcd34d]/20 via-transparent to-transparent blur-3xl"></div>

              {/* Floating Dice - Top Left */}
              <div
                className="absolute -top-8 -left-8 md:-left-12 w-16 h-16 md:w-20 md:h-20 z-20"
                style={{
                  animation: "float 6s ease-in-out infinite",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                }}
              >
                <div
                  className="w-full h-full bg-linear-to-br from-white to-gray-200 rounded-lg relative"
                  style={{
                    transform: "rotateX(25deg) rotateY(-25deg) rotateZ(15deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Dice Dots */}
                  <div className="absolute inset-2 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <div></div>
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <div></div>
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <div></div>
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                      <div></div>
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Poker Chip - Top Right */}
              <div
                className="absolute -top-4 -right-4 md:-right-8 w-20 h-20 md:w-24 md:h-24 z-20"
                style={{
                  animation: "float 7s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#d4af37] to-[#b8942e] shadow-[0_10px_30px_rgba(212,175,55,0.5)]"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-white/90 border-dashed"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-bold text-xl md:text-2xl">
                      $
                    </div>
                  </div>
                  {/* Chip Edge Segments */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-3 bg-white rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${
                          i * 45
                        }deg) translateY(-${10}px)`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Dice - Bottom Right */}
              <div
                className="absolute -bottom-6 -right-8 md:-right-12 w-14 h-14 md:w-16 md:h-16 z-20"
                style={{
                  animation: "float 5.5s ease-in-out infinite",
                  animationDelay: "2s",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                }}
              >
                <div
                  className="w-full h-full bg-linear-to-br from-red-600 to-red-800 rounded-lg relative"
                  style={{
                    transform: "rotateX(-20deg) rotateY(20deg) rotateZ(-10deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Single Dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white shadow-inner"></div>
                  </div>
                </div>
              </div>

              {/* Poker Chip - Bottom Left */}
              <div
                className="absolute -bottom-8 -left-6 md:-left-10 w-16 h-16 md:w-20 md:h-20 z-20"
                style={{
                  animation: "float 6.5s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-red-600 to-red-800 shadow-[0_10px_30px_rgba(220,38,38,0.5)]"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-white/90 border-dashed"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-bold text-lg md:text-xl">
                      ♠
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup Container */}
              <div
                className="relative z-10"
                style={{
                  transform: "perspective(1000px) rotateY(-5deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-[8px] border-black bg-black">
                  {/* Phone Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#fcd34d]/30 via-transparent to-transparent opacity-50"></div>

                  {/* Phone Screen Content */}
                  <div className="relative bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] aspect-[9/19] w-full max-w-[280px] md:max-w-[320px]">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-4 pb-2">
                      <span className="text-white text-xs">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                        <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                        <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Logo/Header */}
                    <div className="px-6 pt-4">
                      <h3 className="text-white text-xl font-bold">
                        🦂 <span className="text-[#fcd34d]">SCORPION</span>{" "}
                        CASINO
                      </h3>
                    </div>

                    {/* Staking Dashboard Preview */}
                    <div className="px-6 pt-6 space-y-4">
                      {/* Balance Card */}
                      <div className="bg-linear-to-br from-[#fcd34d] to-[#d4af37] rounded-xl p-4 shadow-lg">
                        <p className="text-black/70 text-xs font-medium mb-1">
                          Total Staked
                        </p>
                        <p className="text-black text-2xl font-bold">
                          $12,450.00
                        </p>
                        <p className="text-black/60 text-xs mt-2">
                          +$245 today ↗️
                        </p>
                      </div>

                      {/* Rewards List */}
                      <div className="space-y-2">
                        <p className="text-gray-400 text-xs font-semibold">
                          Daily Rewards
                        </p>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">
                              USDT Reward
                            </span>
                            <span className="text-[#fcd34d] font-semibold text-sm">
                              +$24.50
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">
                              $SCORP2.0
                            </span>
                            <span className="text-[#fcd34d] font-semibold text-sm">
                              +150 tokens
                            </span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">
                              Bonus Pool
                            </span>
                            <span className="text-green-500 font-semibold text-sm">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Claim Button Preview */}
                      <button className="w-full bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold py-3 rounded-lg text-sm shadow-lg">
                        Claim Rewards
                      </button>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                </div>

                {/* Phone Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/60 blur-2xl rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-baseline mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Daily Staking Rewards
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-400 leading-tight mb-6">
              Are Live Now
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base leading-6 mt-4 text-gray-300/90 max-w-xl">
              Get paid every day even during the pre-sale based on the amount of
              $SCORP2.0 you hold. The faster you buy, $SCORP2.0 tokens will
              unlock your passive staking rewards. Payments are made in USDT,
              and the rewards will grow over time. Don't miss this opportunity
              to be one of the first to enjoy truly passive staking income.
            </p>

            {/* CTA Button */}
            <button className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-semibold text-base md:text-lg rounded-full hover:shadow-[0_0_40px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105 shadow-lg">
              Buy $SCORP2.0
            </button>

            {/* Additional Info Pills */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-300 font-medium">
                  💰 Daily USDT Rewards
                </span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-300 font-medium">
                  🚀 Growing Returns
                </span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-gray-300 font-medium">
                  ⚡ Instant Unlock
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Keyframe Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default StakingRewardsSection;
