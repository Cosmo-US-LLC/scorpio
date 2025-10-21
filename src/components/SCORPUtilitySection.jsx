const SCORPUtilitySection = () => {
  const utilities = [
    {
      id: 1,
      title: "Buy-Back System",
      description:
        "Scorpion Casino uses a smart contract to purchase $SCORP2.0 tokens from public exchanges on a daily basis. These purchases are financed through a portion of the Casino and betting revenue. During periods of increased demand, price goes automatically up.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Automatic Token Burn",
      description:
        "The smart contract automatically burns half of the purchased $SCORP2.0 tokens daily. This process reduces the circulating $SCORP2.0 supply, which makes the remaining tokens more valuable.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Daily Profits",
      description:
        "The other half of the tokens obtained through the buyback process will be automatically transferred to the Scorpion Staking Pool. This staking pool then distributes rewards daily to $SCORP2.0 holders based on the number of tokens they hold, generating daily profits for them.",
      icon: (
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-20 px-6 md:px-16 overflow-hidden">
      {/* Gold Sparkle/Star Accents */}
      <svg
        className="absolute top-20 left-16 w-4 h-4 text-yellow-400 opacity-30 blur-sm animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-40 right-24 w-5 h-5 text-yellow-400 opacity-30 blur-sm animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 left-1/4 w-4 h-4 text-yellow-400 opacity-30 blur-sm animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-20 right-32 w-3 h-3 text-yellow-400 opacity-30 blur-sm animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1.5s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto rounded-2xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="bg-linear-to-r from-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent">
              SCORP 2.0
            </span>{" "}
            <span className="text-white">Utility & Benefits</span>
          </h2>
        </div>

        {/* Utility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {utilities.map((utility) => (
            <div
              key={utility.id}
              className="group bg-linear-to-b from-[#1b1b1b] to-[#111] rounded-xl border border-white/10 p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-r from-[#fcd34d] to-[#f59e0b] shadow-lg shadow-yellow-500/30 group-hover:shadow-yellow-500/50 group-hover:scale-110 transition-all duration-300">
                  {utility.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                {utility.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-300/80">
                {utility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-20 h-1 rounded-full bg-linear-to-r from-transparent via-yellow-500 to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default SCORPUtilitySection;
