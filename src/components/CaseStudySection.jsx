import case_study_img from "../assets/crypto_casino/crypto_casino_left.webp";

const CaseStudySection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[500px] md:h-[540px] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto rounded-2xl case_study_section_bg h-full flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center py-8 md:py-0">
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
            <span className="text-[#CACACA]">Case Study</span>
          </h2>

          <h6 className="text-[#ffffff] text-left text-sm md:text-base">
            26-year-old Crypto Casino Owner Buys a Villa for $80 Million.
          </h6>

          <h6 className="text-[#CACACA] text-sm md:text-base">
            According to The Guardian, a 26-year-old owner of a crypto casino
            made headlines by purchasing Australia's most expensive villa for an
            astounding $80 million USD in just a few years of operating his
            casino.
          </h6>

          <h6 className="text-[#CACACA] text-sm md:text-base">
            The scale of this success showcases how lucrative the crypto casino
            is now impressive, and now, for the first time ever, you have the
            chance to get involved. While these outcomes are exceptional, they
            highlight the potential of the crypto casino industry.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
