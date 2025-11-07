
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      description: "$SCORP reached a market cap <br/> of $280 million.",
      icon: resulticon1,
    },
    {
      id: 2,
      title: "Presale Profits",
      description:
        "Early $SCORP presale buyers gained up to 2800% (28x) at the all-time high.",
      icon: resulticon2,
    },
    {
      id: 3,
      title: "USDT Rewards",
      description:
        "Over $582,000 in USDT was distributed to $SCORP presale holders as rewards.",
      icon: resulticon3,
    },
    {
      id: 5,
      title: "Migration",
      description:
        "All $SCORP presale holders will be automatically migrated to $SCORP2.0 ",
      icon: resulticon5,
    },
  ];

  return (
    <div className="relative">
      <div
        className="absolute max-md:top-[60px] md:bottom-[60px]"
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
        className="relative w-full bg_resultssection  px-4 md:px-16 overflow-hidden
    "
      >
        <div
          className="max-w-[1280px] relative mx-auto md:pt-[85px] pt-[65px] pb-[34px]  md:rounded-[17.844px] 
    md:border md:border-[rgba(255,255,255,0.10)] 
    md:bg-[rgba(27,26,22,0.40)] 
    md:backdrop-blur-[8.922223091125488px]"
        >
          <div className="">
            {/* Header */}
            <div className="text-center space-y-[15px] mb-12 max-w-[730px] mx-auto">
              <h2 className="max-md:tracking-[-0.5px]">
                Results of
                <span className="text_gradient"> SCORP 1.0</span>
              </h2>
              <p className="text-center">
                SCORP was listed on multiple exchanges, reaching a $280M market
                cap, soaring 560% from launch, and delivering up to 2800% (28x)
                returns for presale buyers at its all-time high.
              </p>
              <p className="text-center">
                Now, with $SCORP 2.0, a new era begins, migrating to the Ethereum
                blockchain with a fully upgraded next-gen casino, 20,000+
                holders, major partnerships, and 5+ upcoming exchange listings,
                all coming together to build the #1 crypto casino ecosystem
                worldwide.
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
            <div className="max-md:hidden  grid grid-cols-1 md:grid md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-[20px] px-[15px]">
              {results.map((items) => (
                <div
                  key={items.id}
                  className=" overflow-hidden px-6 py-10 flex flex-col items-center text-center "
                  style={{
                    borderRadius: "17.844px",
                    border: "0.892px solid rgba(255, 255, 255, 0.10)",
                    background: "rgba(27, 26, 22, 0.40)",
                    backdropFilter: "blur(8.922223091125488px)",
                  }}
                >
                  {/* Icon */}
                  <img
                    src={items.icon}
                    className="w-[98.144px] h-[98.144px]"
                    alt={items.title}
                  />

                  <h4 className="text-center text_gradient mt-[36px]">
                    {items.title}
                  </h4>

                  <div
                    className="w-full h-[1px] mt-[18px] mb-[18px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.10)",
                    }}
                  >
                    {" "}
                  </div>

                  <p className="mob_br"
                  dangerouslySetInnerHTML={{ __html: items.description }}
                  ></p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="233"
                    // height="228"
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
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
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

            <div className="relative px-0 sm:px-4 md:px-12 md:hidden">
              <Carousel
                opts={{
                  align: "start",
                loop: false,
                }}
                className="w-full"
                style={{
      WebkitTransform: "translateZ(0)",
      transform: "translateZ(0)",
      WebkitOverflowScrolling: "touch",
    }}
              >
                <CarouselContent className="-ml-4 md:-ml-6"
                style={{
        WebkitOverflowScrolling: "touch",
        scrollSnapType: "x mandatory",
        WebkitScrollSnapType: "x mandatory",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
                >
                  {results.map((items) => (
                    <CarouselItem
                      key={items.id}
                      className="pl-4 md:pl-6 basis-full rounded-[16.067px] sm:basis-1/2"
                    >
                      <div
                        key={items.id}
                        className=" overflow-hidden px-6 py-10 flex flex-col items-center text-center "
                        style={{
                          borderRadius: "17.844px",
                          border: "0.892px solid rgba(255, 255, 255, 0.10)",
                          background: "rgba(27, 26, 22, 0.40)",
                          backdropFilter: "blur(8.922223091125488px)",
                        }}
                      >
                        {/* Icon */}
                        <img
                          src={items.icon}
                          className="w-[98.144px] h-[98.144px]"
                          alt={items.title}
                        />

                        <h4 className="text-center text_gradient mt-[36px]">
                          {items.title}
                        </h4>

                        <div
                          className="w-full h-[1px] mt-[18px] mb-[18px]"
                          style={{
                            background: "rgba(255, 255, 255, 0.10)",
                          }}
                        >
                          {" "}
                        </div>

                        <p className=""
                        dangerouslySetInnerHTML={{ __html: items.description }}
                        ></p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          className="absolute w-full h-full -bottom-3 left-0  "
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
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
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
                    </CarouselItem>
                  ))}
                </CarouselContent>

                

                {/* Mobile Navigation Arrows with Dots - Below carousel */}
              <div className="flex md:hidden justify-center gap-4 mt-8">
                <CarouselPrevious className="!static !transform-none h-10 w-10" />
                <CarouselNext className="!static !transform-none h-10 w-10" />
              </div>
              </Carousel>
            </div>

            {/* Bottom Decorative Element */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsSection;
