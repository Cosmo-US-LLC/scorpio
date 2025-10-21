const SuccessStories = ({ stories }) => {
  // Default success stories data
  const defaultStories = [
    {
      name: "Rollbit",
      logo: "/rollbit-logo.png",
      iconColor: "bg-gradient-to-br from-[#F97316] to-[#EA580C]",
      description:
        "In the last quarter of 2023, Rollbit generated over 36 million dollars in profit. All profit is distributed among token holders; staking rewards were released and rewarded, making even more returns for Rollbit",
    },
    {
      name: "Funtoken",
      logo: "/funtoken-logo.png",
      iconColor: "bg-gradient-to-br from-[#EC4899] to-[#BE185D]",
      description:
        "Last Year, Funtoken made massive moves, launched the gaming platform, pumped over 1,000% and increased the holder count by 50,000+ and has over $10 million in volume each day, making it one of the most successful GambleFi tokens.",
    },
    {
      name: "Stake",
      logo: "/stake-logo.png",
      iconColor: "bg-gradient-to-br from-gray-200 to-gray-400",
      description:
        "Considered the highest peak of the gambling sphere, Stake has brought well known celebrities and generated hundreds of millions of dollars of revenue each year. The online casino is widely spread over social media sites like Facebook and YouTube.",
    },
  ];

  const storiesData = stories || defaultStories;

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#0F0F0F] py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Scattered Glowing Stars/Sparkles */}
      <div className="absolute top-10 left-[10%] w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-20 right-[15%] w-3 h-3 bg-[#F7D774] rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-white rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-[#F7D774] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 left-[5%] w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-[8%] w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>

      {/* Star Icons */}
      <svg
        className="absolute top-12 left-[8%] w-4 h-4 text-white opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-1/4 right-[12%] w-5 h-5 text-[#F7D774] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-1/3 left-[15%] w-4 h-4 text-white opacity-50 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-1/4 right-[20%] w-3 h-3 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Success Stories & Growth </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              Potential
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {storiesData.map((story, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-6 md:p-8 border border-white/10 hover:border-[#F7D774]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(247,215,116,0.15)] hover:-translate-y-1"
            >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-[#F7D774]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative flex flex-col items-center text-center">
                {/* Brand Logo/Icon */}
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${story.iconColor} flex items-center justify-center shadow-lg ring-2 ring-white/10 group-hover:ring-[#F7D774]/30 transition-all duration-300`}
                  >
                    <img
                      src={story.logo}
                      alt={`${story.name} logo`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                          </svg>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Brand Name */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {story.name}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300/80 leading-relaxed">
                  {story.description}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-[#F7D774]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
