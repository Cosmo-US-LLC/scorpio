const BreakingBarriersSection = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-black via-[#121212] to-[#1a1510] py-16 px-6 md:px-16 overflow-hidden">
      {/* Subtle Amber Glow Highlights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600 opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Main Layout - Two Columns */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="w-[50%] text-center md:text-left relative">
            {/* Main Heading with Badge */}
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                <span className="text-white block mb-2">Breaking Down</span>
                <span className="text-white block mb-2">The Barriers</span>
                <span className="text-gray-500 block">The Casino Industry</span>
              </h2>

              {/* Decorative Circular Badge (BN Logo) */}
              <div className="absolute -top-4 -right-12 md:-right-16 flex gap-2 z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.6)] border-2 border-white">
                  <span className="text-white font-bold text-lg md:text-xl">
                    B
                  </span>
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)] border-2 border-white">
                  <span className="text-white font-bold text-lg md:text-xl">
                    N
                  </span>
                </div>
              </div>
            </div>

            {/* Subheading */}
            <h3 className="text-lg md:text-xl font-semibold text-white mt-6 leading-relaxed">
              $SCORP Delivers Exclusive Insider Access to the world of Gambling.
            </h3>

            {/* Body Paragraphs */}
            <div className="space-y-4 mt-6">
              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                Launching an online casino from scratch typically takes 6–18
                months of intense juggling of $2 million investment, legal
                complexities and years of experience in the gambling industry.
                These high barriers have prevented many from entering the space.
              </p>

              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                $SCORP2.0, the first-ever online gambling cryptocurrency, allows
                investors to benefit from the booming casino industry without
                worrying about gambling licenses, staff management, or upfront
                capital costs. Simply hold $SCORP to generate cash flow with
                passive income, and potentially earn substantial profits.
              </p>
            </div>
          </div>

          {/* Right Side - Casino Platform Image */}
          <div className="w-[50%] relative">
            {/* Glowing Container */}
            <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37]/20 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              {/* Casino Platform Screenshot */}
              <img
                src="/casino-platform-screenshot.jpg"
                alt="Casino Platform Interface"
                className="w-full h-auto object-cover rounded-xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] aspect-video flex items-center justify-center p-8">
                      <div class="grid grid-cols-3 gap-4 w-full h-full">
                        <div class="bg-linear-to-br from-purple-600 to-pink-600 rounded-lg"></div>
                        <div class="bg-linear-to-br from-blue-600 to-cyan-600 rounded-lg"></div>
                        <div class="bg-linear-to-br from-orange-600 to-red-600 rounded-lg"></div>
                        <div class="bg-linear-to-br from-green-600 to-emerald-600 rounded-lg"></div>
                        <div class="bg-linear-to-br from-yellow-600 to-orange-600 rounded-lg"></div>
                        <div class="bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg"></div>
                      </div>
                    </div>
                  `;
                }}
              />

              {/* Circular Glowing Coin Accent - Top Right */}
              <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] flex items-center justify-center shadow-[0_0_30px_rgba(247,215,116,0.7)] border-4 border-black animate-pulse">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Circular Glowing Coin Accent - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#F3B74E] to-[#d4af37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.7)] border-4 border-black animate-pulse">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative Golden Stars */}
            <svg
              className="absolute -top-8 left-8 w-6 h-6 text-[#F7D774] opacity-60 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
            </svg>
            <svg
              className="absolute -bottom-8 right-8 w-5 h-5 text-[#d4af37] opacity-50 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingBarriersSection;
