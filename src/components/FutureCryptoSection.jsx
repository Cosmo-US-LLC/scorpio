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
      <div className="relative z-[9] max-w-[1280px] w-[100%] pl-[60px] bg_gambling_inner mx-auto overflow-hidden">
       

        <div className="flex justify-between items-center ">
          <div className="max-w-[664px] w-[100%] space-y-[15px]">
            <h2 className="text-start">
              $SCORP2.0 is the <span className="faded">future</span> leading <span className="faded">gambling</span> cryptocurrency
            </h2>

            <p className="">
              The $SCORP2.0 token is empowering the SCORPION ecosystem, offering
              over 30,000 betting opportunities monthly, 210 casino games, and
              160 sports to choose from. It's licensed, transparent, and
              provably fair platform!
            </p>

            <p className="">
              Don't wait, come check us out now!
            </p>

            <button className="btn-primary px-[71px] py-[18px]">
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
