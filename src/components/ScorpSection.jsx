import scorpionCoin from "../assets/what_scorp/scorp_coin_left.webp";
import tick from "../assets/what_scorp/tick.webp";

const ScorpSection = () => {
  const features = [
    "Passive income for holding $SCORP2.0",
    "Payment method for Scorpion Casino",
    "Weekly Bonus and Free Games",
    "Affiliate Reward System",
  ];

  return (
    <section  className="w-full min-h-[600px] md:h-[800px] py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto rounded-2xl what_is_scorpion_bg h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-8 md:py-0">
          <div className="hidden md:flex-1 relative w-full max-w-sm md:max-w-none">
            <div className="relative z-10">
              <img
                src={scorpionCoin}
                alt="Scorpion Coin with Gold Stacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 z-10 flex flex-col gap-4 md:gap-6 px-4 sm:px-6 md:px-8 w-full">
            <h2 className="text-left">
              <span className="text-white">What is </span>
              <span className="text-white/50">$SCORP?</span>
            </h2>

            <p className="text-left text-[#FFF] font-[700] md:text-base">
              Gambling is one of the oldest and most lucrative industries in the history of mankind and digitization is just the next logical step.
            </p>

            <p className="text-left text-[#CACACA]  md:text-base">
             The $SCORP2.0 token is the one-stop token that will facilitate all forms of gambling with a licensed, transparent, and provably fair crypto platform. It comes with different advantages and use cases. Crypto casinos are booming, and it’s your turn to benefit.
            </p>

            <ul className="space-y-2 md:space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3">
                 <img src={tick} className="h-[18px]" alt="" />
                  <h5 className="font-[700] md:text-base">{feature}</h5>
                </li>
              ))}
            </ul>

            <p className="!text-[#FFFFFF] !font-[700] text-xs ">
              And Much More...
            </p>

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
             <div className="md:hidden flex-1 relative w-full max-w-sm md:max-w-none">
            <div className="relative z-10">
              <img
                src={scorpionCoin}
                alt="Scorpion Coin with Gold Stacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorpSection;
