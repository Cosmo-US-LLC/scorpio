const WhitepaperSection = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-16 overflow-hidden">
      {/* Optional Gold Star/Shine Accents */}
      <svg
        className="absolute top-12 left-[5%] w-4 h-4 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-20 right-[8%] w-5 h-5 text-[#d4af37] opacity-35 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Main Layout - Two Columns */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Scorpion Logo Icon */}
            <div className="mb-6 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#F7D774] to-[#d4af37] flex items-center justify-center shadow-[0_0_30px_rgba(247,215,116,0.4)]">
                <svg
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="text-white block mb-2">Scorpion Casino</span>
              <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
                Whitepaper
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-sm md:text-base leading-6 text-gray-300/90 mt-4">
              Reading the $SCORPION CASINO Whitepaper is a great way to learn
              more about the unique $SCORPION ecosystem and how the $SCORP token
              works. It covers everything from the casino's features to
              tokenomics, and explains in detail how it stands out from other
              crypto projects.
            </p>

            {/* CTA Button */}
            <button className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-semibold text-base rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105">
              Read the Whitepaper
            </button>
          </div>

          {/* Right Column - 3D Book Mockup */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* 3D Book Container with Tilt Effect */}
              <div
                className="relative"
                style={{
                  transform:
                    "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Book Shadow */}
                <div className="absolute inset-0 bg-black/50 blur-2xl rounded-lg transform translate-y-8 translate-x-4"></div>

                {/* Book Cover */}
                <div className="relative rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-2 border-[#F7D774]/20">
                  <img
                    src="/whitepaper-book.png"
                    alt="Scorpion Casino Whitepaper"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="bg-gradient-to-br from-black via-[#1a1a1a] to-black aspect-[3/4] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                          <!-- Background Pattern -->
                          <div class="absolute inset-0 opacity-10">
                            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, #F7D774 1px, transparent 0); background-size: 40px 40px;"></div>
                          </div>
                          
                          <!-- Golden Coins -->
                          <div class="relative z-10 flex gap-4 mb-8">
                            <div class="w-16 h-16 rounded-full bg-linear-to-br from-[#F7D774] to-[#d4af37] shadow-[0_0_30px_rgba(247,215,116,0.6)] flex items-center justify-center">
                              <svg class="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
                              </svg>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-linear-to-br from-[#d4af37] to-[#b8860b] shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center -mt-4">
                              <span class="text-black font-bold text-sm">$</span>
                            </div>
                          </div>
                          
                          <!-- Title -->
                          <div class="relative z-10 text-center">
                            <h3 class="text-2xl md:text-3xl font-bold text-[#F7D774] mb-2">SCORPION CASINO</h3>
                            <p class="text-white text-lg font-semibold">Whitepaper</p>
                            <div class="mt-6 w-32 h-1 bg-linear-to-r from-transparent via-[#F7D774] to-transparent mx-auto"></div>
                          </div>
                          
                          <!-- Bottom Badge -->
                          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#F7D774] text-black px-4 py-2 rounded-full text-xs font-bold">
                            2024 EDITION
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Book Spine/Edge Effect */}
                <div
                  className="absolute top-0 left-0 w-4 h-full bg-linear-to-r from-[#1a1a1a] to-transparent opacity-80 rounded-l-lg"
                  style={{ transform: "translateX(-100%)" }}
                ></div>
              </div>

              {/* Floating Golden Particles/Coins */}
              <div className="absolute -top-8 -right-8 w-12 h-12 rounded-full bg-[#F7D774] opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-12 -left-8 w-16 h-16 rounded-full bg-[#d4af37] opacity-15 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
