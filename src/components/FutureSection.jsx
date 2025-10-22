import onlineGamblingRightImage from "../assets/online_gambling/online_cambling_right_image.webp";
import gamblingGold from "../assets/online_gambling/gambling_gold_g.webp";

const FutureSection = () => {
  return (
    <section className="w-full h-[700px]">
      <div className="max-w-[1280px] mx-auto relative overflow-hidden  h-full flex items-center justify-center">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 rounded-2xl overflow-hidden px-8 py-6">
          <img
            src={gamblingGold}
            alt="gambling gold"
            className="absolute top-0 right-0 z-0 w-full h-full object-cover"
          />
          <div className="flex-1 flex flex-col z-1 justify-center gap-6">
            <h2 className="text-left">
              <span className="text-white">Online Gambling</span>
              <br />
              <span className="text-white">is the </span>
              <span className=" text-white/50">Future</span>
            </h2>

            {/* Subheading */}
            <h6 className="text-left text-[#FFF]">
              Gambling is one of the oldest and most lucrative industries in the
              history of mankind and digitization is just the next logical step.
            </h6>

            {/* Body Paragraph */}
            <h6 className="text-left text-[#CACACA]">
              People have been gambling for the last 5,000 years, regardless of
              location, time, or market conditions. Gambling is hard-wired in
              human psychology. This makes our staking platform one of the most
              infallible opportunities to generate cash flow with passionate
              long-term appeal and a low risk-reward ratio.
            </h6>

            {/* CTA Button */}
            <div className="w-[300px]">
              <button className="btn-primary">Buy $SCORP</button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative">
              <div className="relative z-1 flex items-center justify-center">
                <img
                  src={onlineGamblingRightImage}
                  alt="Online Gambling Platform"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
