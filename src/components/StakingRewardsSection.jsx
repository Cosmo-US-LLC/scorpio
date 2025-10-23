import staking_rewards_img from "../assets/stakingrewards/staking_rewards.webp";
import vect_1 from "../assets/stakingrewards/vect_1.webp";

const StakingRewardsSection = () => {
  return (
    <section className="relative   w-full pb-16 py-10 px-6 md:px-16 ">
    

      <div className="relative staking_rewards_bg px-[60px] py-[40px] overflow-hidden max-w-[1280px] mx-auto ">
        <div className="flex justify-between items-center gap-10 lg:gap-16">
         
          <div className=" relative">
           <img src={staking_rewards_img} className="max-w-[338px]" alt="Staking Rewards" />
           <img src={vect_1}  className="max-w-[538px] -left-33 absolute -top-26" alt="Staking Rewards" />
          </div>

          {/* Right Column - Text Content */}
          <div className=" text-start max-w-[611px] w-[100%]">
            {/* Heading */}
            <div className=" mb-[31px]">
              <h2 className="text-start capitalize">
               Daily staking rewards <span className="faded">are live now</span> 
              </h2>
            </div>

            {/* Description */}
            <p className="mb-[31px]">
              Get paid every day even during the pre-sale based on the amount of
              $SCORP2.0 you hold. The faster you buy, $SCORP2.0 tokens will
              unlock your passive staking rewards. Payments are made in USDT,
              and the rewards will grow over time. Don't miss this opportunity
              to be one of the first to enjoy truly passive staking income.
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
