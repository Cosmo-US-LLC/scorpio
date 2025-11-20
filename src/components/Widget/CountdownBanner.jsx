import clsx from "clsx"
import Countdown from "./Countdown"
import { useApiState } from "@/presale-gg/stores"
import Loader from "./Loader"

const CountdownBanner = (others) => {
  const apiData = useApiState()

  const scrollToWidget = () => {
    const widget = document.getElementById("widget")
    if (!widget) return
    const { top } = widget.getBoundingClientRect()
    const offset = window.innerWidth < 768 ? -150 : -130
    window.scrollTo({top: top + window.scrollY + offset, behavior: "smooth"})
  }

  return (
    <Loader loading={apiData.stageLoading}>
      <div
        {...others}
        style={{
          background: 'linear-gradient( 90deg, #B69B4B 0%, #F4ED95 25%, #E2CF79 50%, #CEB15C 75%, #E1C46F 100%)',
          gridTemplateAreas: "'title button' \n 'countdown countdown'",
          gridTemplateColumns: 'auto auto'
        }}
        className={clsx("grid md:flex md:flex-row gap-x-4 lg:gap-6 justify-center items-center text-[#161616] h-16 md:h-10 w-full", others.className)}
      >
        <p className="text-inherit text-[18px] lg:text-[24px] font-bold" style={{gridArea: 'title'}}>Pre-Sale Stage Ends</p>
        <Countdown endDate={new Date(apiData.stage?.overflow_end ?? Date.now()) } style={{gridArea: 'countdown'}} />
        <button className="border rounded-sm px-2 cursor-pointer hover:bg-[#fff]/10 transition-colors" style={{gridArea: 'button'}} onClick={scrollToWidget}>
          BUY $SCORP NOW
        </button>
      </div>
    </Loader>
  )
}

export default CountdownBanner