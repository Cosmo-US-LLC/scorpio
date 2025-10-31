import { useState } from "react";

const BuyInCompetitionSection = ({ leaderboard }) => {
  const defaultLeaderboard = [
    {
      rank: 1,
      wallet: "0x0de...8e610",
      txCount: 1,
      totalBuy: "$315,513.01",
      nft: "Diamond",
      prize: "$10,000",
    },
    {
      rank: 2,
      wallet: "0x589...18e01",
      txCount: 5,
      totalBuy: "$201,181.17",
      nft: "Diamond",
      prize: "$5,000",
    },
    {
      rank: 3,
      wallet: "0xe8e...32b4f",
      txCount: 1,
      totalBuy: "$108,999.00",
      nft: "Diamond",
      prize: "$3,000",
    },
    {
      rank: 4,
      wallet: "0x9bd...6746c",
      txCount: 23,
      totalBuy: "$106,799.20",
      nft: "Diamond",
      prize: "$2,000",
    },
    {
      rank: 5,
      wallet: "0xbbf...c627c",
      txCount: 2,
      totalBuy: "$105,349.88",
      nft: "Diamond",
      prize: "$1500",
    },
    {
      rank: 6,
      wallet: "0xcc6...85fda",
      txCount: 12,
      totalBuy: "$105,120.76",
      nft: "Diamond",
      prize: "$900",
    },
    {
      rank: 7,
      wallet: "0x145...122eb",
      txCount: 5,
      totalBuy: "$103,213.41",
      nft: "Diamond",
      prize: "$800",
    },
    {
      rank: 8,
      wallet: "0x815...7f652",
      txCount: 5,
      totalBuy: "$103,160.51",
      nft: "Diamond",
      prize: "$700",
    },
    {
      rank: 9,
      wallet: "0x809...8a5af",
      txCount: 8,
      totalBuy: "$100,942.26",
      nft: "Diamond",
      prize: "$600",
    },
    {
      rank: 10,
      wallet: "0xc13...aebc6",
      txCount: 6,
      totalBuy: "$70,840.99",
      nft: "Platinum",
      prize: "$500",
    },
  ];

  const leaderboardData = leaderboard || defaultLeaderboard;

  const initialCount = 5;

  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5); // load 5 more items
  };
  
  return (
    <section className="relative w-full max-md:pt-0 py-16 px-4 md:px-16 ">
      <div
        className="max-w-[1280px] mx-auto w-[100%] max-md:px-[10px] max-md:py-[24px] md:px-[40px] md:py-[44px]"
        style={{
          borderRadius: "16px",
          border: "0.764px solid rgba(68, 68, 68, 0.5)",
          background:
            "linear-gradient(90deg, rgba(224, 170, 62, 0.05) 38.55%, rgba(184, 138, 68, 0.05) 97.22%)",
          backdropFilter: "blur(2.599111318588257px)",
        }}
      >
        {/* Header */}
        <div className="flex max-md:flex-col justify-between mb-[30px] ms-start">
          <h2 className="text_gradient md:min-w-[400px] max-md:mb-4 max-md:pb-2 max-md:text-center text-start md:pr-2 md:mr-4 w-[100%] md:border-r-[1px] max-md:border-b border-[#E5E7EB]">
            Biggest Buy-in Competition
          </h2>
          <p className="max-md:text-center md:pr-10">
            We’ve established a Top 10 Biggest Buy-in competition for all
            pre-sale participants, with a prize pool of 25,000 USD (in
            $SCORP2.0). This is our way of rewarding those who recognise the
            immense potential before others and have made a significant
            contribution to the success of the Scorpion Casino ecosystem.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden border border-white/5 "
        style={{
          background:
            "linear-gradient(90deg, rgba(224, 170, 62, 0.05) 38.55%, rgba(184, 138, 68, 0.05) 97.22%)",
          // backdropFilter: "blur(2.599111318588257px)",
        }}
        >
          <div className="block md:block overflow-x-auto">
            <table className="w-[98%] border-separate border-spacing-y-2 mx-auto mt-10 mb-10 md:p-10 h-full">
              <thead>
                <tr className="">
                  <th className=" w-[120px] px-2 py-4 max-md:!text-start !text-center text-xs font-bold uppercase tracking-wider text-[#F9C333] text-center">
                    Rank
                  </th>
                  <th className="w-[200px] px-3 py-4 max-md:!text-start !text-center text-xs font-bold uppercase tracking-wider text-[#F9C333] text-center">
                    Wallet
                  </th>
                  <th className="max-md:hidden w-[200px] px-3 py-4  py-4 text-left max-md:text-[10px] text-xs font-bold uppercase tracking-wider text-[#F9C333] max-md:!text-start !text-center">
                    No. of TX
                  </th>
                  <th className="w-[200px] px-3  py-4 text-left max-md:text-[10px] text-xs font-bold uppercase tracking-wider text-[#F9C333] max-md:!text-start !text-center">
                    Total Buy
                  </th>
                  <th className=" max-md:hidden w-[200px] px-3 max-md:!text-start !text-center py-4 text-left max-md:text-[10px] text-xs font-bold uppercase tracking-wider text-[#F9C333] text-center">
                    NFT
                  </th>
                  <th className="w-[200px] px-3 py-4 text-left max-md:!text-start !text-center max-md:text-[10px] text-xs font-bold uppercase tracking-wider text-[#F9C333] text-center">
                    Prize
                  </th>
                </tr>
              </thead>

              <tbody className="w-full ">
                {leaderboardData.slice(0, visibleCount).map((entry, index) => {
                  let bgColor = "";
                  let textColor = "";

                  if (entry.rank === 1) {
                    bgColor = "bg-[rgba(255,217,0,0.63)]";
                    textColor = "text-[#FFF9AD]";
                  } else if (entry.rank === 2) {
                    bgColor = "bg-[rgba(192,192,192,0.69)]";
                    textColor = "text-[#FFF9AD]";
                  } else if (entry.rank === 3) {
                    bgColor = "bg-[rgba(205,128,50,0.71)]";
                    textColor = "text-[#FFF9AD]";
                  } else {
                    bgColor =
                      index % 2 === 0 ? "bg-transparent" : "bg-transparent";
                    textColor = "text-gray-300";
                  }

                  return (
                    <tr
                      key={index}
                      className={`w-full !mb-6 transition-colors  ${bgColor}`}
                    >
                      {/* Rank */}
                      <td
                        className={`px-4 max-md:px-2  max-md:py-2 max-md:text-[14px] !text-center rounded-l-[30px] py-4 font-bold ${textColor}`}
                      >
                        {entry.rank === 1
                          ? "1st"
                          : entry.rank === 2
                          ? "2nd"
                          : entry.rank === 3
                          ? "3rd"
                          : `${entry.rank}th`}
                      </td>

                      {/* Wallet */}
                      <td
                        className={`px-4 max-md:px-2 max-md:py-2 max-md:text-[14px]  py-4 !text-center text-sm font-medium ${textColor}`}
                      >
                        {entry.wallet}
                      </td>

                      {/* TX Count */}
                      <td
                        className={` max-md:hidden px-4 max-md:px-2 max-md:py-2 max-md:text-[14px] py-4 text-center text-sm  ${textColor}`}
                      >
                        {entry.txCount}
                      </td>

                      {/* Total Buy */}
                      <td
                        className={`px-4 max-md:px-2 max-md:py-2 max-md:text-[14px] py-4 text-sm !text-center font-semibold ${textColor}`}
                      >
                        {entry.totalBuy}
                      </td>

                      {/* NFT */}
                      <td className="max-md:hidden px-4 max-md:px-2 max-md:py-2 max-md:text-[14px] py-4 text-sm !text-center">
                        {entry.nft}
                      </td>

                      {/* Prize */}
                      <td
                        className={`px-4 max-md:px-2 max-md:py-2 max-md:text-[14px] py-4  rounded-r-[30px] !text-center font-bold ${textColor}`}
                      >
                        {entry.prize}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

              {/* <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr
                    key={index}
                    className={`border-b border-yellow-500/20 transition-colors hover:bg-white/5 ${
                      index % 2 === 0 ? "bg-black/30" : "bg-black/50"
                    }`}
                  >
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold ${getRankStyle(
                          entry.rank
                        )}`}
                      >
                        {entry.rank === 1
                          ? "1st"
                          : entry.rank === 2
                          ? "2nd"
                          : entry.rank === 3
                          ? "3rd"
                          : `${entry.rank}th`}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-sm font-medium text-gray-200">
                      {entry.wallet}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {entry.date}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-300 text-center">
                      {entry.txCount}
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-white">
                      {entry.totalBuy}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-[#60A5FA]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm text-gray-300">
                          {entry.nft}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-sm font-bold ${
                          entry.rank <= 3 ? "text-[#F7D774]" : "text-white"
                        }`}
                      >
                        {entry.prize}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>

          {/* Mobile Cards */}
          {/* <div className="block md:hidden space-y-4 p-4">
            {leaderboardData.map((entry, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-xl p-4 border border-yellow-500/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold ${getRankStyle(
                      entry.rank
                    )}`}
                  >
                    {entry.rank === 1
                      ? "1st"
                      : entry.rank === 2
                      ? "2nd"
                      : entry.rank === 3
                      ? "3rd"
                      : `${entry.rank}th`}
                  </span>
                  <span
                    className={`text-lg font-bold ${
                      entry.rank <= 3 ? "text-[#F7D774]" : "text-white"
                    }`}
                  >
                    {entry.prize}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wallet:</span>
                    <span className="text-gray-200 font-medium">
                      {entry.wallet}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-gray-300">{entry.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transactions:</span>
                    <span className="text-gray-300">{entry.txCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Buy:</span>
                    <span className="text-white font-semibold">
                      {entry.totalBuy}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">NFT:</span>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#60A5FA]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <span className="text-gray-300">{entry.nft}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>

       {leaderboardData.length > 0 && (
          <div className="flex justify-center mt-8">
            {visibleCount < leaderboardData.length ? (
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center justify-center px-8 py-3 text-black font-semibold text-base rounded-full btn-primary"
              >
                Load More
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(initialCount)}
                className="inline-flex items-center justify-center px-8 py-3 text-black font-semibold text-base rounded-full btn-primary"
              >
                View Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BuyInCompetitionSection;
