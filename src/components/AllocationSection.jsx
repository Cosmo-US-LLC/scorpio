import AllocationImg from "../assets/AllocationSection/Allocation_img.webp";

const AllocationSection = () => {
  return (
    <section className="relative w-full py-12 md:py-12 px-4 md:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1280px] relative w-full mx-auto">
        <div
          className="absolute bottom-[100px] sm:bottom-[150px] md:bottom-[190px] left-1/2 -translate-x-1/2 mx-auto hidden sm:block"
          style={{
            width: "1180px",
            height: "216px",
            borderRadius: "1262px",
            background: "#4D1200",
            filter: "blur(250px)",
            zIndex: 0,
          }}
        ></div>

        <h2 className="text-center mb-12 sm:mb-20 md:mb-32 lg:mb-40 ">
          SCORP2.0 Token <span className="text_gradient">Allocation</span>
        </h2>

        <div className="relative px-4 sm:px-6 md:px-0">
          <img
            src={AllocationImg}
            alt="Scorpion Casino whitepaper"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AllocationSection;
