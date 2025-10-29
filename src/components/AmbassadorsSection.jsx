import cokiSinger from "../assets/scorpion_casino/coki_singer.webp";
import tbaImage from "../assets/scorpion_casino/TBA_image.webp";
import whiteGbg from "../assets/scorpion_casino/white_gbg.png";
import imgtick from "../assets/scorpion_casino/image (2).webp";

const AmbassadorsSection = ({ ambassadors }) => {
  // Default ambassadors data
  const defaultAmbassadors = [
    {
      name: "COKI RAMIREZ",
      verified: true,
      avatar: cokiSinger,
      followers: "970.7k followers",
      description: "Famous Singer and Model",
      link: {
        text: "Official Announcement",
        url: "https://x.com/cokiramirez/status/1750980072952000736 ",
      },
    },
    {
      name: "TBA",
      verified: true,
      avatar: tbaImage,
      followers: "New Ambassador",
      description: "Will be announced soon",
      link: {
        text: "Coming Soon",
        url: "#",
      },
    },
  ];

  const ambassadorsData = ambassadors || defaultAmbassadors;

  return (
    <section className="relative bg-[#0B0D10] w-full overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto relative scorpion_gbg flex flex-col gap-8 md:gap-16 items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="">
            <span className="text-white">Scorpion Casino </span>
            <span className="text_gradient">Ambassadors</span>
          </h2>
        </div>

        {/* Ambassador Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {ambassadorsData.map((ambassador, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-5 sm:p-6 md:p-8 border border-white/10"
            >
              {/* Content Container */}
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Profile Image */}
                <div className="relative">
                  <div className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-2 ring-[#F7D774] ring-offset-2 ring-offset-black shadow-[0_0_20px_rgba(247,215,116,0.3)] overflow-hidden">
                    <img
                      src={ambassador.avatar}
                      alt={ambassador.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-linear-to-br from-[#F7D774] to-[#F3B74E] flex items-center justify-center">
                            <svg class="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Name with Verification Badge */}
                <div className="flex items-center gap-2 mt-4 mb-2">
                  <h4 className=" text_gradient  font-bold text-white uppercase tracking-wide">
                    {ambassador.name}
                  </h4>
                  
                  {ambassador.verified && (
                 <img src={imgtick} className="w-[20.86px]" alt="" />
                  )}
                </div>

                {/* Followers/Status */}
                <p className=" text-[#fff] mb-3">
                  {ambassador.followers}
                </p>

                {/* Description */}
                <p className=" md:text-base text-[#fff] mb-4">
                  {ambassador.description}
                </p>

                {/* CTA Link */}
                <a
                  href={ambassador.link.url}
                  className="text-[14px] text-[#fff] hover:text-[#E0AA3E] underline transition-colors duration-200  px-4 -mx-4"
                >
                  {ambassador.link.text}
                </a>
              </div>
              <img
                src={whiteGbg}
                alt="white gbg"
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
              <div class="absolute bottom-0  w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsSection;
