const CollaborationSection = () => {
  return (
    <section className="w-full h-[666px] flex items-center justify-center">
      <div className="max-w-[1280px] mx-auto rounded-2xl relative overflow-hidden collaboration_section_bg px-8 py-8 flex items-center justify-center">
        <div className="flex-1 text-left flex flex-col gap-6 pr-12">
          <h2 className="text-left">
            <span className="text-white">Collaboration with a </span>
            <span className="text_gradient">Leading Blockchain</span>
            <span className="text-white"> incubator</span>
          </h2>

          <div className="space-y-4 ">
            <h6 className="text-[#CACACA]">
              Scorpion Casino is collaborating with Tenet, the mainstreams
              behind the success stories of Meta Hero (100x return) in
              pre-sales) and Everdome (80x return from its pre-sale).
            </h6>

            <h6 className="text-[#CACACA]">
              Tenet's safety Program has an impressive track record in working
              with new cryptocurrencies and achieving high returns for early
              investors.
            </h6>

            <h6 className="text-[#CACACA]">
              This partnership required months to establish and is set to take
              $SCORP2.0 to the next level.
            </h6>
          </div>

          <div className="w-[300px]">
            <button className="btn-primary">Buy $SCORP</button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/src/assets/collaboration/collaboration_coin_right.webp"
              alt="Collaboration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
