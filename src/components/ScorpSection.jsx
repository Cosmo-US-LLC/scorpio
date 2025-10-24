import scorpionCoin from "../assets/what_scorp/scorp_coin_left.webp";

const ScorpSection = () => {
  const features = [
    "Payment method for Scorpion Casino",
    "Passive income for holding $SCORP",
    "Weekly Bonus and Free Games",
    "Affiliate Reward System",
    "Payment method for Scorpion Casino",
    "Payment method for Scorpion Casino",
  ];

  return (
    <section className="w-full min-h-[600px] md:h-[800px] py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto rounded-2xl what_is_scorpion_bg h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 py-8 md:py-0">
          <div className="flex-1 relative w-full max-w-sm md:max-w-none">
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

            <h6 className="text-left text-[#FFF] text-sm md:text-base">
              Gambling is one of the oldest and most lucrative industries in the
              history of mankind and digitization is just the next logical step.
            </h6>

            <p className="text-left text-[#CACACA] text-sm md:text-base">
              The $SCORP token is the one-stop token that will facilitate all
              forms of gambling with a licensed, independent, and provably fair
              Crypto platform. It comes with different advantages and use cases.
              Crypto casinos are booming, and it's your turn to benefit as well.
            </p>

            <ul className="space-y-2 md:space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h6 className="text-sm md:text-base">{feature}</h6>
                </li>
              ))}
            </ul>

            <p className="text-[#FFFFFF] text-xs md:text-sm italic">
              And Much More...
            </p>

            <div className="w-full sm:w-[300px]">
              <button className="btn-primary w-full">Buy $SCORP</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorpSection;
