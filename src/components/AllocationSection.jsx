import AllocationImg from "../assets/AllocationSection/Allocation_img.webp";

const AllocationSection = () => {
  return (
    <section className="relative w-full  py-16 px-6 md:px-16  "
    
    >
      <div className="max-w-[1280px] relative f w-full mx-auto">

              <div
        className="absolute bottom-[190px] mx-auto"
        style={{
          width: "1180px",
          height: "216px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>

        <h2 className="text-center mb-40">
          SCORP2.0 Token <span className="text_gradient">Allocation</span>
        </h2>

        <div className=" relative">
          <img src={AllocationImg} alt="Scorpion Casino whitepaper" />
        </div>
      </div>
    </section>
  );
};

export default AllocationSection;
