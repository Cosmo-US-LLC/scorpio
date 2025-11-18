import { useApiState } from "@/presale-gg/stores"
import { formatDollar, formatNumber, minMax, parseNum } from "@/presale-gg/util"
import { useMemo } from "react"
import Countdown from "./Countdown"
import { Loadable } from "./Loader"

const StageBox = () => {
  const apiData = useApiState()
  const stageFrac = useMemo(() => {
    if (!apiData.stage) return 1
    if (apiData.stage.in_overflow_phase && apiData.stage.overflow_started && apiData.stage.overflow_end) {
      return minMax(
        (Date.now() - new Date(apiData.stage.overflow_started).getTime())
          /
          (new Date(apiData.stage.overflow_end).getTime() - new Date(apiData.stage.overflow_started)),
        0,
        1
      )
    }
    return minMax(parseNum(apiData.stage?.cumulative_usd_raised) / parseNum(apiData.stage?.next_stage_target_usd ?? 1), 0, 1)
  }, [apiData.stage])

  return (
    <div
      className="px-[30px] py-[20px] space-y-[8px] border-[1px] border-[#F9F295] rounded-[8px]"
      style={{ background: "#000" }}
    >
      {apiData.presaleEnded ? (
        <p className="text-xl text-center font-bold my-10">Presale has ended</p>
      ) : <>
        <Loadable component="h2" className="text-center text_gradient md:text-[40px] max-md:!text-[32px] font-[700]" loadClass="mx-auto">
          {formatDollar(parseNum(apiData.stage?.cumulative_usd_raised))}
        </Loadable>
        <div className="">
          {apiData.stage?.in_overflow_phase ? (
            <div className="flex flex-col gap-2 mb-4">
              <Countdown endDate={new Date(apiData.stage.overflow_end)} className="px-4" />
              <div className="bg-gray-800 w-[100%] md:h-[17px] max-md:h-[32px] rounded-[20px]">
                <div
                  className="md:h-[17px] max-md:h-[32px] rounded-[20px]"
                  style={{
                    width: `${stageFrac * 100}%`,
                    background: "#E2B146",
                  }}
                />
              </div>
              <p className="text-center text-sm font-[500]">Until next stage</p>
            </div>
          ): (
            <>
              <div className="flex justify-between items-center pb-1">
                <Loadable component="p" length={8} className="text-[#fff] text-[14px] font-[700] leading-[100%]">
                  {formatNumber(stageFrac * 100, 0, 2)}% of presale stage softcap
                </Loadable>
              </div>
              <div className="bg-gray-800 w-[100%] md:h-[17px] max-md:h-[32px] rounded-[20px]">
                <div
                  className="md:h-[17px] max-md:h-[32px] rounded-[20px]"
                  style={{
                    width: `${stageFrac * 100}%`,
                    background: "#E2B146",
                  }}
                />
              </div>
              <div>
                <Loadable
                  component="p"
                  loadClass="ml-auto"
                  className=" !text-[14px] text-end  font-[700] leading-[150%]"
                  style={{
                    color: "rgba(255, 255, 255, 0.50)",
                  }}
                >
                  {formatDollar(parseNum(apiData.stage?.next_stage_target_usd), true, 0, 0)}
                </Loadable>
              </div>
            </>
          )}
        </div>
        <div className="">
          <Loadable component="h5" className="text-center max-md:!text-[18px]" loadClass="mx-auto">{formatNumber(apiData.info?.holders, 0, 0)} Holders</Loadable>
        </div>
      </>}
    </div>
  )
}

export default StageBox