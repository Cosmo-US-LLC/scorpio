import ben_crypto from "../assets/crypto_expert/ben_crypto.webp";
import costa_crypto from "../assets/crypto_expert/costa_crypto.webp";
import michael_crypto from "../assets/crypto_expert/michael_crypto.webp";
import card1BG from "../assets/crypto_expert/red_c1_bg.webp";
import card2BG from "../assets/crypto_expert/red_c2_bg.webp";
import card3BG from "../assets/crypto_expert/red_c1_bg.webp";

const ExpertTestimonials = ({ testimonials }) => {
  // Default testimonials data
  const defaultTestimonials = [
    {
      quote: "I think that crypto casino projects are going to be huge in 2024",
      body: "I'm interested in profitable casinos, and as we all know, Crypto Casinos are really profitable, have growth beyond 50% each year and have a total market capitalization of 231 Billion. Crypto casino projects are going to be huge.",
      author: {
        name: "Ben Crypto",
        role: "YouTuber | 28k Followers",
        avatar: ben_crypto,
      },
      rating: 5,
      image: ben_crypto,
      backgroundImage: card1BG,
    },
    {
      quote: "It's crazy how many people are using these (Gambling) platforms",
      body: "I'm interested in profitable casinos, and as we all know, Crypto Casinos are really profitable, have growth beyond 50% each year and have a total market capitalization of 231 Billion. Crypto casino projects are going to be huge.",
      author: {
        name: "Crypto Costa",
        role: "YouTuber | 55k Followers",
        avatar: costa_crypto,
      },
      rating: 5,
      image: costa_crypto,
      backgroundImage: card2BG,
    },
    {
      quote: "I just bought the next billion dollar crypto",
      body: "Scorpion Casino also offers staking where no other crypto casino does it before! The project will be the winner! There were $90M sold and the next reveal they did take advantage of Scorpion Casinos early.",
      author: {
        name: "Michael Wrubel",
        role: "YouTuber | 370k Followers",
        avatar: michael_crypto,
      },
      rating: 5,
      image: michael_crypto,
      backgroundImage: card3BG,
    },
  ];

  const testimonialsData = testimonials || defaultTestimonials;

  // Highlight keywords in gold
  const highlightKeywords = (text) => {
    const keywords = [
      "crypto casino",
      "crypto",
      "casino",
      "Gambling",
      "platforms",
      "billion dollar",
    ];

    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<span class="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">$1</span>'
      );
    });

    return highlightedText;
  };

  // Render star rating
  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-[#F7D774]" : "text-gray-600"
          } drop-shadow-[0_0_4px_rgba(247,215,116,0.4)]`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-[#0B0D10] py-12 md:py-16 px-4 md:px-6 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-center md:max-w-[660px] mx-auto">
            <span className="block text-[#ffffff] mb-2">
              What Crypto Experts Think About{" "}
              <span className="text_gradient">$SCORP2.0</span>
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="space-y-8 md:space-y-12">
          {testimonialsData.map((testimonial, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={index}
                className="group relative rounded-2xl p-5 sm:p-6 md:p-8 border border-white/5 ring-1 ring-[#F7D774]/10 hover:scale-[1.01] transition-all duration-300 hover:ring-[#F7D774]/20 overflow-hidden"
                style={{
                  backgroundImage: `url(${testimonial.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                {/* Card Content */}
                <div
                  className={`relative flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-6 md:gap-10`}
                >
                  {/* Text Block */}
                  <div className="flex-1 text-center md:text-left w-full">
                    {/* Quote Mark */}
                    <div className="mb-3 md:mb-4">
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 text-white/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Headline */}
                    <h3
                      className="text-center md:text-left mb-3 md:mb-4 text_gradient"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(testimonial.quote),
                      }}
                    />

                    {/* Body Paragraph */}
                    <p className="text-[#CACACA] mb-5 md:mb-6 text-sm md:text-base">
                      {testimonial.body}
                    </p>

                    {/* Author Pill */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 py-2 mb-4">
                      <div className="w-full sm:w-[200px]">
                        <button className="btn-primary w-full">
                          Buy $SCORP
                        </button>
                      </div>
                      {/* {testimonial.author.avatar && (
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] p-[2px]">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                            <img
                              src={testimonial.author.avatar}
                              alt={testimonial.author.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.innerHTML = `
                                  <svg class="w-5 h-5 text-[#F7D774]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                  </svg>
                                `;
                              }}
                            />
                          </div>
                        </div>
                      )} */}
                      <div className="text-left">
                        {/* <p className="text-white font-bold text-sm">
                          {testimonial.author.name}
                        </p> */}
                        <p className="text-[#CACACA]">
                          {testimonial.author.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Media Block */}
                  <div className="flex-1 relative w-full">
                    <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                      <div className="relative rounded-xl overflow-hidden border-2 border-[#F7D774]/30 shadow-[0_0_20px_rgba(247,215,116,0.2)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(247,215,116,0.4)] transition-all duration-300">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author.name}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertTestimonials;
