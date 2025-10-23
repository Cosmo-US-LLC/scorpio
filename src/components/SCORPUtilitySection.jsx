import sportsImg from "../assets/SCORPUtilitySection/scorp_u_img (1).webp"
import sportsLogo1 from "../assets/SCORPUtilitySection/sports_logos (6).webp"
import sportsLogo2 from "../assets/SCORPUtilitySection/sports_logos (5).webp"
import sportsLogo3 from "../assets/SCORPUtilitySection/sports_logos (4).webp"
import sportsLogo4 from "../assets/SCORPUtilitySection/sports_logos (3).webp"
import sportsLogo5 from "../assets/SCORPUtilitySection/sports_logos (2).webp"
import sportsLogo6 from "../assets/SCORPUtilitySection/sports_logos (1).webp"
import gameImg from "../assets/SCORPUtilitySection/scorp_u_img (2).webp"
import gameLogo1 from "../assets/SCORPUtilitySection/game_logos (6).webp"
import gameLogo2 from "../assets/SCORPUtilitySection/game_logos (5).webp"
import gameLogo3 from "../assets/SCORPUtilitySection/game_logos (4).webp"
import gameLogo4 from "../assets/SCORPUtilitySection/game_logos (3).webp"
import gameLogo5 from "../assets/SCORPUtilitySection/game_logos (2).webp"
import gameLogo6 from "../assets/SCORPUtilitySection/game_logos (1).webp"


const SCORPUtilitySection = () => {


  return (
    <section className="relative w-full  py-20 px-6 md:px-16 overflow-hidden">
      <div className="relative max-w-[1280px] overflow-hidden rounded-[20px] SCORPUtility_bg w-[100%] mx-auto pb-[50px] px-[60px] ">
        {/* Section Heading */}
        <div className="">
          <div className="flex justify-between items-center relative">
            <div className="max-w-[600px] w-[100%] space-y-[34px]">
              <h2 className="text-start">
                35+ Different <span>Sports</span>
              </h2>
              <p>Scorpion Casino provides various sports betting opportunities, including football, tennis, American football, horse racing, basketball, golf, boxing,  and MMA.</p>
              <button className="btn-primary text-[20px] px-[51px] py-[19px]">Buy $SCORP2.0</button>
            </div>
            <div className="min-h-[500px]">
              <img className="max-w-[636.797px] absolute w-[100%] right-0" src={sportsImg} alt=" 35+ Different Sports" />
            </div>
          </div>
            <div className="flex justify-between items-center space-x-4 mb-20">
              <img src={sportsLogo1} className="w-[119.619px] h-[41.339px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo2} className="w-[75.642px] h-[104.667px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo3} className="w-[100.269px] h-[94.992px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo4} className="w-[102.908px] h-[58.93px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo5} className="w-[123.138px] h-[74.762px]" alt="35+ Different sports Logo" />
              <img src={sportsLogo6} className="w-[144.247px] h-[62.448px]" alt="35+ Different sports Logo" />
            </div>
        </div>

        {/* Utility Cards Grid */}
        <div className="">
          <div className="flex -mt-5 justify-between items-center relative">
            <div className="min-h-[604.889px]">
              <img src={gameImg} className="max-w-[810.24px] absolute -left-[18%] -bottom-9 w-[100%]" alt=" 200+ Casino  Games" />
            </div>
            <div className="max-w-[600px] w-[100%] space-y-[34px]">
              <h2 className="text-start">
                200+ Casino  <span>Games</span>
              </h2>
              <p>Scorpion Casino offers a complete online casino with over 200+ games from all major game providers. Casino games include slots, blackjack, roulette, poker, live casino, and more.</p>
              <button className="btn-primary px-[51px] py-[19px] text-[20px]">Buy $SCORP2.0</button>
            </div>
          </div>
            <div className="flex justify-between items-center space-x-4">
              <img src={gameLogo1}  className="w-[189.984px] h-[34.303px]" alt="200+ Casino Games logos" />
              <img src={gameLogo2} className="w-[201.418px] h-[45.737px]" alt="200+ Casino Games logos" />
              <img src={gameLogo3} className="w-[138.398px] h-[43.002px]" alt="200+ Casino Games logos" />
              <img src={gameLogo4} className="w-[147.105px] h-[38.261px]" alt="200+ Casino Games logos" />
              <img src={gameLogo5} className="w-[148.645px] h-[58.93px]" alt="200+ Casino Games logos" />
              <img src={gameLogo6} className="w-[154.801px] h-[66.846px]" alt="200+ Casino Games logos" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default SCORPUtilitySection;
