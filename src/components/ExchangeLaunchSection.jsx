import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ExchangeLaunchSection = () => {
  const exchanges = [
    {
      id: 1,
      name: "Uniswap",
      logo: "🦄",
      available: true,
    },
    {
      id: 2,
      name: "PancakeSwap",
      logo: "🥞",
      available: true,
    },
    {
      id: 3,
      name: "Binance",
      logo: "💎",
      available: false,
    },
    {
      id: 4,
      name: "Coinbase",
      logo: "💰",
      available: false,
    },
    {
      id: 5,
      name: "KuCoin",
      logo: "🔷",
      available: false,
    },
  ];

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-14 px-6 md:px-16 overflow-hidden">
      {/* Glowing Gradient Overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F6C544] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Decorative Stars */}
      <svg
        className="absolute top-12 right-20 w-3 h-3 text-[#FFD700] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-16 left-24 w-4 h-4 text-[#F6C544] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="relative max-w-7xl mx-auto rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-[#FFD700] to-[#F6C544] bg-clip-text text-transparent">
              $SCORP2.0
            </span>{" "}
            <span className="text-white">Is Set To Launch On</span>
            <br />
            <span className="bg-linear-to-r from-[#FFD700] to-[#F6C544] bg-clip-text text-transparent">
              Multiple Exchanges
            </span>
          </h2>
        </div>

        {/* Exchange Carousel */}
        <div className="relative px-4 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {exchanges.map((exchange) => (
                <CarouselItem
                  key={exchange.id}
                  className="pl-4 md:pl-6 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="relative group">
                    {/* Card */}
                    <div
                      className={`flex flex-col items-center justify-center h-28 w-full rounded-xl transition-all duration-300 ${
                        exchange.available
                          ? "bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 hover:border-[#FFD700]/60 hover:shadow-lg hover:shadow-[#FFD700]/20 hover:scale-105"
                          : "bg-linear-to-br from-[#1a1a1a]/50 to-[#0f0f0f]/50 border border-gray-800/50 backdrop-blur-md"
                      }`}
                    >
                      {/* Blur overlay for unavailable exchanges */}
                      {!exchange.available && (
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-xl flex items-center justify-center">
                          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                            Coming Soon
                          </span>
                        </div>
                      )}

                      {/* Logo/Icon */}
                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {exchange.logo}
                      </div>

                      {/* Exchange Name */}
                      <span
                        className={`text-lg md:text-xl font-semibold ${
                          exchange.available
                            ? "text-white group-hover:text-[#FFD700]"
                            : "text-gray-600"
                        } transition-colors duration-300`}
                      >
                        {exchange.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation Buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="bg-linear-to-r from-[#fcd34d] to-[#fbbf24] hover:from-[#FFD700] hover:to-[#F6C544] border-0 text-black shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300" />
              <CarouselNext className="bg-linear-to-r from-[#fcd34d] to-[#fbbf24] hover:from-[#FFD700] hover:to-[#F6C544] border-0 text-black shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300" />
            </div>
          </Carousel>
        </div>

        {/* Bottom Info Text */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-gray-400">
            $SCORP2.0 will be available on major exchanges to ensure maximum
            liquidity and accessibility.
          </p>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-20 h-1 rounded-full bg-linear-to-r from-transparent via-[#FFD700] to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeLaunchSection;
