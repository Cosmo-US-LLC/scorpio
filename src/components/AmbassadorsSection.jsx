const AmbassadorsSection = ({ ambassadors }) => {
  // Default ambassadors data
  const defaultAmbassadors = [
    {
      name: "GOKI RAMIREZ",
      verified: true,
      avatar: "/goki-ramirez.jpg",
      followers: "@10.7k followers",
      description: "Famous Singer and Model",
      link: {
        text: "Official Announcement",
        url: "#",
      },
    },
    {
      name: "TBA",
      verified: false,
      avatar: "/tba-ambassador.jpg",
      followers: "New Ambassador",
      description: "Will be announced soon",
      link: {
        text: "Coming Soon",
        url: "#",
      },
    },
  ];

  const ambassadorsData = ambassadors || defaultAmbassadors;

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#0F0F0F] py-12 px-6 md:px-16 overflow-hidden">
      {/* Faint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Scattered Golden Star Icons */}
      <svg
        className="absolute top-8 left-[15%] w-4 h-4 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-20 right-[20%] w-3 h-3 text-[#F7D774] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-32 left-[10%] w-4 h-4 text-[#F7D774] opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-16 right-[25%] w-3 h-3 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Scorpion Casino </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              Ambassadors
            </span>
          </h2>
        </div>

        {/* Ambassador Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {ambassadorsData.map((ambassador, index) => (
            <div
              key={index}
              className="group w-full md:w-[calc(50%-1rem)] max-w-md rounded-xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-6 md:p-8 border border-white/10 hover:border-[#F7D774]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(247,215,116,0.15)]"
            >
              {/* Content Container */}
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative">
                  <div className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-2 ring-[#F7D774] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(247,215,116,0.3)] overflow-hidden">
                    <img
                      src={ambassador.avatar}
                      alt={ambassador.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] flex items-center justify-center">
                            <svg class="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Name with Verification Badge */}
                <div className="flex items-center gap-2 mt-4 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                    {ambassador.name}
                  </h3>
                  {ambassador.verified && (
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* Followers/Status */}
                <p className="text-sm text-gray-400 mb-3">
                  {ambassador.followers}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300/80 mb-6">
                  {ambassador.description}
                </p>

                {/* CTA Link */}
                <a
                  href={ambassador.link.url}
                  className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors duration-200"
                >
                  {ambassador.link.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsSection;
