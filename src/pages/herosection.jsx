import React from "react";
import auditedLogo from "../assets/herosection/Audited.webp";
import licensedLogo from "../assets/herosection/Licensed.webp";
import poster from "../assets/herosection/poster.webp";
import vector1 from "../assets/herosection/scorpion_vec.webp";
import vector2 from "../assets/herosection/scorpion_vec2.webp";

import Wallet from "../components/wallet";

function Herosection() {
  return (
    <div className=" pt-[130px] pb-[150px] max-w-[1280px] w-full mx-auto md:px-0 max-md:px-4 h-full bg_herosection relative">
     <div className="flex justify-between items-center w-[100%]">
        <div className="max-w-[745px] space-y-[30px] w-full">
            <h6 className="text_gradient">FAST-GROWING CASINO REVEALS NEW 2.0 TOKEN WITH SHOCKING REWARD SYSTEM</h6>
            <h1>$SCORP2.0 is providing <span className="faded">daily rewards</span> to holders based on its <span className="faded">casino’s performance</span> </h1>
            <p>Start earning today and receive up to 10,000 USDT in daily passive staking income from a licensed and regulated global Casino and Betting Platform, no matter the market conditions.</p>
            <div className="flex items-center space-x-[34px]">
                <div className="space-y-[10px]">
                 <p className="text-[#fff] !font-[600]">Audited by</p>  
                 <img src={auditedLogo} className="max-h-[43.321px]" alt="Audited by" /> 
                </div>
                <div className="space-y-[10px]">
                 <p className="text-[#fff] !font-[600]">Licensed and Regulated by</p>  
                 <img src={licensedLogo} className="max-h-[43.321px]" alt="Licensed" /> 
                </div>
            </div>
            <div>
                {/* <video src=""></video> */}
                <img src={poster} className="max-w-[698px]" alt="poster" />
            </div>
        </div>
        <img src={vector1} className="absolute max-w-[358.368px] right-[31.5%] z-[4] top-[31%]" alt="SCORP2" />
        <img src={vector2} className="absolute max-w-[109.584px] right-[36%] z-[4] bottom-[25%]" alt="SCORP2" />
        <div className="max-w-[448px] w-full min-h-[600px]">
            <Wallet />
        </div>
     </div>
    </div>
  );
}

export default Herosection;
