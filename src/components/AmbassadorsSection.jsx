import cokiSinger from "../assets/scorpion_casino/coki_singer.webp";
import tbaImage from "../assets/scorpion_casino/TBA_image.webp";
import whiteGbg from "../assets/scorpion_casino/white_gbg.png";

const AmbassadorsSection = ({ ambassadors }) => {
  // Default ambassadors data
  const defaultAmbassadors = [
    {
      name: "GOKI RAMIREZ",
      verified: true,
      avatar: cokiSinger,
      followers: "@10.7k followers",
      description: "Famous Singer and Model",
      link: {
        text: "Official Announcement",
        url: "#",
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
    <section className="relative bg-[#0B0D10] w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative scorpion_gbg flex flex-col gap-16 items-center justify-center">
        <div className="text-center">
          <h2 className="">
            <span className="text-white">Scorpion Casino </span>
            <span className="text_gradient">Ambassadors</span>
          </h2>
        </div>

        {/* Ambassador Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {ambassadorsData.map((ambassador, index) => (
            <div
              key={index}
              className="group relative rounded-xl bg-linear-to-br from-[#1a1a1a] via-[#0f0f0f] to-black p-6 md:p-8 border border-white/10"
            >
              {/* Content Container */}
              <div className="flex flex-col items-center text-center">
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
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">
                    {ambassador.name}
                  </h3>
                  {ambassador.verified && (
                    <svg
                      className="w-6 h-6 pb-1.5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {/* Followers/Status */}
                <p className="text-sm text-gray-400 mb-3">
                  {ambassador.followers}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300/80 mb-6">
                  {ambassador.description}
                </p>

                {/* CTA Link */}
                <a
                  href={ambassador.link.url}
                  className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors duration-200"
                >
                  {ambassador.link.text}
                </a>
              </div>
              <img
                src={whiteGbg}
                alt="white gbg"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorsSection;
