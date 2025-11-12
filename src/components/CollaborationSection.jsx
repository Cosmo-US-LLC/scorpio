import Collaboration from "../assets/collaboration/collaboration_coin_right.webp";

const CollaborationSection = () => {
  return (
    <section className="w-full min-h-[500px] md:h-[666px] flex items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto rounded-2xl relative overflow-hidden collaboration_section_bg px-6 sm:px-8 py-8 md:py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
        <div className="flex-1 text-left flex flex-col gap-4 md:gap-6 pr-0 md:pr-12 w-full">
          <h2 className="md:text-left !text-center">
            <span className="text-white">Collaboration with a </span>
            <span className="">Leading Blockchain</span>
            <span className="text-white"> incubator</span>
          </h2>

          <div className="space-y-3 md:space-y-4">
            <p className="text-[#CACACA]">
              Scorpion Casino is partnering with Tenset, the masterminds behind
              the success stories of Meta Hero (100x return from its pre-sale)
              and Everdome (80x return from its pre-sale).
            </p>

            <p className="text-[#CACACA] ">
              Tenset’s Infinity Program has an impressive track record in
              working with new cryptocurrencies and delivering high returns to
              early supporters.
            </p>

            <p className="text-[#CACACA] md:max-w-[600px]">
              This partnership required months to establish and is set to take
              $SCORP2.0 to the next level.
            </p>
          </div>

          <div className="w-full sm:w-[300px]">
            <button
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#wallet");
                if (target) {
                  const yOffset = 20;
                  const y =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn-primary w-full"
            >
              Buy $SCORP2.0
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg md:max-w-lg">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={Collaboration}
              alt="Collaboration"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
