import logo1 from "../assets/press_and_media/logo_1.webp";
import logo2 from "../assets/press_and_media/logo_2.webp";
import logo3 from "../assets/press_and_media/logo_3.webp";
import whiteGbg from "../assets/scorpion_casino/white_gbg.png";

const PressMediaSection = ({ pressItems }) => {
  const defaultPressItems = [
    {
      name: "CoinMarketCap",
      logo: logo1,
      quote:
        '"This gaming-related project’s inviting atmosphere and excellent rewards make it asuccess. As such, many analysts think it could be the next billion-dollar crypto."',
    },
    {
      name: "Crypto News",
      logo: logo2,
      quote:
        '"Overall, Scorpion Casino is one of the only projects that can provide a sustainable passive income to holders - regardless of the overall market conditions."',
    },
    {
      name: "CityPaper",
      logo: logo3,
      quote:
        '"Scorpion Casino is on a mission to create the world’s leading crypto-based online casino, where holders of its token can earn a daily yield based on the casino’s performance."',
    },
  ];

  const pressData = pressItems || defaultPressItems;

  return (
    <section className="w-full min-h-[400px] md:h-[580px] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8 relative">
       <div
        className="absolute max-md:top-[60px] z-[0] md:right-[0%] md:bottom-[60px]"
        style={{
          width: "1202px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
      <div className="max-w-[1280px] relative z-[1] mx-auto rounded-2xl flex flex-col gap-8 md:gap-12">
        <div className="text-center">
          <h2 className="">
            <span className="text-white">Press And </span>
            <span className="text_gradient">Media</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pressData.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-5 sm:p-6 md:p-12 md:pb-19 overflow-hidden"
              style={{
                  background: " rgba(27, 26, 22, 0.40)",
                  border: "0.892px solid rgba(255, 255, 255, 0.10)",
                  borderRadius: "17.844px",
                  backdropFilter: "blur(8.922223091125488px)",
                }}
                >
              <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>

              <div className="flex items-center justify-center mb-5 md:mb-6  sm:h-24 w-full pb-3 md:pb-10 border-b border-[#36383F] relative z-10">
               <div className="flex flex-col items-center">
                 <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-[90px] max-w-full "
                />
                {/* <h4 className="text-center md:hidden pt-[29px]">{item.name}</h4> */}
               </div>
              </div>

              {/* Quote */}
              <div className="text-center relative z-10">
                <p className="text-sm md:text-base text-gray-300/90 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>
              <img
                src={whiteGbg}
                alt="white gbg"
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMediaSection;
