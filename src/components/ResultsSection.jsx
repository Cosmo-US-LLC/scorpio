import resulticon1 from "../assets/results/resulticon (5).webp";
import resulticon2 from "../assets/results/resulticon (4).webp";
import resulticon3 from "../assets/results/resulticon (3).webp";
import resulticon4 from "../assets/results/resulticon (2).webp";
import resulticon5 from "../assets/results/resulticon (1).webp";

const ResultsSection = () => {
  const results = [
    {
      id: 1,
      title: "Market Cap",
      description: "$SCORP reached a market cap of  $280 million.",
      icon: resulticon1,
    },
    {
      id: 2,
      title: "Presale Profits",
      description:
        "Early $SCORP presale buyers gained up to 2800% (28x) at the  all-time high.",
      icon: resulticon2,
    },
    {
      id: 3,
      title: "USDT Rewards",
      description:
        "Over $582,000 in USDT was distributed to $SCORP presale  holders as rewards.",
      icon: resulticon3,
    },
    {
      id: 4,
      title: "Performance",
      description:
        "$SCORP surged by 560% from its launch price to its all-time high.",
      icon: resulticon4,
    },
    {
      id: 5,
      title: "Migration",
      description:
        "All $SCORP presale holders will be automatically migrated to SCORP 2.0 ",
      icon: resulticon5,
    },
  ];

  return (
    <div className="relative">
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
      <section
      className="relative w-full bg_resultssection  px-6 md:px-16 overflow-hidden
    "
    >
     
      <div
        className="max-w-[1280px] relative mx-auto pt-[85px] pb-[34px]"
        style={{
          borderRadius: "17.844px",
          border: "0.892px solid rgba(255, 255, 255, 0.10)",
          background: "rgba(27, 26, 22, 0.40)",
          backdropFilter: "blur(8.922223091125488px)",
        }}
      >
        <div className="">
          {/* Header */}
          <div className="text-center space-y-[15px] mb-12 max-w-[684px] mx-auto">
            <h2 className="">
              Results of
              <span className="text_gradient"> SCORP 1.0</span>
            </h2>
            <p className="text-center">
              SCORP was listed on multiple exchanges, reaching a $280M market
              cap, soaring 560% from launch, and delivering up to 2800% (28x)
              returns for presale buyers.
            </p>
            <p className="text-center">
              Now, with SCORP 2.0, a new era begins, migrating to the Ethereum
              blockchain with a fully upgraded next-gen casino, 20,000+ holders,
              major partnerships, and 5+ upcoming exchange listings - all coming
              together to build the #1 crypto casino ecosystem worldwide.
            </p>
          </div>

          <div className="absolute top-[20%] flex w-full justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="572"
              height="400"
              viewBox="0 0 572 400"
              fill="none"
            >
              <g filter="url(#filter0_f_185_2115)">
                <ellipse
                  cx="285.93"
                  cy="200.233"
                  rx="107.067"
                  ry="20.9672"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_185_2115"
                  x="0.418839"
                  y="0.821182"
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
                    result="effect1_foregroundBlur_185_2115"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          {/* Results Cards - Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-[20px] px-[15px]">
            {results.map((result) => (
              <div
                key={result.id}
                className=" overflow-hidden p-4 flex flex-col items-center text-center "
                style={{
                  borderRadius: "17.844px",
                  border: "0.892px solid rgba(255, 255, 255, 0.10)",
                  background: "rgba(27, 26, 22, 0.40)",
                  backdropFilter: "blur(8.922223091125488px)",
                }}
              >
                {/* Icon */}
                <img
                  src={result.icon}
                  className="w-[98.144px] h-[98.144px]"
                  alt={result.title}
                />

                <h4 className="text-center text_gradient mt-[36px]">
                  {result.title}
                </h4>

                <div
                  className="w-full h-[1px] mt-[18px] mb-[18px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.10)",
                  }}
                >
                  {" "}
                </div>

                <p className="">{result.description}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="233"
                  height="228"
                  viewBox="0 0 233 228"
                  fill="none"
                  className="absolute -bottom-3 left-0  "
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

          {/* Results Cards - Mobile Horizontal Scroll */}
          <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {results.map((result) => (
              <div
                key={result.id}
                className="shrink-0 w-72 snap-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#F7D774]/10 border border-[#F7D774]/20 mb-4">
                  {result.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {result.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-6">
                  {result.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ResultsSection;
