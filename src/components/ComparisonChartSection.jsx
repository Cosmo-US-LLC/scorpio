import { useState, useEffect } from "react";

import th_logos1 from "../assets/ComparisonChartSection/th_logos (5).webp";
import th_logos2 from "../assets/ComparisonChartSection/th_logos (6).webp";
import th_logos3 from "../assets/ComparisonChartSection/th_logos (4).webp";
import th_logos4 from "../assets/ComparisonChartSection/th_logos (3).webp";
import th_logos5 from "../assets/ComparisonChartSection/th_logos (2).webp";
import th_logos6 from "../assets/ComparisonChartSection/th_logos (1).webp";
import heart from "../assets/ComparisonChartSection/heart.webp";

const ComparisonChartSection = () => {

  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMd(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

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
    <section className="relative w-full disrupting_bg py-0 max-md:pb-6 md:py-16 px-1 md:px-6 lg:px-12 overflow-hidden">
      <div
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 mx-auto hidden md:block"
        style={{
          width: "1280px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="max-w-[1280px] overflow-hidden relative w-full mx-auto p-4 max-md:pt-6 sm:p-6 md:p-8 lg:p-[44px]"
       style={
        isMd
          ? {
              borderRadius: "30.769px",
              border: "1px solid rgba(27, 26, 22, 0.40)",
              background: "rgba(27, 26, 22, 0.40)",
              backdropFilter: "blur(7.692295551300049px)",
            }
          : {
            borderRadius: "16px",
              border: "0.77px solid rgba(255, 255, 255, 0.10)",
              background: "rgba(18, 19, 31, 0.70)",
               backdropFilter: "blur(7.5px)",
            }
      }
      >
        <div
  className="absolute w-[623.643px] md:hidden block left-[-50%]  top-[-60%] h-[570.112px] rounded-full"
  style={{
    background:"#BE9E3C",
    opacity:"0.5",
    filter:"blur(250px)"
    
  }}
></div>
        {/* Title */}
        <h2 className="text-center !text-[30px] relative z-[9] md:!text-[48px] mb-8 md:mb-12">
          Disrupting The Gambling Industry
        </h2>

        <div className="rounded-3xl relative z-[9]">
          <div className="w-full">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="min-w-[60px] sm:min-w-[100px] md:min-w-[180px]"></div>

              {/* Platform Columns */}
              <div className="flex flex-1 justify-between gap-1 sm:gap-2 md:gap-4">
                {platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center max-h-[16px] sm:max-h-[25px] md:max-h-[30.769px] flex-1 min-w-0 space-y-[4px] sm:space-y-[6px] md:space-y-[9px]"
                  >
                    <img
                      className="max-h-[16px] sm:max-h-[25px] md:max-h-[30.769px] w-auto"
                      src={platform.logo}
                      alt={platform.name}
                    />

                    {/* Platform Name */}
                    <h5 className="tracking-[-0.5px] md:tracking-[-1px] !text-[7px] md:!text-[16px] sm:text-xs md:text-base text-center leading-tight">
                      {platform.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4 md:mb-6 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>

            {/* Feature Rows */}
            <div className="space-y-2 md:space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center py-1 rounded-xl"
                >
                  {/* Feature Label Column */}
                  <div className="min-w-[60px] sm:min-w-[100px] md:min-w-[180px] pr-1 sm:pr-2">
                    <h5 className="text-start !text-[7px] md:!text-[16px] sm:text-xs md:text-base leading-tight">
                      {feature.label}
                    </h5>
                  </div>

                  {/* Platform Support Columns */}
                  <div className="flex flex-1 justify-between gap-1 sm:gap-2 md:gap-4">
                    {platforms.map((platform, colIndex) => (
                      <div
                        key={colIndex}
                        className="flex items-center justify-center flex-1 min-w-0"
                      >
                        {platform.features[feature.id] ? (
                          <>
                            <img
                              src={heart}
                              className="max-h-[18px] sm:max-h-[28px] md:max-h-[33.846px] w-auto"
                              alt="Disrupting the gambling industry"
                            />
                          </>
                        ) : (
                          <span className="h-1 w-1 sm:h-2 sm:w-2"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonChartSection;
