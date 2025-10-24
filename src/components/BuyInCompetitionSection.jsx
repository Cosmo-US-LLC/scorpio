const BuyInCompetitionSection = ({ leaderboard }) => {
  // Default leaderboard data matching the screenshot
  const defaultLeaderboard = [
    {
      rank: 1,
      wallet: "0x0de...8e610",
      date: "2024-03-18",
      txCount: 1,
      totalBuy: "$315,513.01",
      nft: "Diamond",
      prize: "$10,000",
    },
    {
      rank: 2,
      wallet: "0x5B9...18e01",
      date: "2023-07-27",
      txCount: 5,
      totalBuy: "$201,191.17",
      nft: "Diamond",
      prize: "$5,000",
    },
    {
      rank: 3,
      wallet: "0xe8e...32b4f",
      date: "2024-03-17",
      txCount: 1,
      totalBuy: "$108,999.00",
      nft: "Diamond",
      prize: "$3,000",
    },
    {
      rank: 4,
      wallet: "0x9bd...674ec",
      date: "2024-03-09",
      txCount: 23,
      totalBuy: "$108,799.20",
      nft: "Diamond",
      prize: "$2,000",
    },
    {
      rank: 5,
      wallet: "0xbbf...c027c",
      date: "2024-03-05",
      txCount: 2,
      totalBuy: "$105,349.88",
      nft: "Diamond",
      prize: "$1500",
    },
  ];

  const leaderboardData = leaderboard || defaultLeaderboard;

  // Function to get rank pill styling
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return "bg-linear-to-r from-[#fcd34d] to-[#F7D774] text-black";
      case 2:
        return "bg-linear-to-r from-[#C0C0C0] to-[#A8A8A8] text-black";
      case 3:
        return "bg-linear-to-r from-[#CD7F32] to-[#B87333] text-white";
      default:
        return "bg-white/10 text-gray-300";
    }
  };

  return (
    <section className="relative w-full max-md:pt-0 py-16 px-4 md:px-16 ">

      <div className="max-w-[1280px] mx-auto w-[100%] max-md:px-[20px] max-md:py-[24px] md:px-[40px] md:py-[44px]"
      style={{
        borderRadius:"16px",
        border:"0.764px solid rgba(255, 255, 255, 0.50)",
        background:"linear-gradient(90deg, rgba(224, 170, 62, 0.05) 38.55%, rgba(184, 138, 68, 0.05) 97.22%)",
        backdropFilter:"blur(2.599111318588257px)"
      }}
      >
        {/* Header */}
        <div className="flex max-md:flex-col justify-between mb-[30px] ms-start">
          <h2 className="text_gradient md:min-w-[400px] max-md:mb-4 max-md:pb-2 max-md:text-center text-start md:pr-2 md:mr-4 w-[100%] md:border-r-[1px] max-md:border-b border-[#E5E7EB]">
           biggest buy-in competition
          </h2>
          <p className="max-md:text-center">
           We’ve established a Top 10 Biggest Buy-in competition for all pre-sale participants, with a prize pool of 25,000 USD (in $SCORP2.0). This is our way of rewarding those who recognise the immense potential before others and have made a significant contribution to the success of the Scorpion Casino ecosystem.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden border border-white/5 backdrop-blur-sm">
          {/* Desktop Table */}
          <div className="block md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-black/50">
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    Rank
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    Wallet
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    Date
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    No. of TX
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    Total Buy
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    NFT
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-400">
                    Prize
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <tr
                    key={index}
                    className={`border-b border-yellow-500/20 transition-colors hover:bg-white/5 ${
                      index % 2 === 0 ? "bg-black/30" : "bg-black/50"
                    }`}
                  >
                    {/* Rank */}
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

                    {/* Wallet */}
                    <td className="px-4 py-4 text-sm font-medium text-gray-200">
                      {entry.wallet}
                    </td>

                    {/* Date */}
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {entry.date}
                    </td>

                    {/* TX Count */}
                    <td className="px-4 py-4 text-sm text-gray-300 text-center">
                      {entry.txCount}
                    </td>

                    {/* Total Buy */}
                    <td className="px-4 py-4 text-sm font-semibold text-white">
                      {entry.totalBuy}
                    </td>

                    {/* NFT */}
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

                    {/* Prize */}
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
              </tbody>
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

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-[#fcd34d] to-[#fbbf24] text-black font-semibold text-base rounded-full hover:shadow-[0_0_20px_rgba(252,211,77,0.7)] transition-all duration-300 hover:scale-105">
            Load More
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default BuyInCompetitionSection;
