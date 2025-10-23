import pressRelease1 from "../assets/press_release/press_release_c1.webp";
import pressRelease2 from "../assets/press_release/press_release_c2.webp";
import pressRelease3 from "../assets/press_release/press_release_c3.webp";
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
      image: "/press-release-4.jpg",
      title: "Priceless Ethereum Opportunity and $SCORP",
      excerpt:
        "The cryptocurrency market is booming as more investors pile into the space for solid solutions...",
      link: "#",
    },
  ];

  const articlesData = articles || defaultArticles;

  return (
    <section className="w-full bg-[bg-[#0B0D10]] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Press </span>
            <span className="text_gradient">Release</span>
          </h2>
          <p className="text-[#ffffff]">
            Latest articles and updates about SCORP2.0
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-12 md:px-16">
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
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <a href={article.link} className="block group">
                    <div className="rounded-xl relative bg-[#1A1B1F] border border-white/10 overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <img
                        src={whiteGbg}
                        alt="white gbg"
                        className="absolute top-0 left-0 w-full h-full z-0"
                      />
                      <div class="absolute bottom-0  w-[359px] h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover "
                        />
                      </div>

                      {/* Text Content */}
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <h6 className="text-left mb-3">{article.title}</h6>
                        <p className="text-[#CACACA] flex-1 line-clamp-4">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Optional: Pagination dots could be added here */}
      </div>
    </section>
  );
};

export default PressReleaseSection;
