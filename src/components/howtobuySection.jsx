import howtobuy from "../assets/howtobuy/howtobuy_img.webp";


const HowToBuySection = () => {
  const howToBuy = [
    {
      id: 1,
      title: "Step 1",
      maintitle:"Connect your Wallet",
      description:
        "Use MetaMask, Trust Wallet, Phantom, or any other decentralized wallet to connect within seconds.",
    },
    {
      id: 2,
      title: "Step 2",
      maintitle:"Confirm Transaction",
      description:
        "You can buy $SCORP 2.0 with a card or using ETH, USDC, USDT, SOL, BNB, and over 10 other currencies. Simply click the Buy button and confirm the transaction in your wallet.",
    },
    {
      id: 3,
      title: "Step 3",
      maintitle:"Claim Tokens",
      description:
        "Congratulations! You can claim your $SCORP2.0 after the pre-sale ends.",
    },
  ];

  return (
    <section className="relative w-full  py-16 px-6 md:px-16 ">
       <div
        className="absolute bottom-[300px]"
        style={{
          width: "1162px",
          height: "200px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
        <div className="text-center max-w-[725px] mx-auto mb-[59px]">
          <h2 className="">
          How To Buy SCORP2.0
          </h2>
        </div>

      <div className="relative z-[9] how_to_buy_bg max-w-[1280px] w-[100%] mx-auto ">
        {/* howToBuy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {howToBuy.map((badge) => (
            <div
              key={badge.id}
              className="px-[26px] pt-[35px] pb-[20px] text-start relative overflow-hidden"
              style={{
                background: " rgba(0, 0, 0, 0.30)",
                border: "0.88px solid rgba(255, 255, 255, 0.50)",
                borderRadius: "17.6px",
                backdropFilter: "blur(2.991999864578247px)",
              }}
            >

              <h4 className="mb-[17px] text_gradient text-start">
                {badge.title}
              </h4>
               <h3 className="mb-[17px] !text-[25px] text-start">
                {badge.maintitle}
              </h3>

              <p className="border-t-[1px] border-[#36383F] pt-[17px]">
                {badge.description}
              </p>
                
            </div>
          ))}
        </div>

        <div className="max-w-[920.44px]  w-[100%] mx-auto">
          <img src={howtobuy} alt="how to buy" />
        </div>

        <div className="flex items-center mt-[-50px] justify-center space-x-5">
          <button className="px-[57px] py-[19px] btn-primary"
           style={{
    boxShadow: "0 -1.76px 3.52px 0 #F5E99C inset, 0 1.76px 3.52px 0 #F5E99C inset",
  }}
          >Buy $SCORP2.0</button>
          <button className="px-[57px] py-[19px] btn-secondary"> Need Support?</button>
        </div>

       
      </div>
    </section>
  );
};

export default HowToBuySection;
