import React from "react";
import auditedLogo from "../assets/herosection/Audited.webp";
import licensedLogo from "../assets/herosection/Licensed.webp";
import poster from "../assets/herosection/poster.webp";
import vector1 from "../assets/herosection/scorpion_vec.webp";
import vector2 from "../assets/herosection/scorpion_vec2.webp";
import vector3 from "../assets/herosection/scorpion_vec3.webp";
import vector4 from "../assets/herosection/scorpion_vec4.webp";

import Wallet from "../components/wallet";

function Herosection() {
  return (
    <div className=" pt-[120px] pb-[160px] max-w-[1280px] w-full mx-auto md:px-0 max-md:px-4 h-full bg_herosection relative">
     <div className="max-md:block md:flex max-md:space-y-[47px] justify-between items-center w-[100%]">
        <div className="max-w-[745px] space-y-[20px] w-full">
            <h3 className="text_gradient text-[16px] !font-[700]">FAST-GROWING CASINO REVEALS NEW 2.0 TOKEN WITH SHOCKING REWARD SYSTEM</h3>
            <h1>$SCORP2.0 is providing <span className="faded">daily rewards</span> to holders based on its <span className="faded">casino’s performance</span> </h1>
            <p className="max-w-[559px] pr-5">Start earning today and receive up to 10,000 USDT in daily passive staking income from a licensed and regulated global Casino and Betting Platform, no matter the market conditions.</p>
            <div className="flex items-center max-md:space-x-[20px] md:space-x-[34px]">
                <div className="space-y-[10px]">
                 <p className="text-[#fff] !font-[600]">Audited by</p>  
                 <img src={auditedLogo} className="max-md:max-w-[122.618px] md:max-h-[43.321px]" alt="Audited by" /> 
                </div>
                <div className="space-y-[10px]">
                 <p className="text-[#fff] !font-[600]">Licensed and Regulated by</p>  
                 <img src={licensedLogo} className="max-md:max-w-[116.837px] max-h-[43.321px]" alt="Licensed" /> 
                </div>
            </div>
            <div className="pt-4">
                {/* <video src=""></video> */}
                <img src={poster} className="max-md:max-w-[100%] md:max-w-[642px] min-h-[369px] aspect-[698/429]" alt="poster" />
            </div>
        </div>
          <img src={vector3} className="max-md:hidden  absolute max-w-[43.203px] left-[31.5%] z-[4] top-[46%]" alt="SCORP2" />
            <img src={vector4} className="max-md:hidden  absolute max-w-[27.907px] right-[58.5%] z-[4] top-[45%]" alt="SCORP2" />
        <img src={vector1} className="max-md:hidden  absolute max-w-[358.368px] right-[31.5%] z-[4] top-[27%]" alt="SCORP2" />
        <img src={vector2} className="absolute max-md:hidden max-w-[109.584px] right-[36%] z-[4] bottom-[25%]" alt="SCORP2" />
        <div className="max-w-[448px] w-full min-h-[600px]">
            <Wallet />
        </div>
     </div>
    </div>
  );
}

export default Herosection;
