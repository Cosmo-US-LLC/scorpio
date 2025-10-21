const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "LOWEST $SCORP2.0 PRICE",
      description:
        "Buy $SCORP2.0 at its lowest price before it launches on centralised and decentralised exchanges.",
      icon: (
        <div className="relative">
          {/* Stacked Coins */}
          <div className="relative w-20 h-20">
            {/* Back Coin */}
            <div className="absolute top-0 left-2 w-16 h-16 rounded-full bg-linear-to-br from-[#d4af37] to-[#aa8a2e] border-4 border-[#f4d03f] shadow-lg transform rotate-12">
              <div className="absolute inset-2 rounded-full border-2 border-[#f4d03f]/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-xl">$</span>
              </div>
            </div>
            {/* Front Coin */}
            <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-linear-to-br from-[#fcd34d] to-[#d4af37] border-4 border-white/80 shadow-xl transform -rotate-6">
              <div className="absolute inset-2 rounded-full border-2 border-white/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-xl">🦂</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "RECEIVE UP TO 40% CASINO CREDITS",
      description:
        "Receive up to 40% free credits to play on Scorpion Casino - no conditions or obligations attached!",
      icon: (
        <div className="relative w-20 h-20">
          {/* Playing Cards */}
          {/* Back Card - Spade */}
          <div
            className="absolute top-2 right-0 w-14 h-20 bg-linear-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-[#fcd34d] shadow-xl transform rotate-12"
            style={{ transformOrigin: "center" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#fcd34d] text-3xl">♠</span>
            </div>
          </div>
          {/* Front Card - Heart */}
          <div
            className="absolute top-0 left-0 w-14 h-20 bg-linear-to-br from-white to-gray-100 rounded-lg border-2 border-[#fcd34d] shadow-2xl transform -rotate-12"
            style={{ transformOrigin: "center" }}
          >
            <div className="absolute top-1 left-1 text-red-600 text-xs font-bold">
              A
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red-600 text-3xl">♥</span>
            </div>
            <div className="absolute bottom-1 right-1 text-red-600 text-xs font-bold transform rotate-180">
              A
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "$250K GIVEAWAY PARTICIPATION",
      description:
        "Participate in the $250k Giveaway and go all out to win! Big! This event is exclusively available to Pre-Sale $SCORP2.0 buyers.",
      icon: (
        <div className="relative w-20 h-20">
          {/* Dice Pair */}
          <div className="relative w-full h-full flex items-center justify-center gap-2">
            {/* First Die */}
            <div
              className="w-12 h-12 bg-linear-to-br from-white to-gray-200 rounded-lg shadow-xl border-2 border-[#fcd34d] transform rotate-12"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1.5">
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
              </div>
            </div>
            {/* Second Die */}
            <div
              className="w-12 h-12 bg-linear-to-br from-[#fcd34d] to-[#d4af37] rounded-lg shadow-xl border-2 border-white transform -rotate-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1.5">
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
                <div></div>
                <div className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "DAILY PASSIVE STAKING INCOME",
      description:
        "Get paid every day! Staking rewards automatically added to your wallet - even during the pre-sale period!",
      icon: (
        <div className="relative w-20 h-20">
          {/* Gift Box / Treasure Chest */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Box Base */}
            <div className="relative">
              {/* Box Body */}
              <div className="w-16 h-12 bg-linear-to-br from-[#fcd34d] to-[#d4af37] rounded-lg border-4 border-[#b8942e] shadow-2xl">
                {/* Lock Detail */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-3 bg-gray-800 rounded-sm border-2 border-black"></div>
              </div>
              {/* Box Lid */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-18 h-4 bg-linear-to-br from-[#fcd34d] to-[#f4a460] rounded-t-lg border-4 border-[#b8942e] border-b-0 shadow-lg">
                {/* Ribbon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-6 bg-red-600"></div>
              </div>
              {/* Coins Coming Out */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-linear-to-br from-[#fcd34d] to-[#d4af37] border-2 border-white shadow-lg">
                <span className="absolute inset-0 flex items-center justify-center text-xs">
                  $
                </span>
              </div>
              <div className="absolute -top-4 right-2 w-4 h-4 rounded-full bg-linear-to-br from-[#fcd34d] to-[#d4af37] border-2 border-white shadow-lg opacity-80">
                <span className="absolute inset-0 flex items-center justify-center text-[10px]">
                  $
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle Star/Shine Accents */}
      <svg
        className="absolute top-20 left-16 w-4 h-4 text-[#fcd34d] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-40 right-24 w-3 h-3 text-[#fcd34d] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 left-1/4 w-3 h-3 text-[#fcd34d] opacity-35 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-1/2 right-16 w-4 h-4 text-[#fcd34d] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1.5s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      {/* Decorative Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcd34d] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fbbf24] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-linear-to-r from-[#fcd34d] to-[#fbbf24] bg-clip-text text-transparent">
              Benefits
            </span>{" "}
            <span className="text-white">
              Of Buying $SCORP2.0 In The Pre-Sale
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-[#1a1a1a] rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-yellow-500/40"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-radial from-[#fcd34d]/30 via-transparent to-transparent blur-xl"></div>
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-[#fcd34d]/20 to-[#fbbf24]/20 shadow-[0_10px_40px_rgba(252,211,77,0.3)] group-hover:shadow-[0_15px_50px_rgba(252,211,77,0.5)] transition-all duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mt-4 mb-3 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] bg-clip-text text-transparent uppercase tracking-wide">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-6 text-gray-300/90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-transparent via-[#fcd34d] to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
