import { useApiState } from "@/presale-gg/stores"
import { formatDollar, formatNumber, parseNum } from "@/presale-gg/util"
import { useMemo } from "react"

const StageBox = () => {
  const apiData = useApiState()
  const stageFrac = useMemo(() => {
    return parseNum(apiData.stage?.cumulative_usd_raised) / parseNum(apiData.stage?.next_stage_target_usd ?? 1)
  }, [apiData.stage])

  return (
    <div
      className="px-[30px] py-[20px] space-y-[8px] border-[1px] border-[#F9F295] rounded-[8px]"
      style={{ background: "#000" }}
    >
      <h2 className="text-center text_gradient md:text-[40px] max-md:!text-[32px] font-[700]">
        {formatDollar(parseNum(apiData.stage?.cumulative_usd_raised))}
      </h2>
      <div className="">
        <div className="flex justify-between items-center pb-1">
          <p className="text-[#fff] text-[14px] font-[700] leading-[100%]">
            {formatNumber(stageFrac * 100, 0, 2)}% of presale stage softcap
          </p>
        </div>
        <div className="bg-gray-800 w-[100%] md:h-[17px] max-md:h-[32px] rounded-[20px]">
          <div
            className="md:h-[17px] max-md:h-[32px] rounded-[20px]"
            style={{
              width: "80%",
              background: "#E2B146",
            }}
          />
        </div>
        <div>
          <p
            className=" !text-[14px] text-end  font-[700] leading-[150%]"
            style={{
              color: "rgba(255, 255, 255, 0.50)",
            }}
          >
            {formatDollar(parseNum(apiData.stage?.next_stage_target_usd), true, 0, 0)}
          </p>
        </div>
      </div>
      <div className="">
        <h5 className="text-center max-md:!text-[18px]">{formatNumber(apiData.info?.holders, 0, 0)} Holders</h5>
      </div>
    </div>
  )
}

export default StageBox