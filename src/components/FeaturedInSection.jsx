const FeaturedInSection = () => {
  const publications = [
    { id: 1, name: "CoinMarketCap", logo: "💹" },
    { id: 2, name: "Bitcoinist.net", logo: "₿" },
    { id: 3, name: "Finanzen.net", logo: "📊" },
    { id: 4, name: "Benzinga", logo: "📈" },
    { id: 5, name: "Coincierge", logo: "🪙" },
    { id: 6, name: "NewsBTC", logo: "📰" },
    { id: 7, name: "Cryptonews", logo: "🗞️" },
    { id: 8, name: "Yahoo! Finance", logo: "💼" },
    { id: 9, name: "Finbold", logo: "💰" },
    { id: 10, name: "Cryptonaute", logo: "🚀" },
    { id: 11, name: "Washington CityPaper", logo: "📋" },
    { id: 12, name: "Kryptoszene", logo: "🔐" },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto rounded-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent">
            Featured In
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center w-full h-20 md:h-24 relative">
                {/* Placeholder for actual logo image */}
                <div className="flex flex-col items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  {/* Icon/Emoji as placeholder */}
                  <span className="text-4xl md:text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {publication.logo}
                  </span>

                  {/* Publication Name */}
                  <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-center px-2">
                    {publication.name}
                  </span>
                </div>

                {/* Uncomment and replace with actual logo images when available */}
                {/* 
                <img
                  src={`/logos/${publication.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`}
                  alt={`${publication.name} logo`}
                  className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-500 opacity-30"></div>
          <div
            className="w-2 h-2 rounded-full bg-gray-400 opacity-40"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-gray-500 opacity-30"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
