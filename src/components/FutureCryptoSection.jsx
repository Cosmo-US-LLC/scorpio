const FutureCryptoSection = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-black to-[#1a1a1a] py-16 px-6 md:px-16 overflow-hidden">
      {/* Decorative Stars/Shine Accents */}
      <svg
        className="absolute top-12 left-12 w-5 h-5 text-white opacity-60 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-40 left-24 w-3 h-3 text-white opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-24 right-32 w-6 h-6 text-white opacity-70 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 right-16 w-4 h-4 text-white opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1.5s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto rounded-2xl shadow-xl shadow-black/40 bg-gradient-to-r from-[#1a0f0f]/50 via-[#1a1a1a]/50 to-[#0f1a0f]/50 backdrop-blur-sm overflow-hidden">
        {/* Golden Gradient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#fcd34d]/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 p-8 md:p-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4">
              <span className="text-white">$SCORP2.0 Is The </span>
              <span className="bg-linear-to-r from-[#EAEAEA] to-[#A1A1A1] bg-clip-text text-transparent">
                Future
              </span>
              <br />
              <span className="text-white">Leading </span>
              <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
                Gambling
              </span>
              <br />
              <span className="text-white">Cryptocurrency</span>
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base mt-4 leading-relaxed text-gray-300/90 max-w-xl">
              The $SCORP2.0 token is empowering the SCORPION ecosystem, offering
              over 30,000 betting opportunities monthly, 210 casino games, and
              160 sports to choose from. It's licensed, transparent, and
              provably fair platform!
            </p>

            {/* Secondary Text */}
            <p className="text-sm md:text-base mt-3 leading-relaxed text-gray-400 max-w-xl">
              Don't wait, come check us out now!
            </p>

            {/* CTA Button */}
            <button className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-semibold text-base tracking-wide rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105">
              Visit Casino
            </button>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex-1 relative flex items-center justify-center z-10">
            <div className="relative w-full max-w-md">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-red-900/30 via-orange-900/20 to-transparent blur-3xl"></div>

              {/* Hand Silhouette with Phone */}
              <div className="relative">
                {/* Red Glow Behind Hand */}
                <div className="absolute inset-0 -left-8 -right-8 -bottom-16 bg-gradient-radial from-red-600/40 via-orange-600/20 to-transparent blur-2xl"></div>

                {/* Hand Holding Phone Container */}
                <div
                  className="relative"
                  style={{ transform: "perspective(1000px) rotateY(-5deg)" }}
                >
                  {/* Phone Mockup */}
                  <div className="relative mx-auto w-64 md:w-72">
                    {/* Phone Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#fcd34d]/30 to-[#f97316]/30 blur-xl rounded-[3rem]"></div>

                    {/* Phone Device */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-[10px] border-black bg-black">
                      {/* Phone Screen */}
                      <div className="relative bg-linear-to-b from-[#1a1a1a] to-[#0a0a0a] aspect-[9/19]">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 pt-3 pb-2">
                          <span className="text-white text-xs">9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                            <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Casino Logo/Header */}
                        <div className="px-6 pt-2 pb-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-white text-lg font-bold">
                              🦂 <span className="text-[#fcd34d]">CASINO</span>
                            </h3>
                            <div className="flex gap-2">
                              <div className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded">
                                NEW
                              </div>
                              <div className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded">
                                HOT
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Game Cards Grid */}
                        <div className="px-4 space-y-2 pb-4">
                          {/* Row 1 */}
                          <div className="grid grid-cols-2 gap-2">
                            {/* Aviator */}
                            <div className="rounded-lg overflow-hidden bg-red-900 h-24 relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900"></div>
                              <div className="relative p-2 h-full flex flex-col justify-between">
                                <span className="text-white text-xs font-bold">
                                  ✈️ Aviator
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="text-white/80 text-[10px]">
                                    Play Now
                                  </span>
                                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                                </div>
                              </div>
                            </div>

                            {/* Cricket */}
                            <div className="rounded-lg overflow-hidden bg-blue-900 h-24 relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900"></div>
                              <div className="relative p-2 h-full flex flex-col justify-between">
                                <span className="text-white text-xs font-bold">
                                  🏏 Cricket
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="text-white/80 text-[10px]">
                                    Bet Live
                                  </span>
                                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Row 2 */}
                          <div className="grid grid-cols-2 gap-2">
                            {/* Roulette */}
                            <div className="rounded-lg overflow-hidden bg-purple-900 h-24 relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900"></div>
                              <div className="relative p-2 h-full flex flex-col justify-between">
                                <span className="text-white text-xs font-bold">
                                  🎰 Roulette
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="text-white/80 text-[10px]">
                                    Spin Now
                                  </span>
                                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                                </div>
                              </div>
                            </div>

                            {/* Slots */}
                            <div className="rounded-lg overflow-hidden bg-green-900 h-24 relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-900"></div>
                              <div className="relative p-2 h-full flex flex-col justify-between">
                                <span className="text-white text-xs font-bold">
                                  🎲 Slots
                                </span>
                                <div className="flex items-center justify-between">
                                  <span className="text-white/80 text-[10px]">
                                    Play
                                  </span>
                                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Banner */}
                          <div className="rounded-lg bg-linear-to-r from-[#fcd34d] to-[#fbbf24] p-3 text-center">
                            <span className="text-black text-xs font-bold">
                              🎁 $250K GIVEAWAY LIVE!
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Phone Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                    </div>

                    {/* Hand Silhouette - Bottom */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-32">
                      <svg
                        viewBox="0 0 200 150"
                        className="w-full h-full opacity-90"
                      >
                        {/* Thumb */}
                        <ellipse
                          cx="40"
                          cy="80"
                          rx="25"
                          ry="35"
                          fill="#0a0a0a"
                        />
                        {/* Palm Base */}
                        <path
                          d="M 60 60 Q 100 50 140 60 L 140 120 Q 100 130 60 120 Z"
                          fill="#0a0a0a"
                        />
                        {/* Fingers */}
                        <rect
                          x="70"
                          y="30"
                          width="15"
                          height="50"
                          rx="8"
                          fill="#0a0a0a"
                        />
                        <rect
                          x="90"
                          y="20"
                          width="15"
                          height="60"
                          rx="8"
                          fill="#0a0a0a"
                        />
                        <rect
                          x="110"
                          y="25"
                          width="15"
                          height="55"
                          rx="8"
                          fill="#0a0a0a"
                        />
                        <rect
                          x="130"
                          y="35"
                          width="15"
                          height="45"
                          rx="8"
                          fill="#0a0a0a"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureCryptoSection;
