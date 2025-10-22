import logo1 from "../assets/press_and_media/logo_1.webp";
import logo2 from "../assets/press_and_media/logo_2.webp";
import logo3 from "../assets/press_and_media/logo_3.webp";

const PressMediaSection = ({ pressItems }) => {
  const defaultPressItems = [
    {
      name: "CoinMarketCap",
      logo: logo1,
      quote:
        '"This gaming-related project’s inviting atmosphere and excellent rewards make it asuccess. As such, many analysts think it could be the next billion-dollar crypto."',
    },
    {
      name: "cryptonews.com",
      logo: logo2,
      quote:
        '"Overall, Scorpion Casino is one of the only projects that can provide a sustainable passive income to holders - regardless of the overall market conditions."',
    },
    {
      name: "CITYPAPER",
      logo: logo3,
      quote:
        "Scorpion Casino is on a mission to create the world’s leading crypto-based online casino, where holders of its token can earn a daily yield based on the casino’s performance.",
    },
  ];

  const pressData = pressItems || defaultPressItems;

  return (
    <section className="w-full h-[580px] flex items-center justify-center press_media_section_bg">
      <div className="max-w-[1280px] mx-auto rounded-2xl flex flex-col gap-12">
        <div className="text-center ">
          <h2 className="">
            <span className="text-white">Press And </span>
            <span className="text_gradient">Media</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pressData.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-6 md:p-8 border border-white/10 hover:border-[#F7D774]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(247,215,116,0.1)]"
            >
              {/* Logo/Publication Name */}
              <div className="flex items-center justify-center mb-6 h-24 w-full pb-4 border-b border-gray-600">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="max-h-full max-w-full object-contain"
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
