import AllocationImg from "../assets/AllocationSection/Allocation_img.webp";

const AllocationSection = () => {
  return (
    <section id="tokenomics" className="relative w-full py-12 md:py-12 px-4 md:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1280px] relative w-full mx-auto">
        <div
          className="absolute bottom-[100px] sm:bottom-[150px] md:top-[150px] left-1/2 -translate-x-1/2 mx-auto hidden sm:block"
          style={{
            width: "1180px",
            height: "216px",
            borderRadius: "1262px",
            background: "#4D1200",
            filter: "blur(250px)",
            zIndex: 0,
          }}
        ></div>

        <h2 className="text-center mob_br mb-12 relative z-[1] sm:mb-20 md:mb-26 lg:mb-28 ">
          $SCORP2.0 <br /> Token <span className="text_gradient">Allocation</span>
        </h2>

        <div className="relative px-4 sm:px-6 md:px-0">
          <img
            src={AllocationImg}
            alt="Scorpion Casino whitepaper"
            className="w-full h-auto object-contain max-w-[900px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AllocationSection;
