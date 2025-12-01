import { tokenImageMap } from "@/presale-gg/assets/img/tokens"
import { useApiState } from "@/presale-gg/stores"
import { formatPrecision, parseNum, partialNumRegexp } from "@/presale-gg/util"
import Scorpiontoken from "@/assets/tokens/Scorpion_token.svg";
import { useMemo } from "react";
import { nfts } from "@/constants";

/**
 * @typedef {import("@/presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * 
 * @param {object} props 
 * @param {PaymentToken | null} props.selectedToken
 * @param {string} props.paymentAmountStr
 * @param {string} props.receiveAmountStr
 * @param {(newVal: string) => void} props.onPaymentAmountChange
 * @param {(newVal: string) => void} props.onReceiveAmountChange
 */
const TokenAmountInputs = ({
  selectedToken,
  paymentAmountStr,
  receiveAmountStr,
  onPaymentAmountChange,
  onReceiveAmountChange
}) => {
  const apiData = useApiState()

  const paymentNumUsd = useMemo(() => {
    const payNum = parseNum(paymentAmountStr)
    return payNum * parseNum(selectedToken?.price)
  }, [paymentAmountStr, selectedToken])

  const sortedNfts = useMemo(() => {
    return [...nfts].sort((a, b) => b.minUsd - a.minUsd)
  }, [])

  const selectedNft = useMemo(() => {
    return sortedNfts.find((nft) => paymentNumUsd >= nft.minUsd)
  }, [sortedNfts, paymentNumUsd])

  return (
    <>
      <div className="space-y-[5px]">
        <p className="text-[14px] font-[700]">You Pay {selectedToken?.symbol.toUpperCase() === "CARD" ? "USD" : `${selectedToken?.symbol.toUpperCase() ?? ''} (${selectedToken?.chain ?? ''})`}</p>
        <div className="px-2 rounded-[8px] walletinput_bg">
          <div className="px-1 flex justify-between items-center">
            <div className="w-[80%] ">
              <input
                type="text"
                className="py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none bg-transparent"
                value={paymentAmountStr}
                onFocus={(e) => {
                  if (e.currentTarget.value === "0") {
                    e.currentTarget.value = ""
                    onPaymentAmountChange("")
                  }
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value === "") {
                    e.currentTarget.value = "0"
                    onPaymentAmountChange("0")
                  }
                }}
                onChange={(e) => {
                  let val = e.target.value
                  if (!partialNumRegexp.test(val)) {
                    val = paymentAmountStr
                  }
                  e.target.value = val
                  onPaymentAmountChange(val)
                  const receiveNum = parseNum(val) * parseNum(selectedToken?.price) / parseNum(apiData.stage?.token_price ?? 1)
                  onReceiveAmountChange(formatPrecision(receiveNum, 0, 3))
                }}
              />
            </div>
            <div
              className="relative flex justify-center py-2  px-[10px] w-[70px]"
              style={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
              }}
            >
              <div className="w-[100%] justify-center flex  items-center">
                <img
                  className="w-auto max-w-[30px] object-center object-contain h-[25.813px]"
                  src={tokenImageMap[selectedToken?.symbol.toLowerCase()]}
                  alt={selectedToken?.symbol.toUpperCase()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[5px]">
        <p className="text-[14px] font-[700]">
          You Receive SCORP2.0{selectedNft && <>
            {' '}+ <span className="text-[#E0AA3E] underline font-[700]">{selectedNft.name} NFT</span>
          </>}
        </p>
        <div className="px-2 rounded-[8px] walletinput_bg">
          <div className="px-1 flex justify-between items-center">
            <div className="w-[80%] ">
              <input
                type="text"
                className="py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none bg-transparent"
                value={receiveAmountStr}
                onFocus={(e) => {
                  if (e.currentTarget.value === "0") {
                    e.currentTarget.value = ""
                    onReceiveAmountChange("")
                  }
                }}
                onBlur={(e) => {
                  if (e.currentTarget.value === "") {
                    e.currentTarget.value = "0"
                    onReceiveAmountChange("0")
                  }
                }}
                onChange={(e) => {
                  let val = e.target.value
                  if (!partialNumRegexp.test(val)) {
                    val = receiveAmountStr
                  }
                  e.target.value = val
                  onReceiveAmountChange(val)
                  const paymentNum = parseNum(val) * parseNum(apiData.stage?.token_price) / parseNum(selectedToken?.price)
                  onPaymentAmountChange(formatPrecision(paymentNum, 0, 5))
                }}
              />
            </div>
            <div
              className="relative flex justify-center py-2  px-[10px] w-[70px]"
              style={{
                borderLeft: "1px solid rgba(255, 255, 255, 0.20)",
              }}
            >
              <div className="w-[100%] justify-center flex  items-center">
                <img
                  className="w-[25.813px] h-[25.813px] object-cover"
                  src={Scorpiontoken}
                  alt="Scorpiontoken"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TokenAmountInputs