import Featured1 from "../assets/Featured/Featured (12).svg"
import Featured2 from "../assets/Featured/Featured (11).webp"
import Featured3 from "../assets/Featured/Featured (10).svg"
import Featured4 from "../assets/Featured/Featured (9).svg"
import Featured5 from "../assets/Featured/mob_icn (4).webp"
import Featured6 from "../assets/Featured/mob_icn (3).webp"
import Featured7 from "../assets/Featured/mob_icn (2).webp"
import Featured8 from "../assets/Featured/mob_icn (1).webp"
import Featured9 from "../assets/Featured/mob_icn (5).webp"
import Featured10 from "../assets/Featured/mob_icn (6).webp"
import Featured11 from "../assets/Featured/mob_icn (7).webp"
import Featured12 from "../assets/Featured/mob_icn (8).webp"




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
    <section className="relative w-ful md:mt-[-80px] mt-[-100px]  md:pb-16 px-4 md:px-16 ">
    <div
        className="absolute max-md:top-[60px] md:left-[30%] md:bottom-[200px]"
        style={{
          width: "662px",
          height: "216px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
      <div className="relative z-[9] max-w-[1280px] md:py-[48px] md:px-6 py-[20px] mx-auto rounded-2xl Featured_mobile max-md:p-4"
         style={{
                background: "rgba(27, 26, 22, 0.40)",
                border: "0.764px solid rgba(255, 255, 255, 0.10)",
                borderRadius: "16px",
                backdropFilter: "blur(8.922223091125488px)",
              }}
      >
        {/* Header */}
        <div className="text-center max-md:mb-8 md:mb-[28px]">
          <h2 className="text-center"
          >
            Featured In
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 max-md:gap-3 md:gap-8 md:gap-[24px] items-center justify-items-center">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="flex flex-col items-center justify-center "
            >
              <div className="flex items-center justify-center w-full relative">
                <div className="flex flex-col items-center  justify-center  gap-2 ">
                  <img src={publication.logo} className="max-md:object-cover" alt="" />
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
