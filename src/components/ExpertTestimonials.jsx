import ben_crypto from "../assets/crypto_expert/ben_crypto.webp";
import costa_crypto from "../assets/crypto_expert/costa_crypto.webp";
import michael_crypto from "../assets/crypto_expert/michael_crypto.webp";
import card1BG from "../assets/crypto_expert/red_c1_bg.webp";
import card2BG from "../assets/crypto_expert/red_c2_bg.webp";
import card3BG from "../assets/crypto_expert/red_c1_bg.webp";
import StarRating from "../assets/crypto_expert/StarRating.webp";

const ExpertTestimonials = ({ testimonials }) => {
  // Default testimonials data
  const defaultTestimonials = [
    {
      quote: "It’s crazy how many people are using these (Gambling) platforms",
      body: "These gambling projects are a new trend and narrative in crypto. Rollbit started from nothing and has a market cap of 600 million while Funtoken has been listed on Binance. This clearly demonstrates a trend.",
      author: {
        name: "Crypto Costa",
        role: "Youtuber | 95k Followers",
        avatar: ben_crypto,
      },
      rating: 5,
      image: ben_crypto,
      backgroundImage: card1BG,
    },
    {
      quote: "I think that crypto casino projects are going to be huge in 2024",
      body: "I'm interested in profitable sectors, and as we all know, Crypto Casinos are highly profitable. Many people believe Crypto will pump in 2024 because of the Bitcoin halving, and I think crypto casino projects are going to be huge.",
      author: {
        name: "Ben Crypto",
        role: "Youtuber | 28k Followers",
        avatar: costa_crypto,
      },
      rating: 5,
      image: costa_crypto,
      backgroundImage: card2BG,
    },
    {
      quote: "I really like SCORPION CASINO. they have a big shot of becoming a huge success",
      body: "The UI (Design) of the Casino is very nice, and they have a ton of different Partnerships that will make this casino truly exceptional.",
      author: {
        name: "Crypto Panda",
        role: "Youtuber | 15k Followers",
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
                className="group relative rounded-2xl p-5 sm:p-6 md:p-8 border border-white/5 ring-1 ring-[#F7D774]/10  overflow-hidden"
                style={{
                  backgroundImage: `url(${testimonial.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                {/* Card Content */}
                <div
                  className={`relative flex flex-col ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-6 md:gap-10 justify-between`}
                >
                  {/* Text Block */}
                  <div className="flex-1 text-center md:text-left w-full max-w-[512px]">
                    {/* Quote Mark */}
                    <div className="mb-3 md:mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="30"
                        viewBox="0 0 44 30"
                        fill="none"
                      >
                        <path
                          d="M31.8594 14.5811C31.8594 12.335 32.6895 10.3981 34.3496 8.77051C35.4889 7.59863 37.5072 6.24772 40.4043 4.71777V1.44629C35.9121 2.74837 32.3802 4.7666 29.8086 7.50098C27.0417 10.3981 25.6582 13.8324 25.6582 17.8037C25.6582 20.473 26.5046 22.8167 28.1973 24.835C30.0527 27.0485 32.4128 28.1553 35.2773 28.1553C37.2305 28.1553 38.972 27.5368 40.502 26.2998C42.0645 25.0303 42.8457 23.4515 42.8457 21.5635C42.8457 19.9684 42.2598 18.6338 41.0879 17.5596C39.9486 16.4528 38.5326 15.8994 36.8398 15.8994C36.3516 15.8994 35.668 16.0296 34.7891 16.29C33.9102 16.5505 33.2591 16.6807 32.8359 16.6807C32.1849 16.6807 31.8594 15.9808 31.8594 14.5811ZM7.39648 14.2881C7.39648 10.6748 10.2122 7.4847 15.8438 4.71777V1.34863C11.4492 2.68327 7.93359 4.7015 5.29688 7.40332C2.43229 10.3656 1 13.7673 1 17.6084C1 20.2777 1.86263 22.6377 3.58789 24.6885C5.47591 26.9346 7.85221 28.0576 10.7168 28.0576C12.6048 28.0576 14.2975 27.488 15.7949 26.3486C17.39 25.0791 18.1875 23.5166 18.1875 21.6611C18.1875 20.0661 17.5853 18.7152 16.3809 17.6084C15.209 16.4691 13.7767 15.8994 12.084 15.8994C11.6283 15.8994 10.9772 16.0133 10.1309 16.2412C9.31706 16.4691 8.69857 16.583 8.27539 16.583C7.68945 16.583 7.39648 15.818 7.39648 14.2881ZM32.8594 14.5811C32.8594 15.1581 32.9245 15.4968 32.9873 15.6719C33.2854 15.6453 33.7773 15.5466 34.5049 15.3311C35.4102 15.0628 36.2049 14.8994 36.8398 14.8994C38.7636 14.8994 40.4272 15.5353 41.7627 16.8223C43.142 18.0866 43.8457 19.6892 43.8457 21.5635C43.8457 23.7748 42.9112 25.6312 41.1328 27.0762L41.1309 27.0771C39.4244 28.4569 37.4611 29.1553 35.2773 29.1553C32.312 29.1553 29.8067 28.0658 27.8213 25.9209L27.4307 25.4775C25.5849 23.2767 24.6582 20.7045 24.6582 17.8037C24.6582 13.5728 26.1423 9.89183 29.085 6.81055C31.8056 3.91995 35.5065 1.82432 40.126 0.485352L41.4043 0.115234V5.32031L40.8711 5.60156C37.993 7.12143 36.0913 8.41356 35.0664 9.46777L35.0586 9.47656L35.0498 9.48438C33.5739 10.9313 32.8594 12.614 32.8594 14.5811ZM8.39648 14.2881C8.39648 14.9305 8.45633 15.3362 8.52441 15.5664C8.82373 15.5333 9.2615 15.4463 9.86133 15.2783L9.87109 15.2754C10.7394 15.0416 11.4932 14.8994 12.084 14.8994C14.0169 14.8994 15.6945 15.5575 17.0566 16.8721C18.4612 18.1627 19.1875 19.7782 19.1875 21.6611C19.1875 23.8539 18.2243 25.693 16.418 27.1309L16.4004 27.1445C14.7283 28.4168 12.8227 29.0576 10.7168 29.0576C7.74678 29.0576 5.22876 27.9504 3.21777 25.7803L2.82227 25.332C0.946218 23.1019 0 20.5141 0 17.6084C0 13.4878 1.54766 9.84179 4.57812 6.70801L4.58105 6.70508C7.35831 3.85925 11.0318 1.76467 15.5527 0.391602L16.8438 0V5.34082L16.2852 5.61523C10.7316 8.34385 8.39648 11.2811 8.39648 14.2881Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    {/* Headline */}
                    <h3
                      className="text-center text-[30px] md:text-left mb-3 md:mb-4 text_gradient"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(testimonial.quote),
                      }}
                    />

                    <p className="text-[#CACACA] mb-5 md:mb-6 text-sm md:text-base">
                      {testimonial.body}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 py-2 mb-4">
                      <div className="w-full sm:w-[200px]">
                        <button className="btn-primary w-full">
                          {testimonial.author.name}
                        </button>
                      </div>

                      <div className="text-left">
                        <p className="text-[18px] font-[700] text-[#CACACA]">
                          {testimonial.author.role}
                        </p>
                      </div>
                    </div>

                    <img
                      src={StarRating}
                      className="max-w-[120px]"
                      alt="StarRating"
                    />
                  </div>

                  {/* Media Block */}
                  <div className="flex-1 relative w-full max-w-[573px]">
                    <div className=" ">
                      <div className=" ">
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
