const PressMediaSection = ({ pressItems }) => {
  // Default press/media data
  const defaultPressItems = [
    {
      name: "CoinMarketCap",
      logo: "/coinmarketcap-logo.png",
      quote:
        '"This gaming-related project\'s exciting immersive and excellent rewards make it an excellent investment. Scorpion Casino could be the next billion-dollar crypto."',
    },
    {
      name: "cryptonews.com",
      logo: "/cryptonews-logo.png",
      quote:
        '"Overall, Scorpion Casino is one of the only projects that can provide a sustainable passive income model that is suitable for the overall market conditions."',
    },
    {
      name: "CITYPAPER",
      logo: "/citypaper-logo.png",
      quote:
        "\"Scorpion Casino is on a mission to create the world's leading crypto-based online casino, and many investors are betting on a daily yield based on the casino's performance.\"",
    },
  ];

  const pressData = pressItems || defaultPressItems;

  return (
    <section className="w-full bg-linear-to-b from-black to-[#0F0F0F] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Press And </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              Media
            </span>
          </h2>
        </div>

        {/* Press Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pressData.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-6 md:p-8 border border-white/10 hover:border-[#F7D774]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(247,215,116,0.1)]"
            >
              {/* Logo/Publication Name */}
              <div className="flex items-center justify-center mb-6 h-16 md:h-20">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="text-center">
                        <h3 class="text-xl md:text-2xl font-bold text-white">${item.name}</h3>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Quote */}
              <div className="text-center">
                <p className="text-sm md:text-base text-gray-300/90 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;
