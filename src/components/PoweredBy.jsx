import React from "react";
import evolution from "../assets/poweredBy/PB_1.svg";
import amatic from "../assets/poweredBy/PB_2.svg";
import betradar from "../assets/poweredBy/PB_3.svg";
import wazdan from "../assets/poweredBy/PB_4.svg";
import macaw from "../assets/poweredBy/PB_5.svg";
import habanero from "../assets/poweredBy/PB_6.svg";
import microgaming from "../assets/poweredBy/PB_7.svg";
import hacksawgaming from "../assets/poweredBy/PB_8.svg";
import evenbetgaming from "../assets/poweredBy/PB_9.svg";
import globalbet from "../assets/poweredBy/PB_10.svg";
import goldenrace from "../assets/poweredBy/PB_11.svg";
import spribe from "../assets/poweredBy/PB_12.svg";
import egt from "../assets/poweredBy/PB_13.svg";
import playngo from "../assets/poweredBy/PB_14.svg";
import netent from "../assets/poweredBy/PB_15.svg";
import novomatic from "../assets/poweredBy/PB_16.svg";

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
    <section className="w-full bg-[#000000] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading with gradient */}
        <h2 className="text-center mb-12 md:mb-16">
          <span className="bg-linear-to-r from-[#d4af37] to-white bg-clip-text text-transparent">
            Powered By
          </span>
        </h2>

        {/* Logos Container - Using Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[calc(50%-3rem)] sm:w-[calc(33.333%-3rem)] lg:w-[calc(25%-3rem)] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="h-12 flex items-center justify-center px-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-auto object-contain "
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
