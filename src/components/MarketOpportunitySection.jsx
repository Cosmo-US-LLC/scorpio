const MarketOpportunitySection = () => {
  return (
    <section className="relative w-full bg-linear-to-br from-black via-[#121212] to-[#1a0f1a] py-16 px-6 md:px-16 overflow-hidden">
      {/* Subtle Red/Purple Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900 opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Decorative Gold Stars/Shine Accents */}
      <svg
        className="absolute top-12 left-[5%] w-5 h-5 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-1/4 right-[8%] w-4 h-4 text-[#d4af37] opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-1/4 left-[10%] w-3 h-3 text-[#F7D774] opacity-35 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-12 right-[15%] w-6 h-6 text-[#d4af37] opacity-45 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Main Layout - Two Columns */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - 3D Donut Chart */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* 3D Donut/Pie Chart Container */}
              <div className="relative aspect-square">
                {/* Chart Image or SVG */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Donut Chart - Using CSS to create 3D effect */}
                  <div className="relative w-64 h-64 rounded-full">
                    {/* Main Donut Shape */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #8B7355 0deg, #6B5344 30deg, #d4af37 30deg, #F7D774 45deg, #d4af37 45deg, #8B7355 360deg)",
                        boxShadow:
                          "inset 0 -20px 40px rgba(0,0,0,0.5), 0 10px 30px rgba(212,175,55,0.3)",
                      }}
                    ></div>

                    {/* Inner Circle (Donut Hole) */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black"
                      style={{
                        boxShadow:
                          "0 5px 20px rgba(0,0,0,0.8), inset 0 10px 20px rgba(0,0,0,0.5)",
                      }}
                    ></div>

                    {/* Golden Highlight Segment Glow */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-[#F7D774] opacity-30 blur-xl rounded-full pointer-events-none"></div>
                  </div>
                </div>

                {/* Top Label - Crypto Casino Market */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-xs font-medium text-white whitespace-nowrap">
                    Crypto Casino Market
                  </p>
                  <p className="text-sm font-bold text-[#F7D774]">
                    $250 Million
                  </p>
                </div>

                {/* Bottom Label - Global Casino Market */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-xs font-medium text-white whitespace-nowrap">
                    Global Casino Market
                  </p>
                  <p className="text-sm font-bold text-[#d4af37]">
                    $263.3 Billion
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Huge </span>
              <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Market
              </span>
              <span className="text-white"> Opportunity</span>
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                Since 2017, the crypto casino industry has surged in value, now
                reaching $250 million. But that's just a tiny sliver—it's only
                0.1% of the huge $263.3 billion online casino market out there.
                That massive gap shows there's still room for a ton of growth,
                with billions rolling in. People love Crypto Casinos because
                they're easy to use and keep things private.
              </p>

              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                Scorpion Casino is here to shake up the entire gambling scene by
                tapping into both the $SCORP2.0 token and the born and buy-back
                mechanism, has the potential to attract thousands of players
                daily and might push Scorpion Casino to become a giant in the
                market and even beyond.
              </p>

              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                This innovative community incentive program, offering daily
                staking rewards based on the casino's performance. With
                $SCORP2.0 being a token and the born and buy-back mechanism, has
                the potential to attract thousands of players daily and might
                push Scorpion Casino to become a giant in the market and even
                beyond.
              </p>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105">
              Buy $SCORP2.0
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
