import React from "react";
import evolution from "../assets/poweredBy/pb (1).webp";
import amatic from "../assets/poweredBy/pb (16).webp";
import betradar from "../assets/poweredBy/pb (15).webp";
import wazdan from "../assets/poweredBy/pb (14).webp";
import macaw from "../assets/poweredBy/pb (13).webp";
import habanero from "../assets/poweredBy/pb (12).webp";
import microgaming from "../assets/poweredBy/pb (11).webp";
import hacksawgaming from "../assets/poweredBy/pb (10).webp";
import evenbetgaming from "../assets/poweredBy/pb (9).webp";
import globalbet from "../assets/poweredBy/pb (8).webp";
import goldenrace from "../assets/poweredBy/pb (7).webp";
import spribe from "../assets/poweredBy/pb (6).webp";
import egt from "../assets/poweredBy/pb (5).webp";
import playngo from "../assets/poweredBy/pb (4).webp";
import netent from "../assets/poweredBy/pb (3).webp";
import novomatic from "../assets/poweredBy/pb (2).webp";

const PoweredBy = () => {
  const partners = [
    { name: "Evolution", logo: evolution },
    { name: "Amatic", logo: amatic },
    { name: "Betradar", logo: betradar },
    { name: "Wazdan", logo: wazdan },
    { name: "MACAW", logo: macaw },
    { name: "Habanero", logo: habanero },
    { name: "Microgaming", logo: microgaming },
    { name: "Hacksaw Gaming", logo: hacksawgaming },
    { name: "Even Bet Gaming", logo: evenbetgaming },
    { name: "Global Bet", logo: globalbet },
    { name: "Golden Race", logo: goldenrace },
    { name: "Spribe", logo: spribe },
    { name: "EGT", logo: egt },
    { name: "Play'n GO", logo: playngo },
    { name: "NetEnt", logo: netent },
    { name: "Novomatic", logo: novomatic },
  ];

  return (
    <section className="w-full bg-[#0B0D10] py-16 max-md:px-4">
      <div className="max-w-[1280px] rounded-[17.591px] mx-auto px-[20px] md:px-[56px] py-[50px]"
      style={{
        border:" 0.88px solid #414141d2",
        background:"rgba(18, 19, 31, 0.70)",
        backdropFilter:"blur(8.795538902282715px)"
      }}
      >
        {/* Heading with gradient */}
        <h2 className="text-center mb-4 md:mb-16">
          <span className="bg-linear-to-r from-[#d4af37] to-white bg-clip-text text-transparent">
            Powered By
          </span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-5  md:gap-x-12 md:gap-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[calc(24%-5px)] sm:w-[calc(33.333%-3rem)] lg:w-[calc(25%-3rem)] "
            >
              <div className="md:h-12 flex items-center justify-center ">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className=" object-contain "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
