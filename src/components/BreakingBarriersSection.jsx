import breaking_barriers_img from "../assets/breaking_down/scorpion_casino_right.webp";
import scorpioToken from "../assets/breaking_down/scorpio_token.webp";

const BreakingBarriersSection = () => {
  return (
    <section className="relative w-full overflow-hidden h-[660px] flex items-center justify-center">
      <div className="max-w-[1280px] mx-auto rounded-2xl breaking_barriers_section_bg flex items-center justify-center gap-10 px-8 py-8">
        <div className="w-[50%] flex flex-col gap-6">
          <h2 className="text-left max-w-[530px]">
            <span className="text-[#ffffff] ">Breaking Down</span> <br />
            <span className="text-[#ffffff] ">The Barriers To</span> <br />
            <span className="text-[#CACACA] ">The Casino Industry</span>
          </h2>

          <h6 className="text-[#ffffff] text-left">
            $SCORP Delivers Exclusive Insider Access to the world of Gambling.
          </h6>

          <h6 className="text-[#CACACA]">
            Launching an online casino from scratch typically takes 6-18 months
            of intense preparation, a $2 million investment, legal connections,
            and years of experience in the gambling industry. These high
            barriers have $SCORP2.0, the first social online gambling
            cryptocurrency, anyone can participate in this lucrative field
            without massive capital or experience and potentially earn
            substantial profits.
          </h6>
        </div>

        <div className="w-[50%] relative pt-16 pb-4 px-8">
          <img
            src={scorpioToken}
            alt="Scorpion Casino Token"
            className="w-[200px] h-[200px] object-cover rounded-xl z-10 absolute -left-[60px] bottom-[-50px]"
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
