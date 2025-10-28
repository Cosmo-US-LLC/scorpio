import staking_rewards_img from "../assets/stakingrewards/staking_rewards.webp";
import vect_1 from "../assets/stakingrewards/vect_1.webp";
import vect_2 from "../assets/stakingrewards/vect_2.webp";
import vect_1_mob from "../assets/stakingrewards/vect_1_mob.webp";

const StakingRewardsSection = () => {
  return (
    <section className="relative   w-full pb-16 max-md:pt-0 py-10 px-4 md:px-16 ">
    

      <div className="relative staking_rewards_bg max-md:px-[20px] max-md:py-[30px]  md:px-[60px] md:py-[40px] overflow-hidden max-w-[1280px] mx-auto max-md:rounded-[16px]">
            <img src={vect_2}  className="max-w-[155.777px] z-[9] md:block hidden -right-6 absolute -bottom-12" alt="Staking Rewards" />
        <div className="flex max-md:flex-col justify-between items-center gap-15 lg:gap-16">
         
          <div className=" relative">
           <img src={staking_rewards_img} className="max-w-[338px]" alt="Staking Rewards" />
           <img src={vect_1}  className="max-w-[538px] hidden md:block -left-33 absolute -top-26" alt="Staking Rewards" />
           <img src={vect_1_mob}  className="max-w-[440px] block md:hidden -left-18 absolute -top-10" alt="Staking Rewards" />
          </div>

          {/* Right Column - Text Content */}
          <div className="  max-md:flex max-md:flex-col max-md:items-center max-w-[611px] w-[100%]">
            {/* Heading */}
            <div className=" mb-[31px]">
              <h2 className="md:text-start text-center capitalize">
               Daily staking rewards <span className="faded_heading">are live now</span> 
              </h2>
            </div>

            {/* Description */}
            <p className="mb-[31px] md:text-start text-center">
           Get paid every day even during the pre-sale based on the amount of $SCORP2.0 you hold. The faster you buy $SCORP2.0 tokens and the more you acquire, the higher your rewards (in USDT and $SCORP2.0) will grow over time. Don’t miss this opportunity to be one of the first  to enjoy truly passive staking income.
            </p>

            {/* CTA Button */}
            <button className="btn-primary px-[40px] py-[16px] text-[20px]">
              Buy $SCORP2.0
            </button>

          </div>
        </div>
      </div>

    
    </section>
  );
};

export default StakingRewardsSection;
