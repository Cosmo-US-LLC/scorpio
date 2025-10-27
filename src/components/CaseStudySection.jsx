import case_study_img from "../assets/crypto_casino/crypto_casino_left.webp";

const CaseStudySection = () => {
  return (
    <section className="relative w-full min-h-[500px] case_study_section_bg md:h-[540px] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
       <div
        className="absolute bottom-[50px] md:left-0 max-md:-left-40"
        style={{
          width: "862px",
          height: "350px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
      <div className="max-w-[1280px] mx-auto rounded-2xl  h-full flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center py-8 md:py-0">
        <div className="w-full md:w-[50%] relative">
          <div className="relative rounded-xl overflow-hidden p-6 sm:p-10 md:p-20">
            <img
              src={case_study_img}
              alt="The Guardian Article on Phone"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-6 px-4 md:px-0">
          <h2 className="text-left max-w-full md:max-w-[530px]">
            <span className="text-[#ffffff]">Crypto Casino</span> <br />
            <span className="text_gradient">Case Study</span>
          </h2>

          <h6 className="text-[#ffffff] text-left text-sm md:text-base">
           26-year-old Crypto Casino Owner Buys a Villa for $80 Million.
          </h6>

          <h6 className="text-[#CACACA] text-sm md:text-base">
            According to The Guardian, a 26-year-old owner of a crypto casino made headlines by purchasing Australia’s most expensive villa for an astounding $88 million USD after just a few years of operating his online casino alongside his co-founder. The growth of crypto casinos is truly impressive, and now, for the first time ever, you have
the chance to get involved. While these outcomes are exceptional and not the norm, they clearly demonstrate the immense potential
          </h6>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
