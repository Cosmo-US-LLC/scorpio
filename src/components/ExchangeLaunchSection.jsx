import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import exchange1 from "../assets/ExchangeLaunchSection/exchanges (5).svg";
import exchange2 from "../assets/ExchangeLaunchSection/exchanges (4).svg";
import exchange3 from "../assets/ExchangeLaunchSection/exchanges (3).svg";
import exchange4 from "../assets/ExchangeLaunchSection/exchanges (1).svg";
import exchange5 from "../assets/ExchangeLaunchSection/exchanges (2).svg";

const ExchangeLaunchSection = () => {
  const exchanges = [
    {
      id: 1,
      logo: exchange1,
    },
    {
      id: 2,
      logo: exchange2,
    },
    {
      id: 3,
      logo: exchange3,
    },
    {
      id: 4,
      logo: exchange4,
    },
    {
      id: 5,
      logo: exchange5,
    },
  ];

  return (
    <section className="relative w-full  pb-14 pt-5 md:pt-[80px] px-4 md:px-16 overflow-hidden max-w-[1280px] mx-auto">
      
      <div className="">
        {/* Heading */}
        <div className="max-w-[925px] w-[100%] mx-auto mb-10">
          <h2 className="">
            <span className="text_gradient">$SCORP2.0</span> Is Set To Launch On{" "}
            <span className="text_gradient">Multiple Exchanges</span>
          </h2>
        </div>

        {/* Exchange Carousel */}
        <div className="grid max-md:grid-cols-1  md:grid-cols-5  max-md:space-y-[10px] md:space-x-4 ">
          {exchanges.map((exchange) => (
            <div
              className="relative overflow-hidden rounded-[15px]"
              style={{
                border: "0.772px solid #FFBE40",
              }}
            >
              <div
                key={exchange.id}
                className="   relative z-[9]"
                style={{
                  background: "rgba(18, 19, 31, 0.40)",
                  backdropFilter: "blur(7.717472076416016px)",
                }}
              >
                <div
                  className={`flex flex-col  items-center justify-center max-md:h-[100px] md:h-[195px] w-full ${
      exchange.id == 4 ? "blur-[10px]" : "blur-[0px]"
    }`}
                >
                  <img src={exchange.logo} alt="" />
                </div>
              </div>
              <div
                className="absolute -left-1 z-[-99] -bottom-14 rounded-[335.71px] w-[335.71px] h-[53.164px]"
                style={{
                  background: "",
                  boxShadow: "0 4px 100px #FFBE40",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* <div className="relative px-4 md:px-16">
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
              
                    <div
                      className={`flex flex-col items-center justify-center h-28 w-full rounded-xl transition-all duration-300 ${
                        exchange.available
                          ? "bg-linear-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 hover:border-[#FFD700]/60 hover:shadow-lg hover:shadow-[#FFD700]/20 hover:scale-105"
                          : "bg-linear-to-br from-[#1a1a1a]/50 to-[#0f0f0f]/50 border border-gray-800/50 backdrop-blur-md"
                      }`}
                    >
                      {!exchange.available && (
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-xl flex items-center justify-center">
                          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                            Coming Soon
                          </span>
                        </div>
                      )}

                      <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {exchange.logo}
                      </div>

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
        {/* <div className="hidden md:block">
              <CarouselPrevious className="bg-linear-to-r from-[#fcd34d] to-[#fbbf24] hover:from-[#FFD700] hover:to-[#F6C544] border-0 text-black shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300" />
              <CarouselNext className="bg-linear-to-r from-[#fcd34d] to-[#fbbf24] hover:from-[#FFD700] hover:to-[#F6C544] border-0 text-black shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300" />
            </div>
          </Carousel>
        </div> */}

     
      </div>
    </section>
  );
};

export default ExchangeLaunchSection;
