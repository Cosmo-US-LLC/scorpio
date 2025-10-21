import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CheckCircle,
  Circle,
  Target,
  Rocket,
  Award,
  Users,
} from "lucide-react";

const RoadmapSection = ({ phases }) => {
  // Default roadmap phases data
  const defaultPhases = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Foundation",
      icon: "target",
      tasks: [
        { text: "Smart Contract Development", completed: true },
        { text: "Website Launch", completed: true },
        { text: "Community Building", completed: true },
        { text: "Initial Marketing Campaign", completed: true },
      ],
      status: "completed",
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Pre-Sale",
      icon: "rocket",
      tasks: [
        { text: "Token Pre-Sale Launch", completed: true },
        { text: "Partnership Announcements", completed: true },
        { text: "Influencer Marketing", completed: true },
        { text: "Security Audits", completed: true },
      ],
      status: "completed",
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Platform Launch",
      icon: "award",
      tasks: [
        { text: "Casino Platform Beta", completed: true },
        { text: "Token Listing on DEX", completed: true },
        { text: "Staking Mechanism Live", completed: false },
        { text: "Mobile App Development", completed: false },
      ],
      status: "current",
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "Expansion",
      icon: "users",
      tasks: [
        { text: "Major CEX Listings", completed: false },
        { text: "Global Marketing Push", completed: false },
        { text: "Additional Game Integration", completed: false },
        { text: "Strategic Partnerships", completed: false },
      ],
      status: "upcoming",
    },
  ];

  const phasesData = phases || defaultPhases;

  const getIcon = (iconName) => {
    const icons = {
      target: Target,
      rocket: Rocket,
      award: Award,
      users: Users,
    };
    const IconComponent = icons[iconName] || Target;
    return <IconComponent className="w-8 h-8 text-[#F7D774]" />;
  };

  const getStatusBadge = (status) => {
    const badges = {
      completed: (
        <span className="px-4 py-2 rounded-full bg-gray-700/50 text-gray-400 text-xs font-medium">
          Completed
        </span>
      ),
      current: (
        <span className="px-4 py-2 rounded-full bg-linear-to-r from-[#F7D774] to-[#F3B74E] text-black text-xs font-bold">
          Current Phase
        </span>
      ),
      upcoming: (
        <span className="px-4 py-2 rounded-full bg-gray-800/50 text-gray-500 text-xs font-medium">
          Coming Soon
        </span>
      ),
    };
    return badges[status] || badges.upcoming;
  };

  return (
    <section className="relative w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-12 overflow-hidden">
      {/* Decorative Stars/Shine */}
      <svg
        className="absolute top-20 left-[10%] w-4 h-4 text-[#F7D774] opacity-40 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute top-1/3 right-[8%] w-3 h-3 text-[#d4af37] opacity-35 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>
      <svg
        className="absolute bottom-1/4 left-[5%] w-5 h-5 text-[#F7D774] opacity-30 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Heading Block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Roadmap
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Our journey to revolutionize the crypto casino industry
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-0 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {phasesData.map((phase) => (
                <CarouselItem
                  key={phase.id}
                  className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <div className="group rounded-2xl bg-linear-to-b from-[#1a1b20] to-[#0f0f14] border border-white/10 p-6 flex flex-col justify-between h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#F7D774]/20">
                      {/* Header */}
                      <div className="mb-6">
                        {/* Icon */}
                        <div className="mb-4">{getIcon(phase.icon)}</div>

                        {/* Phase Number */}
                        <p className="text-xs text-gray-500 font-medium mb-2">
                          {phase.phase}
                        </p>

                        {/* Phase Title */}
                        <h3 className="text-xl font-bold uppercase text-[#F7D774] tracking-wide">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Checklist */}
                      <div className="flex-1 mb-6">
                        <ul className="space-y-3">
                          {phase.tasks.map((task, index) => (
                            <li key={index} className="flex items-start gap-3">
                              {task.completed ? (
                                <CheckCircle className="w-5 h-5 text-[#F7D774] shrink-0 mt-0.5" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                              )}
                              <span className="text-sm text-gray-300 leading-relaxed">
                                {task.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer - Status Badge */}
                      <div className="text-center pt-4 border-t border-white/5">
                        {getStatusBadge(phase.status)}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Hidden on Mobile */}
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
