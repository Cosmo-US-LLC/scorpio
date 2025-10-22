import pressRelease1 from "../assets/press_release/press_release_c1.webp";
import pressRelease2 from "../assets/press_release/press_release_c2.webp";
import pressRelease3 from "../assets/press_release/press_release_c3.webp";
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
        "Scorpion Casino: The Crypto-Based Gambling Revolution that's Taking Hold of Crypto With One Day to Go",
      excerpt:
        "This gaming-related project's inviting atmosphere and excellent rewards make it a standout success. As such, many analysts think it could be the next billion-dollar crypto...",
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
    <section className="w-full bg-linear-to-b from-black to-[#121212] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto rounded-2xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-white">Press </span>
            <span className="bg-linear-to-r from-[#F7D774] to-[#F3B74E] bg-clip-text text-transparent">
              Release
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
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
                    <div className="rounded-xl bg-[#1A1B1F] border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#F7D774]/20 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                                <svg class="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                                </svg>
                              </div>
                            `;
                          }}
                        />
                      </div>

                      {/* Text Content */}
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <h3 className="text-base md:text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#F7D774] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-3 flex-1">
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
