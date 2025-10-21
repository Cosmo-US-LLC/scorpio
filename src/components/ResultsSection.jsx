const ResultsSection = () => {
  const results = [
    {
      id: 1,
      title: "Market Cap",
      description: "$SCORP reached a market cap of $280 million.",
      icon: (
        <svg
          className="w-8 h-8 text-[#F7D774]"
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
    {
      id: 2,
      title: "Presale Profits",
      description:
        "Early $SCORP presale buyers gained up to 2800% (28x) at the all-time high.",
      icon: (
        <svg
          className="w-8 h-8 text-[#F7D774]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "USDT Rewards",
      description:
        "Over $582,000 in USDT was distributed to $SCORP presale holders as rewards.",
      icon: (
        <svg
          className="w-8 h-8 text-[#F7D774]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Performance",
      description:
        "$SCORP surged by 560% from its launch price to its all-time high.",
      icon: (
        <svg
          className="w-8 h-8 text-[#F7D774]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Migration",
      description:
        "All $SCORP presale holders will be automatically migrated to SCORP 2.0.",
      icon: (
        <svg
          className="w-8 h-8 text-[#F7D774]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle Gold Star/Shine Accents */}
      <svg
        className="absolute top-16 left-20 w-4 h-4 text-[#F7D774] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-40 right-32 w-3 h-3 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 left-1/4 w-5 h-5 text-[#F7D774] opacity-25 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-16 right-24 w-4 h-4 text-[#F7D774] opacity-35 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1.5s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      {/* Decorative Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F7D774] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F3B74E] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Results of </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              SCORP 1.0
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300/90 mt-4 max-w-3xl mx-auto leading-relaxed">
            SCORP was listed on multiple exchanges, reaching a $280M market cap,
            soaring 560% from launch, and delivering up to 2800% (28x) returns
            for presale buyers.
          </p>
          <p className="text-base md:text-lg text-gray-300/90 mt-3 max-w-3xl mx-auto leading-relaxed">
            Now, with SCORP 2.0, a new era begins, migrating to the Ethereum
            blockchain with a fully upgraded next-gen casino, 20,000+ holders,
            major partnerships, and 5+ upcoming exchange listings - all coming
            together to build the #1 crypto casino ecosystem worldwide.
          </p>
        </div>

        {/* Results Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {results.map((result) => (
            <div
              key={result.id}
              className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:border-[#F7D774]/40 hover:shadow-xl hover:shadow-[#F7D774]/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F7D774]/10 border border-[#F7D774]/20 mb-4 group-hover:bg-[#F7D774]/20 group-hover:scale-110 transition-all duration-300">
                {result.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {result.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-6">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Results Cards - Mobile Horizontal Scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {results.map((result) => (
            <div
              key={result.id}
              className="shrink-0 w-72 snap-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F7D774]/10 border border-[#F7D774]/20 mb-4">
                {result.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {result.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-6">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-24 h-1 rounded-full bg-linear-to-r from-transparent via-[#F7D774] to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Hide scrollbar on mobile */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ResultsSection;
