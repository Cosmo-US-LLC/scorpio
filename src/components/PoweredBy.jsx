const PoweredBy = () => {
  const partners = [
    { name: "Evolution", logo: "EVOLUTION" },
    { name: "Amatic", logo: "AMATIC" },
    { name: "Betradar", logo: "betradar" },
    { name: "Wazdan", logo: "WAZDAN" },
    { name: "MACAW", logo: "MACAW" },
    { name: "Habanero", logo: "HABANERO" },
    { name: "Microgaming", logo: "Microgaming" },
    { name: "Hacksaw Gaming", logo: "HACKSAW GAMING" },
    { name: "Even Bet Gaming", logo: "EVEN BET GAMING" },
    { name: "Global Bet", logo: "GLOBALBET" },
    { name: "Golden Race", logo: "GOLDENRACE" },
    { name: "Spribe", logo: "SPRIBE" },
    { name: "EGT", logo: "EGT" },
    { name: "Play'n GO", logo: "PLAY'N GO" },
    { name: "NetEnt", logo: "NETENT" },
    { name: "Novomatic", logo: "NOVOMATIC" },
  ];

  return (
    <section className="w-full bg-[#000000] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading with gradient */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-linear-to-r from-[#d4af37] to-white bg-clip-text text-transparent">
            Powered By
          </span>
        </h2>

        {/* Logos Container - Using Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[calc(50%-3rem)] sm:w-[calc(33.333%-3rem)] lg:w-[calc(25%-3rem)] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="h-12 flex items-center justify-center px-4">
                <span className="text-white font-bold text-lg md:text-xl tracking-wide whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
