const CollaborationSection = () => {
  return (
    <section className="w-full bg-linear-to-br from-black via-[#121212] to-[#0a0a0a] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto rounded-2xl relative overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F7D774] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Two Column Layout */}
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Collaboration with a </span>
              <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
                Leading Blockchain
              </span>
              <span className="text-white"> incubator</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-sm md:text-base text-gray-300/90 leading-relaxed">
                Scorpion Casino is collaborating with Tenet, the mainstreams
                behind the success stories of Meta Hero (100x return) in
                pre-sales) and Everdome (80x return from its pre-sale).
              </p>

              <p className="text-sm md:text-base text-gray-300/90 leading-relaxed">
                Tenet's safety Program has an impressive track record in working
                with new cryptocurrencies and achieving high returns for early
                investors.
              </p>

              <p className="text-sm md:text-base text-gray-300/90 leading-relaxed">
                This partnership required months to establish and is set to take
                $SCORP2.0 to the next level.
              </p>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105">
              Buy $SCORP
            </button>
          </div>

          {/* Right Column - Visual Illustration */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-2xl border border-[#F7D774]/40 bg-linear-to-br from-[#1a1a1a]/50 to-[#0a0a0a]/50 p-8 md:p-12 backdrop-blur-sm shadow-[0_0_40px_rgba(247,215,116,0.15)]">
              {/* Chain Link Illustration */}
              <div className="relative flex flex-col items-center justify-center gap-8">
                {/* Top Row - Meta Hero & Everdome */}
                <div className="flex items-center justify-center gap-8 md:gap-12 w-full">
                  {/* Meta Hero */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] p-[2px] shadow-[0_0_20px_rgba(247,215,116,0.5)]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        {/* Shield Icon */}
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#F7D774]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400 font-medium">
                      Meta Hero
                    </span>
                  </div>

                  {/* Everdome */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] p-[2px] shadow-[0_0_20px_rgba(247,215,116,0.5)]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        {/* Star/Circle Icon */}
                        <svg
                          className="w-8 h-8 md:w-10 md:h-10 text-[#F7D774]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400 font-medium">
                      Everdome
                    </span>
                  </div>
                </div>

                {/* Chain Links Visual - Top to Center */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Chain Link SVG */}
                  <svg
                    className="w-8 h-16 text-[#F7D774] opacity-60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 6a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V9a3 3 0 00-3-3H9zm0 2h6a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z" />
                  </svg>
                </div>

                {/* Center - Scorpion/Lock Icon */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] p-[3px] shadow-[0_0_30px_rgba(247,215,116,0.6)] animate-pulse">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      {/* Lock/Security Icon */}
                      <svg
                        className="w-10 h-10 md:w-12 md:h-12 text-[#F7D774]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm md:text-base text-[#F7D774] font-bold">
                    SCORPION
                  </span>
                </div>

                {/* Chain Links Visual - Center to Bottom */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  {/* Chain Link SVG */}
                  <svg
                    className="w-8 h-16 text-[#F7D774] opacity-60"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 6a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V9a3 3 0 00-3-3H9zm0 2h6a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z" />
                  </svg>
                </div>

                {/* Bottom - Launchpad */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] p-[2px] shadow-[0_0_20px_rgba(247,215,116,0.5)]">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      {/* Rocket/Launch Icon */}
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-[#F7D774]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 font-medium">
                    Launchpad
                  </span>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-radial from-[#F7D774]/5 via-transparent to-transparent blur-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
