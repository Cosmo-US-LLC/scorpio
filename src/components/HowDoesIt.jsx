import howdoesit_img from "../assets/HowDoesIt/howdoesit_img.webp";
import howdoesit_img_mob from "../assets/HowDoesIt/howdoesit_img_mob.webp";
import trusticon1 from "../assets/HowDoesIt/howdoes_icns (3).webp";
import trusticon2 from "../assets/HowDoesIt/howdoes_icns (2).webp";
import trusticon3 from "../assets/HowDoesIt/howdoes_icns (1).webp";

const HowDoesItSection = () => {
  const badges = [
    {
      id: 1,
      title: "Buy-Back System",
      description:
        "Scorpion Casino uses a smart contract to purchase $SCORP2.0 tokens from public exchanges on a daily basis. These purchases are financed through a portion of the Casino and Betting revenue. During this buying process the $SCORP price goes automatically up.",
      icon: trusticon1,
    },
    {
      id: 2,
      title: "Automatic Token Burn",
      description:
        "The smart contract automatically burns half of the purchased $SCORP2.0 tokens each day. This process reduces the circulating $SCORP2.0 supply, which makes the remaining tokens more valuable.",
      icon: trusticon2,
    },
    {
      id: 3,
      title: "Daily Profits",
      description:
        "The other half of the tokens obtained through the buyback process will be automatically transferred to the Scorpion Staking Pool. This staking pool then distributes rewards daily to $SCORP2.0 holders based on the number of tokens they hold, generating daily profits for them.",
      icon: trusticon3,
    },
  ];

  return (
    <section className="relative w-full max-md:px-4 max-md:pt-0 py-16 overflow-hidden">
      <div className="relative z-[9] max-w-[1280px] w-[100%] mx-auto ">
        <div className="text-center relative z-[1] max-w-[932px] mx-auto mb-[49px]">
          <h2 className="text-center mb-4">
            How Does It <span className="faded_heading">Work</span>?
          </h2>
          <p className="text-center">
            Curious about how the Scorpion Casino ecosystem works? Here’s a
            simplified explanation. Scorpion Casino is a global Crypto Casino
            and Sports Betting platform generating daily revenue. This income
            drives the growth of the $SCORP2.0 Token through an integrated daily
            Buy-Back, Burn and Reward System.
          </p>
        </div>
        <div className="relative">
          <img className="md:block hidden max-w-[850px] mx-auto relative z-[1]" src={howdoesit_img} alt="" />
          <img className="md:hidden  block" src={howdoesit_img_mob} alt="" />
          <div
            className="absolute max-md:bottom-[200px] md:bottom-[330px] left-[25%] max-md:left-[-10%] mx-auto"
            style={{
              width: "762px",
              height: "216px",
              borderRadius: "1262px",
              background: "#4D1200",
              filter: "blur(250px)",
              zIndex: 0,
            }}
          ></div>
        </div>
      </div>
      <div className="howdoesit_bg md:mt-[80px] ">
        <div className="max-w-[1280px] relative mx-auto md:py-[50px] pt-[60px]">
          <div
            className="absolute max-md:bottom-[330px] md:bottom-[60px] mx-auto"
            style={{
              width: "1280px",
              height: "316px",
              borderRadius: "1262px",
              background: "#4D1200",
              filter: "blur(250px)",
              zIndex: 0,
            }}
          ></div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="px-[27px] pt-[35px] relative pb-[41px] text-center relative overflow-hidden"
                style={{
                  background: " rgba(27, 26, 22, 0.40)",
                  border: "0.892px solid rgba(255, 255, 255, 0.10)",
                  borderRadius: "17.844px",
                  backdropFilter: "blur(8.922223091125488px)",
                }}
              >
                <div className="flex max-w-[110px] mx-auto justify-center items-center mb-[35px]">
                  <img src={badge.icon} alt={badge.title} />
                </div>

                <h3 className="mb-[20px] text_gradient">{badge.title}</h3>

                <p className="border-t-[1px] border-[#36383F] pt-[20px]">
                  {badge.description}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="absolute w-full h-auto -bottom-3 left-0  "
                >
                  <g filter="url(#filter0_f_206_2451)">
                    <ellipse
                      cx="116.668"
                      cy="199.967"
                      rx="107.067"
                      ry="20.9672"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_206_2451"
                      x="-168.843"
                      y="0.555557"
                      width="571.022"
                      height="398.823"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="89.2222"
                        result="effect1_foregroundBlur_206_2451"
                      />
                    </filter>
                  </defs>
                </svg>
                <div
                  className="h-[1px] w-[100%] absolute bottom-0 left-0 "
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 26.44%, #FFF 50.22%, rgba(255, 255, 255, 0.00) 75.48%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoesItSection;
