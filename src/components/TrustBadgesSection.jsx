const TrustBadgesSection = () => {
  const badges = [
    {
      id: 1,
      title: "Secured Licensed Platform",
      description:
        "The SCORPION platform is regulated and licensed by the Curaçao eGaming licensing entity.",
      icon: (
        <svg
          className="w-10 h-10 text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Team is KYC Verified",
      description:
        "The Scorpion Team has been successfully verified by Assure DeFi at the KYC Gold Standard.",
      icon: (
        <svg
          className="w-10 h-10 text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Audited by Solidproof",
      description:
        "Scorpion Casino has been fully audited by Solidproof and shown to be 100% secure.",
      icon: (
        <svg
          className="w-10 h-10 text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-9 .5l-2.5 2.5 1.41 1.41L10 14.33l5.09-5.09-1.41-1.41L10 11.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-16 overflow-hidden">
      {/* Subtle Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Decorative Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#facc15] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fbbf24] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Decorative Stars */}
      <svg
        className="absolute top-12 left-16 w-3 h-3 text-[#facc15] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-32 right-20 w-4 h-4 text-[#facc15] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-24 left-1/3 w-3 h-3 text-[#facc15] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-linear-to-r from-[#facc15] to-[#fbbf24] bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            <span className="text-white">& Verified Security</span>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="group rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-yellow-500/60 transition-all duration-300 p-8 text-center hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#facc15] to-[#fbbf24] flex items-center justify-center shadow-[0_10px_40px_rgba(250,204,21,0.3)] group-hover:shadow-[0_15px_50px_rgba(250,204,21,0.5)] transition-all duration-300 group-hover:scale-110">
                  {badge.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {badge.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-6">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse"></div>
          <div
            className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
