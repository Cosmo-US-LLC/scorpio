import onlineGamblingRightImage from "../assets/online_gambling/online_cambling_right_image.webp";

const FutureSection = () => {
  return (
    <section className="w-full min-h-[600px] md:h-[700px] py-12 md:py-14 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] future_section_bg mx-auto relative overflow-hidden h-full flex items-center justify-center">
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 rounded-2xl overflow-hidden px-4 sm:px-6 md:px-8 py-6 md:py-6">
          <div className="flex-1 flex flex-col z-10 justify-center gap-4 md:gap-6 w-full">
            <h2 className="text-left">
              <span className="text-white">Online Gambling</span>
              <br />
              <span className="text-white">is the </span>
              <span className=" text-white/50">Future</span>
            </h2>

            {/* Subheading */}
            <p className="text-left text-[#FFF] font-[700] md:text-base">
              Gambling is one of the oldest and most lucrative industries in the history of mankind and digitization is just the next logical step.
            </p>

            {/* Body Paragraph */}
            <p className="text-left text-[#CACACA] md:text-base">
             People have been gambling for the last 3,000 years, regardless of location, time, or market conditions. Gambling is hard-wired in human psychology. This makes an online gambling platform one of the most interesting opportunities to generate cash flow with passive staking income, and build long-term wealth.
            </p>

            {/* CTA Button */}
            <div className="w-full sm:w-[300px]">
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
              className="btn-primary w-full">Buy $SCORP2.0</button>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-sm md:max-w-none">
            <div className="relative">
              <div className="relative z-10 flex items-center justify-center">
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
