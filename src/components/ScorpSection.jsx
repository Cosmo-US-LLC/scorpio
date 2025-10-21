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
    <section className="w-full bg-linear-to-b from-black to-[#1a1a1a] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto rounded-2xl">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Scorpion Coin Image */}
          <div className="flex-1 relative">
            {/* Golden Glow Effect */}
            <div className="absolute inset-0 bg-[#d4af37] opacity-20 blur-[120px] rounded-full"></div>

            {/* Coin Image Container */}
            <div className="relative z-10">
              <img
                src="/scorpion-coin.png"
                alt="Scorpion Coin with Gold Stacks"
                className="w-full max-w-md mx-auto drop-shadow-[0_0_80px_rgba(212,175,55,0.4)]"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full max-w-md mx-auto aspect-square bg-linear-to-br from-[#d4af37] via-[#fcd34d] to-[#b8860b] rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(212,175,55,0.4)]">
                      <div class="text-center text-black">
                        <svg class="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        <p class="text-2xl font-bold">$SCORP</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">What is </span>
              <span className="bg-linear-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                $SCORP?
              </span>
            </h2>

            {/* Subheading */}
            <h3 className="text-white text-lg md:text-xl font-bold mb-4">
              Gambling is one of the oldest and most lucrative industries in the
              history of mankind and digitization is just the next logical step.
            </h3>

            {/* Body Paragraph */}
            <p className="text-[#CACACA] text-sm md:text-base leading-relaxed mb-6">
              The $SCORP token is the one-stop token that will facilitate all
              forms of gambling with a licensed, independent, and provably fair
              Crypto platform. It comes with different advantages and use cases.
              Crypto casinos are booming, and it's your turn to benefit as well.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Golden Checkbox Icon */}
                  <svg
                    className="w-5 h-5 shrink-0 text-[#d4af37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* "And Much More..." */}
            <p className="text-[#808080] text-sm italic mb-8">
              And Much More...
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition-all duration-300 hover:scale-105">
              Buy $SCORP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorpSection;
