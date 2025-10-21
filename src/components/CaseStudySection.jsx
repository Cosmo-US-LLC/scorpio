const CaseStudySection = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-16 overflow-hidden">
      {/* Decorative Gold Star Icons */}
      <svg
        className="absolute top-8 left-[8%] w-4 h-4 text-[#F7D774] opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-6 right-[10%] w-3 h-3 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-20 left-[5%] w-3 h-3 text-white opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 right-[15%] w-4 h-4 text-[#F7D774] opacity-45 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Main Layout - Two Columns */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side - Stacked Images */}
          <div className=" relative w-[50%] max-w-xs md:max-w-sm lg:max-w-md">
            {/* Image Container with relative positioning */}
            <div className="relative">
              {/* Phone Mockup - Main Image */}
              <div className="relative z-10 mx-auto">
                <div className="rounded-3xl overflow-hidden border-4 border-[#1a1a1a] shadow-[0_0_60px_rgba(247,215,116,0.3)]">
                  <img
                    src="/case-study-phone.jpg"
                    alt="The Guardian Article on Phone"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a] aspect-9/16 flex flex-col items-center justify-center p-8">
                          <div class="bg-white rounded-lg p-6 mb-4 w-full">
                            <div class="text-black font-bold text-xl mb-2">The Guardian</div>
                            <div class="w-full h-32 bg-gray-300 rounded mb-2"></div>
                            <div class="text-gray-700 text-sm">High stakes: the controversial crypto casino...</div>
                          </div>
                          <div class="text-gray-400 text-xs text-center">Case Study Preview</div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>

              {/* Circular Logo Badges - Top Right Overlap */}
              <div className="absolute -top-4 -right-4 z-20 flex gap-2">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] border-2 border-white">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#8B5CF6] to-[#A855F7] flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] border-2 border-white">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>

              {/* Sports Car Image - Bottom Overlap */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] z-0">
                <div className="rounded-2xl overflow-hidden border-2 border-[#F7D774]/30 shadow-[0_0_40px_rgba(247,215,116,0.4)]">
                  <img
                    src="/case-study-car.jpg"
                    alt="Luxury Sports Car"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `
                        <div class="bg-linear-to-r from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                          <svg class="w-16 h-16 text-[#F7D774]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Spacer to prevent overlap with content below */}
            <div className="h-16 md:h-0"></div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-[50%] text-center md:text-left">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white">Crypto Casino </span>
              <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
                Case Study
              </span>
            </h2>

            {/* Subheadline */}
            <h3 className="text-lg md:text-xl font-semibold text-white mt-4 leading-relaxed">
              26-year-old Crypto Casino Owner Buys a Villa for $80 Million.
            </h3>

            {/* Body Paragraphs */}
            <div className="space-y-4 mt-6">
              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                According to The Guardian, a 26-year-old owner of a crypto
                casino made headlines by purchasing Australia's most expensive
                villa for an astounding $80 million USD in just a few years of
                operating his casino.
              </p>

              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                The scale of this success showcases how lucrative the crypto
                casino is now impressive, and now, for the first time ever, you
                have the chance to get involved. While these outcomes are
                exceptional, they highlight the potential of the crypto casino
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
