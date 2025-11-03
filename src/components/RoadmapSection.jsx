
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import card_icon1 from "../assets/Roadmap/road_card (4).webp";
import card_icon2 from "../assets/Roadmap/road_card (3).webp";
import card_icon3 from "../assets/Roadmap/road_card (2).webp";
import card_icon4 from "../assets/Roadmap/road_card (1).webp";
import tick from "../assets/Roadmap/tick.webp";

const RoadmapSection = ({ phases }) => {
 
  const defaultPhases = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Preparation",
      icon: card_icon1,
      tasks: [
        { text: "Idea conception", completed: true },
        { text: "Team onboarding", completed: true },
        { text: "Integrating Coinspaid", completed: true },
        { text: "Developing the Ecosystem", completed: true },
        { text: "Applying for an eGambling License", completed: true },
      ],
      status: "completed",
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Pre-Launch",
      icon: card_icon2,
      tasks: [
        { text: "$SCORP Token creation", completed: true },
        { text: "Whitepaper Release", completed: true },
        { text: "Integrating Betradar", completed: true },
        { text: "Scorpion.casino Release", completed: true },
        { text: "$SCORP Token Audit", completed: true },
        { text: "Pre Sale start", completed: true },
      ],
      status: "completed",
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Launch",
      icon: card_icon3,
      tasks: [
        { text: "Launching Affiliate Program", completed: true },
        { text: "Integrating the Level System", completed: true },
        { text: "Listing on CEX", completed: true },
        { text: "Further Casino Development", completed: true },
        { text: "Community Events", completed: true },
      ],
      status: "current",
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Exponential growth",
      icon: card_icon4,
      tasks: [
        { text: "Live Affiliate Events", completed: false },
        { text: "Partner Up with Softswiss", completed: false },
        { text: "Influencer Marketing", completed: false },
        { text: "Collaborations with Athletes", completed: false },
        { text: "More to come", completed: false },
      ],
      status: "upcoming",
    },
  ];

  const phasesData = phases || defaultPhases;

 

  const getStatusBadge = (status) => {
    const badges = {
      completed: (
        <span
          className="rounded-[89.222px] px-3 sm:px-4 md:px-[20px] py-2 md:py-[10px] text-xs sm:text-sm md:text-base"
          style={{
            border: "0.892px solid rgba(255, 255, 255, 0.12)",
            background: "rgba(255, 253, 253, 0.02)",
            boxShadow: "0 1.784px 8.922px 0 rgba(255, 255, 255, 0.20) inset",
          }}
        >
          Completed
        </span>
      ),
      current: (
        <span
          className="rounded-[89.222px] px-3 sm:px-4 md:px-[20px] py-2 md:py-[10px] text-xs sm:text-sm md:text-base"
          style={{
            border: "0.892px solid rgba(255, 255, 255, 0.12)",
            background:
              "linear-gradient(90deg, rgba(249, 242, 149, 0.20) 5.47%, rgba(224, 170, 62, 0.20) 38.55%, rgba(249, 242, 149, 0.20) 69.43%, rgba(184, 138, 68, 0.20) 97.22%)",
            boxShadow:
              "0 -1.442px 2.884px 0 #F5E99C inset, 0 1.442px 2.884px 0 #F5E99C inset",
          }}
        >
          Current Phase
        </span>
      ),
      upcoming: (
        <span
          className="px-3 sm:px-4 md:px-[20px] py-2 md:py-[10px] rounded-[89.222px] text-xs sm:text-sm md:text-base"
          style={{
            border: "0.892px solid rgba(255, 255, 255, 0.12)",
            background:
              "linear-gradient(90deg, rgba(249, 242, 149, 0.20) 5.47%, rgba(224, 170, 62, 0.20) 38.55%, rgba(249, 242, 149, 0.20) 69.43%, rgba(184, 138, 68, 0.20) 97.22%)",
            boxShadow:
              "0 -1.442px 2.884px 0 #F5E99C inset, 0 1.442px 2.884px 0 #F5E99C inset",
          }}
        >
          Coming Soon
        </span>
      ),
    };
    return badges[status] || badges.upcoming;
  };

  return (
    <section className="relative w-full max-md:pt-4 py-0 md:py-16 px-4 md:px-6 lg:px-12 Roadmap_bg">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-center">Roadmap</h2>
          <p className="text-sm md:text-base">
            This is the official Scorpion Casino Roadmap
          </p>
        </div>

        <div className="relative px-0 sm:px-4 md:px-12">
          <Carousel
            opts={{
             align: "start",
                loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {phasesData.map((phase) => (
                <CarouselItem
                  key={phase.id}
                  className="pl-4 md:pl-6 basis-full rounded-[16.067px] sm:basis-1/2 lg:basis-[28%] xl:basis-[28%]"
                >
                  <div className="h-full relative">
                    <div
                      className=" rounded-[16.067px] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full"
                      style={{
                        border: "0.803px solid rgba(255, 255, 255, 0.10)",
                        background: "rgba(27, 26, 22, 0.40)",
                        backdropFilter: "blur(8.033333778381348px)",
                      }}
                    >
                      <div className="">
                        <img
                          className="mb-3 md:mb-4 max-w-[70px] sm:max-w-[80px] md:max-w-[88.367px]"
                          src={phase.icon}
                          alt={phase.title}
                        />
                        <h6 className="text_gradient text-sm md:text-base">
                          {phase.phase}
                        </h6>

                        <h4 className="uppercase text-start text_gradient text-base md:text-lg">
                          {phase.title}
                        </h4>
                      </div>
                      <div className="h-px bg-[#36383F] w-full mt-2 md:mt-3 mb-2 md:mb-3"></div>

                      <div className="flex-1 mb-4 md:mb-6">
                        <ul className="space-y-1 md:space-y-1">
                          {phase.tasks.map((task, index) => (
                            <li key={index} className="flex items-start py-1 gap-x-3">
                              {task.completed ? (
                                <>
                                  <img
                                    src={tick}
                                    className="w-[15.289px]"
                                    alt="crypto casino"
                                  />
                                </>
                              ) : (
                                <div
                                  className="w-[15.289px] h-[15.289px]"
                                  style={{
                                    borderRadius: "3.058px",
                                    border:
                                      "0.764px solid rgba(255, 255, 255, 0.20)",
                                    background: "#313133",
                                  }}
                                ></div>
                              )}
                              <p className="text-[16px] sm:text-sm text-[#D1D5DB] leading-[100%]">
                                {task.text}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-center sm:justify-end">
                        {getStatusBadge(phase.status)}
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="absolute w-full h-full  left-0  "
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
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />

            {/* Mobile Navigation Arrows with Dots - Below carousel */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="static! transform-none! h-10 w-10" />
              <CarouselNext className="static! transform-none! h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
