import trusticon1 from "../assets/TrustBadgesSection/trusticons (3).webp";
import trusticon2 from "../assets/TrustBadgesSection/trusticons (1).webp";
import trusticon3 from "../assets/TrustBadgesSection/trusticons (4).webp";

const TrustBadgesSection = () => {
  const badges = [
    {
      id: 1,
      title: "Secured Licensed Platform",
      description:
        "The SCORPION platform is regulated and licensed by the Curacao EGaming licensing entity.",
      icon: trusticon1,
    },
    {
      id: 2,
      title: "Team is KYC Verified",
      description:
        "The Scorpion Team has been successfully verified by Assure DeFi the KYC Gold Standard.",
      icon: trusticon2,
    },
    {
      id: 3,
      title: "Audited by Solidproof",
      description:
        "Scorpion Casino has been fully audited by Coinsult and shown to be 100% secure.",
      icon: trusticon3,
    },
  ];

  return (
    <section className="relative w-full max-md:!pt-0 py-16 px-6 md:px-16 overflow-hidden">
      

      <div className="relative z-[9] max-w-[1280px] w-[100%] mx-auto ">
        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="px-[22px] pt-[22px] pb-[40px] max-md:flex max-md:justify-between max-md:flex-row-reverse text-center max-md:space-x-2 relative overflow-hidden"
              style={{
                background: " rgba(27, 26, 22, 0.40)",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex md:max-w-[110px] max-w-[100px] mx-auto justify-center items-center md:mb-6 max-md:ml-2 ">
                <img src={badge.icon} alt={badge.title} />
              </div>

              <div>
                <h3 className="mb-[20px] max-md:text-start">
                {badge.title}
              </h3>

              <p className="border-t-[1px] md:px-[20px] max-md:text-start border-[#36383F] pt-[20px]">
                {badge.description}
              </p>
                   <svg
                  xmlns="http://www.w3.org/2000/svg"
                 
                  viewBox="0 0 233 228"
                  fill="none"
                  className="absolute bottom-0 left-0  "
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
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TrustBadgesSection;
