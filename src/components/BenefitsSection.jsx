import benefitsicon1 from "../assets/Benefits/Benefits_card_icons (2).webp";
import benefitsicon2 from "../assets/Benefits/Benefits_card_icons (4).webp";
import benefitsicon3 from "../assets/Benefits/Benefits_card_icons (1).webp";
import benefitsicon4 from "../assets/Benefits/Benefits_card_icons (3).webp";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "LOWEST $SCORP2.0 PRICE",
      description:
        "During the pre-sale, you can buy $SCORP2.0 at its lowest price before it launches on centralised and decentralised exchanges.",
      icon: benefitsicon1,
      height: "230px",
      width: "274.003px",
    },
    {
      id: 2,
      title: "RECEIVE UP TO 40% CASINO CREDITS",
      description:
        "Receive up to 40% free credits to play on Scorpion.Casino - no conditions or obligations attached!",
      icon: benefitsicon2,
      height: "248px",
      width: "258.004px",
    },
    {
      id: 3,
      title: "$250K GIVEAWAY PARTICIPATION",
      description:
        "Participate in our 250k Giveaway and go all out to win big! This event is exclusively available for Pre-Sale buyers.",
      icon: benefitsicon3,
      height: "184px",
      width: "205.223px",

    },
    {
      id: 4,
      title: "DAILY PASSIVE STAKING INCOME",
      description:
        "Get daily passive staking income automatically added to your wallet - even during the pre-sale period!",
      icon: benefitsicon4,
      height: "199px",
      width: "206px",

    },
  ];

  return (
    <section className="relative w-full max-md:pt-0 py-20 px-4 md:px-16  Benefits_bg">
      <div
        className="absolute bottom-[60px]"
        style={{
          width: "1262px",
          height: "416px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-[725px] mx-auto max-md:mb-[90px] md:mb-[129px]">
          <h2 className="">
            <span className="text_gradient">Benefits</span> Of Buying{" "}
            <span className="text_gradient">$SCORP2.0</span> In The Pre-sale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-md:gap-y-[5rem] md:gap-[15px]">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#1a1a1a] relative rounded-xl max-md:max-w-[100%] md:max-w-[310px] w-[100%] px-[12px] pb-[38px] flex flex-col items-center text-center "
              style={{
                borderRadius:"16px",
                border:"0.764px solid rgba(255, 255, 255, 0.50)",
                background:"rgba(255, 255, 255, 0.10)",
                backdropFilter:"blur(2.599111318588257px)"
              }}

            >
              {/* Icon Container */}
              <div className=" mb-6   max-h-[250px] min-h-[130px]">
                <div className="h-[240px] absolute -top-[25%]  w-[100%] left-0 flex items-center justify-center ">
                  <img
                    src={benefit.icon}
                    className={` mx-auto `}
                    alt={benefit.title}
                     style={{ maxHeight: benefit.height,
                      maxWidth: benefit.width,
                      }}
                  />
                </div>
              </div>

              <h4 className="text_gradient text-center pb-[15px]">
                {benefit.title}
              </h4>

              <p className=" text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
