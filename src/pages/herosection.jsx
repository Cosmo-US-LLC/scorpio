import React from "react";
import auditedLogo from "../assets/herosection/Audited.webp";
import licensedLogo from "../assets/herosection/Licensed.webp";
import poster from "../assets/herosection/poster.webp";
import vector1 from "../assets/herosection/scorpion_vec.webp";
import vector2 from "../assets/herosection/scorpion_vec2.webp";
import vector3 from "../assets/herosection/scorpion_vec3.webp";
import vector4 from "../assets/herosection/scorpion_vec4.webp";
import solid from "../assets/herosection/solid.png";
import Video from "../assets/herosection/course-video2.1b5cb8ac835162be39a6 (1).mp4";
import social_1 from "../assets/herosection/social (5).svg";
import social_2 from "../assets/herosection/social (2).svg";
import social_3 from "../assets/herosection/social (3).svg";
import social_4 from "../assets/herosection/social (1).svg";
import social_5 from "../assets/herosection/social (4).svg";
import { Toaster, toast } from "react-hot-toast";

import Wallet from "../components/wallet";

function Herosection() {
  const handleCopy = (e) => {
    e.preventDefault();
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success("Link copied!");
  };
  return (
    <div
      id="wallet"
      className=" pt-[100px] md:pt-[114px] pb-[160px] max-w-[1280px] w-full mx-auto md:px-0 max-md:px-4 h-full bg_herosection relative"
    >
      <div
        className="absolute max-md:top-[60px] z-[0] md:right-[0%] md:top-[100px]"
        style={{
          width: "902px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          zIndex: 0,
        }}
      ></div>
      <div className="max-md:block relative z-[1] md:flex max-md:space-y-[47px] justify-between items-start w-[100%]">
        <div className="max-w-[745px] space-y-[20px] w-full pt-1">
          <h3 className="text_gradient text-start mob_br !text-[16px] !font-[700]">
            FAST-GROWING CASINO REVEALS <br /> NEW 2.0 TOKEN WITH SHOCKING REWARDS
          </h3>
          <h1 className="md:max-w-[645px]">
            $SCORP2.0 <span className="faded"> is providing </span> daily
            rewards <span className="faded"> to </span> holders{" "}
            <span className="faded"> based on its </span> casino’s performance{" "}
          </h1>
          <p className="max-w-[559px] md:pr-5 mob_br max-md:!text-[13px]">
            Start earning today and receive up to 10,000 USDT <br /> in daily passive
            staking income from a licensed and regulated global Casino and
            Betting Platform, no matter the market conditions.
          </p>
          <div className="flex items-center pt-2 max-md:space-x-[15px] md:space-x-[34px]">
            <div className="space-y-[10px]">
              <p className="text-[#fff] max-md:!text-[13px] !font-[600]">
                Audited by
              </p>
              <img
                src={auditedLogo}
                className="max-md:max-w-[152.618px] md:max-h-[43.321px]"
                alt="Audited by"
              />
            </div>
            <div className="space-y-[10px]">
              <p className="text-[#fff] max-md:!text-[13px] !font-[600]">
                Licensed & Regulated by
              </p>
              <img
                src={licensedLogo}
                className="max-md:max-w-[156.837px] max-h-[43.321px]"
                alt="Licensed"
              />
            </div>
          </div>
          <div className="md:flex hidden items-center  space-x-2 pt-2 md:pt-6 md:space-x-3">
            <h5 className="underline max-md:!text-[12px] !font-[700]">
              Audited & KYC | 100% Secure & Verified
            </h5>
            <img
              src={solid}
              className="max-w-[78px] md:max-w-[160px] mb-1"
              alt="solid"
            />
          </div>
          <div className="pt-4 md:pt-0">
            {/* <video src=""></video> */}
             <video
          autoPlay
          loop
          muted
          playsInline
          controls={true}
          className="w-full h-full max-w-[685px] rounded-[8px] object-cover"
          style={{ objectFit: "", objectPosition: "" }}
        >
          <source
            src={Video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
          </div>
        </div>
        {/* <img src={vector3} className="  absolute max-w-[30px] md:max-w-[53.203px] md:right-[38.5%] right-[18%] z-[4] top-[9%] md:top-[1%]" alt="SCORP2" />
           <img src={vector3} className="  absolute max-w-[25px] md:max-w-[33.203px] right-[3%] md:right-[37.5%] z-[4] md:top-[12%] top-[26%]" alt="SCORP2" />
            <img src={vector4} className="  absolute max-w-[20px] md:max-w-[27.907px] right-[7%] md:right-[43.5%] z-[4] md:top-[-3%] top-[10%]" alt="SCORP2" />
             <img src={vector3} className="max-md:hidden  absolute max-w-[43.203px] left-[31.5%] z-[4] top-[51%]" alt="SCORP2" />
            <img src={vector4} className="max-md:hidden  absolute max-w-[27.907px] right-[58.5%] z-[4] top-[50%]" alt="SCORP2" />
             <img src={vector3} className="max-md:hidden  absolute max-w-[33.203px] right-[46%] z-[4] top-[65%]" alt="SCORP2" />
            <img src={vector4} className="max-md:hidden  absolute max-w-[27.907px] right-[42.5%] z-[4] top-[60%]" alt="SCORP2" /> */}
        <img
          src={vector1}
          className="max-md:hidden  absolute max-w-[350.368px] right-[36.5%] z-[4] top-[18%]"
          alt="SCORP2"
        />
        <img
          src={vector2}
          className="absolute max-md:hidden max-w-[109.584px] right-[36%] z-[4] bottom-[15%]"
          alt="SCORP2"
        />

        <div className="max-w-[448px] w-full min-h-[600px]">
          <div className="max-md:hidden flex justify-end space-x-4 relative z-[9] pb-4">
            <div>
              <a
                href="#"
                onClick={handleCopy}
                className="inline-flex items-center justify-center"
              >
                <img className="h-[24px]" src={social_1} alt="Copy Link" />
              </a>

              <Toaster
                position="top-right"
                className="relative z-[999]"
                toastOptions={{
                  style: {
                    background: "#111",
                    color: "#fff",
                    fontSize: "14px",
                    borderRadius: "8px",
                    position: "",
                    zIndex: 9999,
                  },
                }}
              />
            </div>
            <a
              href="https://linkin.bio/scorpioncasino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[24px]" src={social_2} alt="" />
            </a>
            <a
              href="https://x.com/ScorpionCasino"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[24px]" src={social_3} alt="" />
            </a>
            <a
              href="https://t.me/scorpioncasino_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[24px]" src={social_4} alt="" />
            </a>
            <a
              href="https://www.instagram.com/scorpion.casino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="h-[24px]" src={social_5} alt="" />
            </a>
          </div>
          <Wallet />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
