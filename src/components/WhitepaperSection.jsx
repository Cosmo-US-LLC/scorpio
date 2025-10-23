import whitepaperimg from "../assets/whitepaper/whitepaper_img.webp";
import whitepapervect from "../assets/whitepaper/whitepaper_vec.webp";

const WhitepaperSection = () => {
  return (
    <section className="relative w-full  py-16 px-6 md:px-16 ">
      <div
        className="max-w-[1280px] overflow-hidden relative pl-[120px] flex justify-between items-center pr-[60px] w-full mx-auto"
        style={{
          borderRadius: "17.591px",
          // border: "0.88px solid #D7DBD9",
          background: "rgba(18, 19, 31, 0.70)",
          backdropFilter: "blur(8.795538902282715px)",
        }}
      >
        <img src={whitepapervect} className="absolute max-w-[193px] top-8 -left-18" alt="Scorpion Casino whitepaper" />
        <div className="space-y-[30px]  max-w-[538px] w-full">
          <h2 className="text-start ">
            Scorpion Casino <span className="text_gradient">whitepaper</span> 
          </h2>

          <p className="">
            Reading the $SCORPION CASINO Whitepaper is a great way to learn more
            about the unique $SCORPION ecosystem and how the $SCORP token works.
            It covers everything from the casino's features to tokenomics, and
            explains in detail how it stands out from other crypto projects.
          </p>

          <button className="btn-primary text-[20px] font-[800] px-[27px] py-[22px]">
            Read the Whitepaper
          </button>
        </div>

        <div className="flex-1 relative">
          <img src={whitepaperimg} alt="Scorpion Casino whitepaper" />
        </div>
      </div>
    </section>
  );
};

export default WhitepaperSection;
