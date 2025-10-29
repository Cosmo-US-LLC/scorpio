import graohicsimg from "../assets/gambling/graohics.webp";

const FutureCryptoSection = () => {
  return (
    <section className="relative z-[9] relative w-full bg_gambling_con  pb-16 px-6 md:p-16">
      {/* Decorative Stars/Shine Accents */}
      <div
    className="absolute top-[200px] z-[-1]"
    style={{
      width: "1262px",
      height: "216px",
      borderRadius: "1262px",
      background: "#4D1200",
      filter: "blur(250px)",
      zIndex: 0,
    }}
  ></div>

      {/* Main Container */}
      <div className="relative z-[9] max-w-[1280px] w-[100%] md:pl-[60px] max-md:px-4 max-md:pt-[32px] bg_gambling_inner mx-auto overflow-hidden">
       

        <div className=" flex max-md:flex-col max-md:space-y-[32px] justify-between items-center ">
          <div className="max-w-[664px] w-[100%] space-y-[15px] max-md:flex max-md:flex-col max-md:items-center ">
            <h2 className="md:text-start text-center">
              $SCORP2.0 Is The <span className="faded_heading">Future</span> Leading <span className="faded_heading">Gambling</span> Cryptocurrency
            </h2>

            <p className="md:text-start text-center md:max-w-[580px]">
             The $SCORP2.0 token is empowering the SCORPION ecosystem, offering over 30,000 betting opportunities monthly, 210 casino games, and 160 live games on a licensed, transparent, and provably fair platform. 
            </p>

            <p className="md:text-start text-center">
             Don’t wait, come check us out now!
            </p>

            <button className="btn-primary px-[71px]  py-[18px]" 
              onClick={() => window.open("https://scorpion.casino", "_blank")}
            >
              Visit Casino
            </button>
          </div>
            <div className="max-w-[477.323px] w-[100%]">
              <img src={graohicsimg} alt="gambling" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default FutureCryptoSection;
