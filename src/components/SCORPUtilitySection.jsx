import sportsImg from "../assets/SCORPUtilitySection/scorp_u_img (1).webp"
import sportsImg_mob from "../assets/SCORPUtilitySection/scorp_u_img_mob (1).webp"

import sportsLogo1 from "../assets/SCORPUtilitySection/sports_logos (6).webp"
import sportsLogo2 from "../assets/SCORPUtilitySection/sports_logos (5).webp"
import sportsLogo3 from "../assets/SCORPUtilitySection/sports_logos (4).webp"
import sportsLogo4 from "../assets/SCORPUtilitySection/sports_logos (3).webp"
import sportsLogo5 from "../assets/SCORPUtilitySection/sports_logos (2).webp"
import sportsLogo6 from "../assets/SCORPUtilitySection/sports_logos (1).webp"
import gameImg from "../assets/SCORPUtilitySection/scorp_u_img (2).webp"
import gameImg_mob from "../assets/SCORPUtilitySection/scorp_u_img_mob (2).webp"
import gameLogo1 from "../assets/SCORPUtilitySection/game_logos (6).webp"
import gameLogo2 from "../assets/SCORPUtilitySection/game_logos (5).webp"
import gameLogo3 from "../assets/SCORPUtilitySection/game_logos (4).webp"
import gameLogo4 from "../assets/SCORPUtilitySection/game_logos (3).webp"
import gameLogo5 from "../assets/SCORPUtilitySection/game_logos (2).webp"
import gameLogo6 from "../assets/SCORPUtilitySection/game_logos (1).webp"


const SCORPUtilitySection = () => {


  return (
    <section className="relative w-full max-md:pt-0 py-20 px-4 md:px-16 overflow-hidden">
      <div className="relative max-w-[1280px] max-md:rounded-b-[10px] overflow-hidden md:rounded-[20px] SCORPUtility_bg w-[100%] mx-auto pb-[50px]  max-md:py-[48px]">
        {/* Section Heading */}
        <div className="md:px-[60px] max-md:px-[20px] max-md:mb-15 max-md:border-b max-md:border-[#ffffff73]">
          <div className="flex max-md:flex-col justify-between items-center relative">
            <div className="max-w-[600px] w-[100%] space-y-[34px]">
              <h2 className="md:text-start text-center">
                35+ Different <span className="faded_heading">Sports</span>
              </h2>
              <p className="max-md:text-center max-w-[380px]">SCORPION provides various sports betting opportunities, including football, tennis, American football, horse racing, basketball, golf, boxing, and MMA.</p>
              <button 
                onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#wallet");
                if (target) {
                  const yOffset = 20;
                  const y =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn-primary md:text-[20px] text-[16px] md:px-[51px] px-[31px] md:py-[19px] py-[12px]  max-md:min-w-[100%]">Buy $SCORP2.0</button>
            </div>
            <div className="md:min-h-[500px] min-h-[380px] max-md:pt-4"> 
              <img className="md:block hidden max-w-[636.797px] absolute w-[100%] right-0" src={sportsImg} alt=" 35+ Different Sports" />
                  <img className="md:hidden block max-w-[330.797px] absolute w-[100%] right-0" src={sportsImg_mob} alt=" 35+ Different Sports" />
            </div>
          </div>
            <div className="flex max-md:grid max-md:grid-cols-3 max-md:gap-y-[20px] justify-between items-center space-x-4 mb-14 md:mb-20">
              <img src={sportsLogo1} className="md:w-[119.619px] mx-auto w-[60px] h-[24px] md:h-[41.339px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo2} className="md:w-[75.642px] mx-auto w-[36.134px] h-[50px] md:h-[104.667px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo3} className="md:w-[100.269px] mx-auto w-[52.778px] h-[50px] md:h-[94.992px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo4} className="md:w-[102.908px] mx-auto w-[60px] h-[29px] md:h-[58.93px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo5} className="md:w-[123.138px] mx-auto w-[62.03px] h-[37.661px] md:h-[74.762px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo6} className="md:w-[144.247px] mx-auto w-[72.664px] h-[31.458px] md:h-[62.448px]" alt="35+ Different sports Logo" />
            </div>
        </div>

        {/* Utility Cards Grid */}
        <div className="md:px-[60px] max-md:px-[20px]">
          <div className="flex md:-mt-5 max-md:flex-col  md:justify-between md:items-center relative">
            <div className="md:min-h-[604.889px] max-md:relative min-h-[380px]">
              <img src={gameImg} className="md:block hidden max-w-[810.24px] absolute -left-[18%] md:-bottom-9 -bottom-0 w-[100%]" alt=" 200+ Casino  Games" />
               <img src={gameImg_mob} className="md:hidden block max-w-[326.24px] absolute -left-[8%] top-[-4%] w-[100%]" alt=" 200+ Casino  Games" />
            </div>
            <div className="max-w-[600px] max-md:flex max-md:flex-col max-md:items-center w-[100%] space-y-[34px]">
              <h2 className="md:text-start max-md:text-center">
                200+ Casino  <span className="faded_heading">Games</span>
              </h2>
              <p className="max-md:text-center max-w-[335px] md:max-w-[380px]">SCORPION offers a complete online casino with over 200+ games from all major game providers. Casino games include slots, blackjack, roulette, poker, live casino, and more.</p>
              <button 
                onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#wallet");
                if (target) {
                  const yOffset = 20;
                  const y =
                    target.getBoundingClientRect().top +
                    window.scrollY +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn-primary md:px-[51px] max-md:min-w-[100%] px-[31px] md:py-[19px] py-[12px] text-[16px] md:text-[20px]">Buy $SCORP2.0</button>
            </div>
          </div>
            <div className="md:flex md:justify-between max-md:mt-12 md:items-center max-md:grid max-md:grid-cols-3 max-md:gap-y-[20px] md:space-x-4">
              <img src={gameLogo1}  className="md:w-[189.984px] w-[90px] h-[15.328px] mx-auto md:h-[34.303px]" alt="200+ Casino Games logos" />
              <img src={gameLogo2} className="md:w-[201.418px] w-[76.291px] h-[23.705px] mx-auto md:h-[45.737px]" alt="200+ Casino Games logos" />
              <img src={gameLogo3} className="md:w-[138.398px] w-[75.955px] h-[30.112px] mx-auto md:h-[43.002px]" alt="200+ Casino Games logos" />
              <img src={gameLogo4} className="md:w-[147.105px] w-[90px] h-[24px] mx-auto md:h-[38.261px]" alt="200+ Casino Games logos" />
              <img src={gameLogo5} className="md:w-[148.645px] w-[81.091px] mx-auto h-[21.091px] md:h-[58.93px]" alt="200+ Casino Games logos" />
              <img src={gameLogo6} className="md:w-[154.801px] w-[79.101px] mx-auto h-[34.157px] md:h-[66.846px]" alt="200+ Casino Games logos" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default SCORPUtilitySection;
