import Featured1 from "../assets/Featured/Featured (12).svg"
import Featured2 from "../assets/Featured/Featured (11).svg"
import Featured3 from "../assets/Featured/Featured (10).svg"
import Featured4 from "../assets/Featured/Featured (9).svg"
import Featured5 from "../assets/Featured/Featured (8).svg"
import Featured6 from "../assets/Featured/Featured (7).svg"
import Featured7 from "../assets/Featured/Featured (6).svg"
import Featured8 from "../assets/Featured/Featured (5).svg"
import Featured9 from "../assets/Featured/Featured (4).svg"
import Featured10 from "../assets/Featured/Featured (3).svg"
import Featured11 from "../assets/Featured/Featured (2).svg"
import Featured12 from "../assets/Featured/Featured (1).svg"


const FeaturedInSection = () => {
  const publications = [
    { id: 1, name: "CoinMarketCap", logo: Featured1 },
    { id: 2, name: "Bitcoinist.net", logo: Featured2 },
    { id: 3, name: "Finanzen.net", logo: Featured3 },
    { id: 4, name: "Benzinga", logo: Featured4 },
    { id: 5, name: "Coincierge", logo: Featured5 },
    { id: 6, name: "NewsBTC", logo: Featured6 },
    { id: 7, name: "Cryptonews", logo: Featured7 },
    { id: 8, name: "Yahoo! Finance", logo: Featured8 },
    { id: 9, name: "Finbold", logo: Featured9 },
    { id: 10, name: "Cryptonaute", logo: Featured10 },
    { id: 11, name: "Washington CityPaper", logo: Featured11 },
    { id: 12, name: "Kryptoszene", logo: Featured12 },
  ];

  return (
    <section className="relative w-ful mt-[-40px]  pb-16 px-6 md:px-20 overflow-hidden">
    
      <div className="relative max-w-7xl mx-auto rounded-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-center"
          style={{
            color:"rgba(255, 255, 255, 0.50)"
          }}
          >
            Featured In
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-[24px] items-center justify-items-center">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="flex items-center justify-center w-full relative">
                <div className="flex flex-col items-center justify-center  gap-2  transition-all duration-300 group-hover:scale-105">
                  <img src={publication.logo} alt="" />
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
