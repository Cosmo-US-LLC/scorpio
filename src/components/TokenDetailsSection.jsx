import AllocationImg from "../assets/AllocationSection/Allocation_img.webp";

const TokenDetailsSection = () => {
  return (
    <section className="relative w-full  py-16 px-6 md:px-16 "
    
    >
      <div className="max-w-[1280px] relative  w-full mx-auto">

              <div
        className="absolute left-[-40%] top-[10%] mx-auto"
        style={{
          width: "963.416px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          transform:"rotate(-30deg)",
          zIndex: 0,
         
        }}
      ></div>
       <div
        className="absolute right-[-30%]  top-[10%] mx-auto"
        style={{
          width: "963.416px",
          height: "316px",
          borderRadius: "1262px",
          background: "#4D1200",
          filter: "blur(250px)",
          transform:"rotate(30deg)",
          zIndex: 0,
        }}
      ></div>

       <div className="mb-10">
         <h2 className="text-center">
          Token <span className="text_gradient">Details</span>
        </h2>
        <p className="text-center">Use the contract information below to add the $SCORP2.0 token to your wallet.</p>
       </div>

        <div className=" relative">
             <div className="space-y-[30px]">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 max-w-[710px] mx-auto gap-y-[33px]  rounded-[31px] p-6 "
        style={{
            border:"1px solid rgba(255, 255, 255, 0.10)",
            background:"rgba(27, 26, 22, 0.40)",
            backdropFilter:"blur(8.922223091125488px)"
        }}
        >
          <div className="space-y-[12px]">
            <h4 className="text-start">Token Name</h4>
            <p className="text-[15px] text-[#fff]">Scorpion Casino</p>
          </div>
          <div className="space-y-[12px]">
            <h4 className="text-start">Token Symbol</h4>
            <p className="text-[15px] text-[#fff]">$SCORP2.0</p>
          </div>
          <div className="space-y-[12px]">
            <h4 className="text-start">Token Type</h4>
            <p className="text-[15px] text-[#fff] tracking-[-0.5px]">ERC-20 (Ethereum Blockchain)</p>
          </div>
         

          <div className="col-span-2 w-full space-y-[12px]">
            <h4 className="text-start">Token Contract Address</h4>
            <p className="text-[15px] text-[#fff] break-words">
              0x37803eccdb9f1889c0974bea0ddb4d7929119a7
            </p>
          </div>
           <div className="space-y-[12px]">
            <h4 className="text-start">Decimal</h4>
            <p className="text-[15px] text-[#fff]">18</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6  rounded-[31px] p-[36px] "
         style={{
            border:"1px solid rgba(255, 255, 255, 0.10)",
            background:"rgba(27, 26, 22, 0.40)",
            backdropFilter:"blur(8.922223091125488px)"
        }}
        >
          <div className="space-y-[12px]">
            <h4 className="text-start">Pre-Sale Details</h4>
            <p className="text-base font-medium">
              3,000,000,000 $SCORP tokens will be sold during the pre-sale.
            </p>
          </div>
          <div className="space-y-[12px]">
            <h4 className="text-start">Current Stage Price</h4>
            <p className="text-base font-medium">1 $SCORP = $0.055</p>
          </div>
          <div className="space-y-[12px]">
            <h4 className="text-start">Exchange Listing Price</h4>
            <p className="text-base font-medium">1 $SCORP = $0.15</p>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDetailsSection;
