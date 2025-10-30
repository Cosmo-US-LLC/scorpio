import pressRelease1 from "../assets/press_release/press_release_c1.webp";
import pressRelease2 from "../assets/press_release/press_release_c2.webp";
import pressRelease3 from "../assets/press_release/press_release_c3.webp";
import pressRelease4 from "../assets/press_release/press_release_c4.webp";
import whiteGbg from "../assets/scorpion_casino/white_gbg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PressReleaseSection = ({ articles }) => {
  // Default press release articles
  const defaultArticles = [
    {
      id: 1,
      image: pressRelease1,
      title:
        "Scorpion Casino: The Crypto-Based Gambling Revolution that’s Taking Hold of Crypto With One Day to Go",
      excerpt:
        "This gaming-related project’s inviting atmosphere and excellent rewards make it asuccess. As such, many analysts think it could be the next billion-dollar crypto.",
      link: "#",
    },
    {
      id: 2,
      image: pressRelease2,
      title:
        "Scorpion Casino is The Ultimate Destination for Licensed and Regulated Online Gambling",
      excerpt:
        "Scorpion Casino (SCORP) has emerged to become one of the top destinations for online gambling, casino games, sports betting...",
      link: "#",
    },
    {
      id: 3,
      image: pressRelease3,
      title:
        "Could Scorpion Casino Token Dethrone Dogecoin? Unlocking Daily Earnings of $10,000 and...",
      excerpt:
        "Scorpion's growing reputation and diverse earning opportunities mean it is a serious rival to Dogecoin in the crypto market.",
      link: "#",
    },
    {
      id: 4,
      image: pressRelease4,
      title: "Priceless Ethereum Opportunity and $SCORP",
      excerpt:
        "The cryptocurrency market is booming as more investors pile into the space for solid solutions...",
      link: "#",
    },
  ];

  const articlesData = articles || defaultArticles;

  return (
    <section className="w-full   bg-[#0B0D10] py-12 md:py-16 px-4 md:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto rounded-2xl">
        {/* Heading */}
        <div className="text-center relative z-[1] mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Press </span>
            <span className="text_gradient">Release</span>
          </h2>
          <p className="text-[#ffffff]">
            Latest articles and updates about SCORP2.0
          </p>
        </div>

        {/* Carousel */}
        <div className="space-y-6">
          <div className="relative px-4 md:px-12 lg:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {articlesData.map((article) => (
                  <CarouselItem
                    key={article.id}
                    className="pl-4 basis-full  md:basis-1/2 lg:basis-1/3"
                  >
                    <a href={article.link} className="block group">
                      <div className="rounded-xl relative bg-[#1A1B1F] border border-white/10 overflow-hidden h-full  flex flex-col min-h-[370px]">
                        <img
                          src={whiteGbg}
                          alt="white gbg"
                          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                        />
                        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
                        <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] z-10">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col relative z-10">
                          <h6 className="text-left mb-2 md:mb-3 line-clamp-3">
                            {article.title}
                          </h6>
                          <p className="text-[#CACACA] flex-1 line-clamp-3 md:line-clamp-4 text-sm md:text-base">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />

              <div className="flex md:hidden justify-center gap-4 mt-8">
                <CarouselPrevious className="!static !transform-none h-10 w-10" />
                <CarouselNext className="!static !transform-none h-10 w-10" />
              </div>
            </Carousel>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PressReleaseSection;
