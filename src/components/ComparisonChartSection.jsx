const ComparisonChartSection = () => {
  // Platform data with logos and support status
  const platforms = [
    {
      name: "Scorpion Casino",
      logo: "🦂",
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: true,
        staking: true,
        passive: true,
      },
    },
    {
      name: "Bc.Games",
      logo: "🎮",
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: false,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Roobet",
      logo: "🦘",
      features: {
        crypto: true,
        liveBets: false,
        affiliate: false,
        token: false,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Rollbit",
      logo: "🎲",
      features: {
        crypto: true,
        liveBets: false,
        affiliate: false,
        token: true,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Owl Games",
      logo: "🦉",
      features: {
        crypto: true,
        liveBets: false,
        affiliate: false,
        token: false,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Stake",
      logo: "🎰",
      features: {
        crypto: true,
        liveBets: false,
        affiliate: false,
        token: false,
        staking: false,
        passive: false,
      },
    },
  ];

  const features = [
    { id: "crypto", label: "Accept Crypto" },
    { id: "liveBets", label: "Live Bets" },
    { id: "affiliate", label: "Affiliate System" },
    { id: "token", label: "Own Token" },
    { id: "staking", label: "Staking" },
    { id: "passive", label: "Passive Income" },
  ];

  return (
    <section className="relative w-full bg-linear-to-br from-black via-[#0a0a0a] to-[#1a0f0f] py-16 px-6 md:px-12 overflow-hidden">
      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
          Disrupting The Gambling Industry
        </h2>

        {/* Comparison Chart Container */}
        <div className="rounded-3xl bg-linear-to-b from-[#1a1a1a]/80 to-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-6 md:p-8 shadow-[0_0_80px_rgba(139,0,0,0.3)]">
          {/* Header Row - Platform Names & Logos */}
          <div className="flex items-center mb-8">
            {/* Empty cell for feature column */}
            <div className="flex-1 min-w-[140px] md:min-w-[180px]"></div>

            {/* Platform Columns */}
            <div className="flex flex-1 justify-between gap-2 md:gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-1 min-w-[60px] md:min-w-[90px] group"
                >
                  {/* Platform Logo */}
                  <div className="text-4xl md:text-5xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {platform.logo}
                  </div>

                  {/* Platform Name */}
                  <p className="text-xs md:text-sm text-white font-medium text-center leading-tight">
                    {platform.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-6 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>

          {/* Feature Rows */}
          <div className="space-y-4">
            {features.map((feature, rowIndex) => (
              <div
                key={feature.id}
                className="flex items-center py-3 rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                {/* Feature Label Column */}
                <div className="flex-1 min-w-[140px] md:min-w-[180px]">
                  <p className="text-sm md:text-base text-gray-300 font-medium">
                    {feature.label}
                  </p>
                </div>

                {/* Platform Support Columns */}
                <div className="flex flex-1 justify-between gap-2 md:gap-4">
                  {platforms.map((platform, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex items-center justify-center flex-1 min-w-[60px] md:min-w-[90px]"
                    >
                      {platform.features[feature.id] ? (
                        <span
                          className="text-2xl md:text-3xl transition-all duration-300 hover:scale-125 cursor-pointer"
                          style={{
                            filter:
                              "drop-shadow(0 0 8px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 12px rgba(239, 68, 68, 0.6))",
                          }}
                        >
                          ❤️
                        </span>
                      ) : (
                        <span className="text-2xl md:text-3xl opacity-20">
                          ○
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Divider */}
          <div className="mt-8 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.4)]"></div>
        </div>

        {/* Bottom Decorative Stars */}
        <div className="flex justify-center gap-4 mt-6">
          <svg
            className="w-3 h-3 text-red-500 opacity-60 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChartSection;
