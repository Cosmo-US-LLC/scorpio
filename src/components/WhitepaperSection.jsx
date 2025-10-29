import whitepaperimg from "../assets/whitepaper/whitepaper_img.webp";
import whitepapervect from "../assets/whitepaper/whitepaper_vec.webp";

const WhitepaperSection = () => {
  return (
    <section id="whitepaper" className="relative w-full py-12 md:py-16 px-4 md:px-6 lg:px-16">
      <div
        className="max-w-[1280px] border border-white/10 overflow-hidden relative pl-6 sm:pl-12 md:pl-20 lg:pl-[120px] pr-6 sm:pr-10 md:pr-12 lg:pr-[60px] py-6 md:py-8 lg:py-0 flex flex-col lg:flex-row justify-between items-center w-full mx-auto"
        style={{
          borderRadius: "17.591px",
          // border: "0.88px solid #D7DBD9",
          background: "rgba(18, 19, 31, 0.70)",
          backdropFilter: "blur(8.795538902282715px)",
        }}
      >
        <img
          src={whitepapervect}
          className="absolute max-w-[120px] sm:max-w-[150px] md:max-w-[193px] top-4 sm:top-6 md:top-8 -left-8 sm:-left-12 md:-left-18 opacity-50 md:opacity-100"
          alt="Scorpion Casino whitepaper"
        />
        <div className="space-y-4 sm:space-y-6 md:space-y-[30px] max-w-[538px] w-full relative z-10">
          <h2 className="text-center md:text-start ">
            Scorpion Casino <span className="text_gradient">Whitepaper</span>
          </h2>

          <p className=" text-center md:text-start text-sm md:text-base">
            Reading the SCORPION CASINO Whitepaper is a great way to learn more about the unique SCORPION ecosystem and how the $SCORP token can benefit you. It highlights the groundbreaking innovations and explains in detail how it stands out from other crypto projects.
          </p>

          <button
              onClick={() => window.open("https://scorpio-casino.netlify.app/doc/whitepaper.pdf", "_blank")}
          className="btn-fade text-base sm:text-lg md:text-[20px] font-[800] px-4 sm:px-6 md:px-[27px] py-3 sm:py-4 md:py-[22px] w-full sm:w-auto">
            Read the Whitepaper
          </button>
        </div>

        <div className="flex-1 relative w-full mt-6 lg:mt-0 max-w-md lg:max-w-none mx-auto">
          <img
            src={whitepaperimg}
            alt="Scorpion Casino whitepaper"
            className="w-full h-auto object-contain"
            
          />
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
