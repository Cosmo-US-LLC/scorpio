const FutureSection = () => {
  return (
    <section className="w-full bg-linear-to-b from-black to-[#1a1a1a] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto rounded-2xl relative overflow-hidden">
        {/* Decorative Glow Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Main Content Container */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Online Gambling</span>
              <br />
              <span className="text-white">is the </span>
              <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Future
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
              Gambling is one of the oldest and most lucrative industries in the
              history of mankind and digitization is just the next logical step.
            </h2>

            {/* Body Paragraph */}
            <p className="text-[#CACACA] text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              People have been gambling for the last 5,000 years, regardless of
              location, time, or market conditions. Gambling is hard-wired in
              human psychology. This makes our staking platform one of the most
              infallible opportunities to generate cash flow with passionate
              long-term appeal and a low risk-reward ratio.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105">
              Buy $SCORP
            </button>
          </div>

          {/* Right Column - Image Mockup */}
          <div className="flex-1 relative">
            {/* Golden Glow Border Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.3)] border-2 border-[#d4af37]/30">
              {/* Placeholder Image - Replace with actual image */}
              <div className="relative bg-linear-to-br from-gray-900 to-gray-800 aspect-4/3 flex items-center justify-center">
                {/* This is a placeholder - replace with actual image */}
                <img
                  src="/casino-mockup.png"
                  alt="Online Gambling Platform"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center text-gray-500">
                        <div class="text-center">
                          <svg class="w-24 h-24 mx-auto mb-4 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                          </svg>
                          <p class="text-sm">Casino Platform Mockup</p>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Circular Glow Accent - Top Right */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-[#d4af37] opacity-20 blur-2xl rounded-full pointer-events-none"></div>

              {/* Circular Glow Accent - Bottom Left */}
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-[#d4af37] opacity-20 blur-2xl rounded-full pointer-events-none"></div>
            </div>

            {/* Additional decorative element - Optional magnifying glass icon */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-linear-to-br from-[#fcd34d] to-[#fbbf24] rounded-full flex items-center justify-center shadow-lg border-4 border-black">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
