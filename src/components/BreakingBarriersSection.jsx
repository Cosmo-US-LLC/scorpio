import breaking_barriers_img from "../assets/breaking_down/scorpion_casino_right.webp";
import scorpioToken from "../assets/breaking_down/scorpio_token.webp";
import vec_1 from "../assets/breaking_down/vec_1.svg";
import vec_1_mob from "../assets/breaking_down/vec_1_mob.svg";

const BreakingBarriersSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[600px] md:h-[660px] flex items-center justify-center py-12 md:py-14 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto relative overflow-hidden rounded-2xl breaking_barriers_section_bg flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 sm:px-6 md:px-8 py-8 md:py-8">
        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-6">
          <h2 className="text-left max-w-[530px]">
            <span className="text-[#ffffff] ">Breaking Down</span> <br />
            <span className="text-[#ffffff] ">The Barriers To</span> <br />
            <span className="text-[#CACACA] ">The Casino Industry</span>
          </h2>

          <p className="text-[#fff] font-[700] text-left md:text-base max-md:max-w-[360px]">
            $SCORP2.0 Delivers Exclusive Insider Access to the world of Gambling.
          </p>

          <p className="text-[#CACACA] md:text-base mob_br">
            Launching an online casino from scratch typically takes 6-18 months
            of intense preparation, a $2 million investment, legal connections,
            and years of experience in the gambling industry. <br /><br /> These high
            barriers have $SCORP2.0, the first social online gambling
            cryptocurrency, anyone can participate in this lucrative field
            without massive capital or experience and potentially earn
            substantial profits.
          </p>
        <div className="w-full md:max-w-[300px] max-md:pt-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#wallet");
                if (target) {
                  const yOffset = 20;
                  const y =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            className="btn-primary w-full">Buy $SCORP2.0</button>{" "}
          </div>
        </div>

        <div className="w-full md:w-[50%] relative pt-8 md:pt-16 pb-4 px-4 md:px-8">
          <img
            src={scorpioToken}
            alt="Scorpion Casino Token"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] object-cover rounded-xl z-10 absolute -left-[20px] sm:-left-[40px] md:-left-[60px] bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px]"

          />
           <img
            src={vec_1}
            alt="Scorpion Casino Token"
            className="w-[60px] h-[60px] max-md:hidden sm:w-[150px] sm:h-[150px] md:w-[120px] md:h-[120px] object-cover rounded-xl z-10 absolute -right-[16px] sm:-right-[40px] md:-right-[40px] top-[-10px] sm:top-[-10px] md:top-[-33px]"

          />
            <img
            src={vec_1_mob}
            alt="Scorpion Casino Token"
            className="w-[60px] md:hidden h-[60px] sm:w-[150px] sm:h-[150px] md:w-[120px] md:h-[120px] object-cover rounded-xl z-10 absolute -right-[16px] sm:-right-[40px] md:-right-[40px] top-[-10px] sm:top-[-10px] md:top-[-33px]"

          />
          
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={breaking_barriers_img}
              alt="Casino Platform Interface"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingBarriersSection;
