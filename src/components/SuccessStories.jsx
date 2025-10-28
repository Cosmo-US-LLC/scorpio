import rollbit from "../assets/success_stories/rollbit.webp";
import funtoken from "../assets/success_stories/funtoken.webp";
import stake from "../assets/success_stories/stake.webp";
import whiteGbg from "../assets/scorpion_casino/white_gbg.png";

const SuccessStories = ({ stories }) => {
  const defaultStories = [
    {
      name: "Rollbit",
      logo: rollbit,
      iconColor: "",
      description:
        "Rollbit recently launched its token, and by implementing parts of our outlined Burn and Buyback mechanism, as detailed in our whitepaper, the token's value surged remarkably, offering over 500x returns to early $RLB holders.",
    },
    {
      name: "Funtoken",
      logo: funtoken,
      iconColor: "",
      description:
        "Launched years ago, Funtoken remains consistently ranked in the top 500 on CoinMarketCap. It is listed on top-tier exchanges like Huobi and Binance.",
    },
    {
      name: "Stake",
      logo: stake,
      iconColor: "",
      description:
        "Stake is one of the fastest-growing companies worldwide, valued at billions of dollars. They have established long-term partnerships with music superstar Drake and the UFC.",
    },
  ];

  const storiesData = stories || defaultStories;

  return (
    <section className="relative w-full min-h-[980px] md:h-[800px] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="relative max-w-[1280px] mx-auto Success_stories_bg flex flex-col items-center justify-center gap-8 md:gap-12">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="">
            <span className="text-white">
              Success Stories & <br /> Growth{" "}
            </span>

            <span className="text_gradient">Potential</span>
          </h2>
        </div>

        <div className="success_stories_section_bg flex items-center justify-center w-full">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[16px] w-full">
            {storiesData.map((story, index) => (
            <div
            className="min-h-[446px] overflow-hidden flex flex-col justify-center"
              style={{
                  background: " rgba(27, 26, 22, 0.40)",
                  border: "0.892px solid rgba(255, 255, 255, 0.10)",
                  borderRadius: "17.844px",
                  backdropFilter: "blur(8.922223091125488px)",
                }}
            >
                <div
                key={index}
                className="min-h-[366px] px-[27px]"
               
              >
                {/* <img
                  src={whiteGbg}
                  alt="white gbg"
                  className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                /> */}
                <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
                <div className="relative flex flex-col items-center text-center z-10">
                  {/* Brand Logo/Icon */}
                  <div className="mb-5 md:mb-[35px]">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${story.iconColor} flex items-center justify-center shadow-lg ring-2 ring-white/10 group-hover:ring-[#F7D774]/30 transition-all duration-300`}
                    >
                      <img
                        src={story.logo}
                        alt={`${story.name} logo`}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <h3 className="text_gradient mb-3 md:mb-[19px]">{story.name}</h3>
                  <div className="h-[1px] w-[100%] bg-[#36383F] mb-[17px]"></div>

                  {/* Description */}
                  <p className="text-[#CACACA] text-sm md:text-base">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
