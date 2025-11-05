import copy from "../assets/AllocationSection/copy.webp";
import toast from "react-hot-toast";
const TokenDetailsSection = () => {
  const walletAddress = "0x37803eccdb9f1889c0974bea0ddb4d7929119a7";
  return (
    <section className="relative w-full py-12 md:py-16 px-4 md:px-6 lg:px-16 ">
      <div className="max-w-[1280px] relative w-full mx-auto">
        <div
          className="absolute left-[-60%] sm:left-[-50%] md:left-[-40%] top-[10%] mx-auto hidden sm:block"
          style={{
            width: "963.416px",
            height: "316px",
            borderRadius: "1262px",
            background: "#4D1200",
            filter: "blur(250px)",
            transform: "rotate(-30deg)",
            zIndex: 0,
          }}
        ></div>
        <div
          className="absolute right-[-60%] sm:right-[-40%] md:right-[-30%] top-[10%] mx-auto hidden sm:block"
          style={{
            width: "963.416px",
            height: "316px",
            borderRadius: "1262px",
            background: "#4D1200",
            filter: "blur(250px)",
            transform: "rotate(30deg)",
            zIndex: 0,
          }}
        ></div>

        <div className="mb-8 md:mb-10 relative z-[1] ">
          <h2 className="text-center">
            Token <span className="text_gradient">Details</span>
          </h2>
          <p className="text-center text-sm md:text-base px-4">
            Use the contract information below to add the $SCORP2.0 token to
            your wallet.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-6 md:space-y-[30px]">
            {/* Top Section */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[710px] mx-auto gap-4 sm:gap-6 md:gap-y-[33px] rounded-[20px] md:rounded-[31px] p-4 sm:p-5 md:p-6"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(27, 26, 22, 0.40)",
                backdropFilter: "blur(8.922223091125488px)",
              }}
            >
              <div className="hidden md:block space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">Token Name</h4>
                <p className="text-sm md:text-[15px] text-[#fff]">
                  Scorpion Casino
                </p>
              </div>
              <div className="hidden md:block space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">
                  Token Symbol
                </h4>
                <p className="text-sm md:text-[15px] text-[#fff]">$SCORP2.0</p>
              </div>
              <div className="md:hidden flex justify-between items-center">
                 <div className="space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">Token Name</h4>
                <p className="text-sm md:text-[15px] text-[#fff]">
                  Scorpion Casino
                </p>
              </div>
              <div className="space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">
                  Token Symbol
                </h4>
                <p className="text-sm md:text-[15px] text-[#fff]">$SCORP2.0</p>
              </div>
              </div>
              <div className="space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">Token Type</h4>
                <p className="text-sm md:text-[15px] text-[#fff] tracking-[-0.5px]">
                  ERC-20 <br /> (Ethereum Blockchain)
                </p>
              </div>
              <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              

              <div className="sm:col-span-2 md:col-span-2 w-full space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">
                  Token Contract Address
                </h4>
                <p className=" md:text-[15px] text-[#fff] break-words">
                  <span className="max-md:!text-[11px]">{walletAddress}</span>
                  <span>
                    <img
                      className="inline-block cursor-pointer ml-1 max-h-[13.333px]"
                      src={copy}
                      alt="Copy"
                      onClick={() => {
                        navigator.clipboard.writeText(walletAddress);
                        toast.success("Wallet address copied!");
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="space-y-2 md:space-y-[12px]">
                <h4 className="text-start text-sm md:text-base">Decimal</h4>
                <p className="text-sm md:text-[15px] text-[#fff]">18</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div
              className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-5 md:gap-6 rounded-[20px] md:rounded-[31px] p-4 sm:p-6 md:p-[36px]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(27, 26, 22, 0.40)",
                backdropFilter: "blur(8.922223091125488px)",
              }}
            >
              <div className="space-y-2 md:space-y-[12px] flex w-[100%]"
            
              >
                <div className="w-full">
                  <h4 className="text-start text-sm md:text-base">
                  Pre-Sale Details
                </h4>
                <p className="text-sm md:text-base font-medium md:pr-18 max-md:max-w-[240px]">
                  3,000,000,000 $SCORP tokens will be sold during the pre-sale.
                </p>
                </div>
                <div className="max-md:hidden w-[1px] ml-8 mr-2 h-full bg-gradient-to-b from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              </div>
              <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              
              <div className="space-y-2 flex  items-start md:pl-17 md:space-y-[12px]">
               <div>
                 <h4 className="text-start text-sm md:text-base">
                  Current Stage Price
                </h4>
                <p className="text-sm md:text-base font-medium">
                  1 $SCORP = $0.055
                </p>
               </div>
                   <div className="max-md:hidden w-[1px] ml-20 mr-2 h-full bg-gradient-to-b from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              </div>
              <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,255,255,0)]"></div>
              <div className="space-y-2 md:space-y-[12px]"
              >
                
                <div>
                  <h4 className="text-start text-sm md:text-base">
                  Exchange Listing Price
                </h4>
                <p className="text-sm md:text-base font-medium">
                  1 $SCORP = $0.15
                </p>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetailsSection;
