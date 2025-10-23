import market_opportunity_img from "../assets/huge_market/huge_market_bar.webp";

const MarketOpportunitySection = () => {
  return (
    <section className="relative w-full overflow-hidden h-[600px] flex items-center justify-center ">
      <div className="huge_market_section_bg z-1  absolute top-0 left-0 right-0 bottom-0 mx-auto "></div>
      <div className="max-w-[1280px] mx-auto rounded-2xl px-8 py-8 huge_market_gbg flex gap-10 items-center justify-center z-20">
        <div className="w-[40%] relative p-16">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={market_opportunity_img}
              alt="Market Opportunity Chart"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="absolute top-[20px] right-[80px] text-center">
            <h6>Crypto Casino Market</h6>
            <h6 className="font-bold">$250 Million</h6>
          </div>
          <div className="absolute bottom-[10px] right-[160px] text-center">
            <h6>Global Casino Market</h6>
            <h6 className="font-bold">$263.3 Billion</h6>
          </div>
        </div>

        <div className="w-[60%] flex flex-col gap-6">
          <h2 className="text-left ">
            <span className="text-[#ffffff]">
              Huge <span className="text-[#CACACA]">Market</span> Opportunity
            </span>{" "}
          </h2>

          <h6 className="text-[#CACACA]">
            Since 2017, the crypto casino industry has surged in value, now
            reaching $250 million. But that's just a tiny bit—0.1%—of the huge
            $263.3 billion online casino market. That market keeps growing by
            about 8% each year, meaning it gets even bigger, with more billions
            rolling in. People love Crypto Casinos because they’re easy to use
            and keep things private. Scorpion Casino sets itself apart by
            establishing the most extensive community reward system, giving back
            more to its community than any other casino.
          </h6>

          <h6 className="text-[#CACACA]">
            This innovative community incentive program, offering daily staking
            rewards based on the casino's performance, coupled with the
            $SCORP2.0 token and the burn and buy-back mechanism, has the
            potential to attract thousands of players daily and might push
            Scorpion Casino to become one of the market leaders.
          </h6>

          <div className="w-[300px]">
            <button className="btn-primary">Buy $SCORP2.0</button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
