import th_logos1 from "../assets/ComparisonChartSection/th_logos (5).webp"
import th_logos2 from "../assets/ComparisonChartSection/th_logos (6).webp"
import th_logos3 from "../assets/ComparisonChartSection/th_logos (4).webp"
import th_logos4 from "../assets/ComparisonChartSection/th_logos (3).webp"
import th_logos5 from "../assets/ComparisonChartSection/th_logos (2).webp"
import th_logos6 from "../assets/ComparisonChartSection/th_logos (1).webp"
import heart from "../assets/ComparisonChartSection/heart.webp"


const ComparisonChartSection = () => {
  // Platform data with logos and support status
  const platforms = [
    {
      name: "Scorpion Casino ",
      logo: th_logos1,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: true,
        staking: true,
        passive: true,
      },
    },
    {
      name: "Bc.Games",
      logo: th_logos2,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: false,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Roobet",
      logo: th_logos3,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: false,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Rollbit",
      logo: th_logos4,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: true,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Owl Games",
      logo: th_logos5,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: true,
        staking: false,
        passive: false,
      },
    },
    {
      name: "Stake",
      logo: th_logos6,
      features: {
        crypto: true,
        liveBets: true,
        affiliate: true,
        token: false,
        staking: false,
        passive: false,
      },
    },
  ];

  const features = [
    { id: "crypto", label: "Accept Crypto" },
    { id: "liveBets", label: "Live Bets" },
    { id: "affiliate", label: "Affiliate System" },
    { id: "token", label: "Own Token" },
    { id: "staking", label: "Staking" },
    { id: "passive", label: "Passive Income" },
  ];

  return (
    <section className="relative w-full disrupting_bg  py-16 px-6 md:px-12 ">
        <div
        className="absolute bottom-[60px] mx-auto"
        style={{
          width: "1280px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>

      <div className="max-w-[1280px] w-full mx-auto p-[44px]"
       style={{
          borderRadius: "30.769px",
          border:"rgba(27, 26, 22, 0.40)",
          background: "rgba(27, 26, 22, 0.40)",
          backdropFilter: "blur(7.692295551300049px)",
        }}
      >
        {/* Title */}
        <h2 className=" text-center mb-12">
          Disrupting the gambling industry
        </h2>

        <div className="rounded-3xl ">
          <div className="flex items-center mb-8">
            <div className=" min-w-[140px] md:min-w-[180px]"></div>

            {/* Platform Columns */}
            <div className="flex flex-1 justify-between gap-2 md:gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center max-h-[30.769px] flex-1 min-w-[60px] space-y-[9px] "
                >
                 
                 <img className="max-h-[30.769px]" src={platform.logo} alt={platform.name} />

                  {/* Platform Name */}
                  <h5 className="tracking-[-1px]">
                    {platform.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-6 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>

          {/* Feature Rows */}
          <div className="space-y-4">
            {features.map((feature, rowIndex) => (
              <div
                key={feature.id}
                className="flex items-center py-1 rounded-xl "
              >
                {/* Feature Label Column */}
                <div className="min-w-[140px] md:min-w-[180px]">
                  <h5 className="text-start">
                    {feature.label}
                  </h5>
                </div>

                {/* Platform Support Columns */}
                <div className="flex flex-1 justify-between gap-2 md:gap-4">
                  {platforms.map((platform, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex items-center justify-center flex-1 min-w-[60px] md:min-w-[90px]"
                    >
                      {platform.features[feature.id] ? (
                      <>
                      <img src={heart} className="max-h-[33.846px]" alt="Disrupting the gambling industry" />
                      </>
                      ) : (
                        <span className="h-2 w-2">
                          
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ComparisonChartSection;
