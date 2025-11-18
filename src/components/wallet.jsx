import { useEffect, useMemo, useState } from "react";
import BuyTab from "./Widget/BuyTab";
import DashboardTab from "./Widget/DashboardTab";
import StakeTab from "./Widget/StakeTab";

import {
  DollarSign as BuyIcon,
  Lock as StakeIcon,
  LayoutDashboard as DashboardIcon,
} from "lucide-react";
import { useAccount } from "@/presale-gg/web3";
import clsx from "clsx";
import Loader from "./Widget/Loader";
import { useApiState } from "@/presale-gg/stores";

const tabs = [
  {
    label: "Buy",
    key: "buy",
    icon: BuyIcon,
    component: BuyTab,
    needsConnected: false,
  },
  {
    label: "Stake",
    key: "stake",
    icon: StakeIcon,
    component: StakeTab,
    needsConnected: true,
  },
  {
    label: "Dashboard",
    key: "dashboard",
    icon: DashboardIcon,
    component: DashboardTab,
    needsConnected: true,
  },
];

const Wallet = () => {
  const [selectedTabKey, setSelectedTabKey] = useState("buy");
  const selectedTab = useMemo(
    () => tabs.find((tab) => tab.key === selectedTabKey),
    [selectedTabKey]
  );
  const Component = selectedTab.component;

  const [widgetHeight, setWidgetHeight] = useState("auto");
  const [innerRef, setInnerRef] = useState(null);
  const MIN_HEIGHT = 200;

  useEffect(() => {
    if (!innerRef) return;
    const func = () => {
      const { height } = innerRef.getBoundingClientRect();
      setWidgetHeight(`${Math.max(height, MIN_HEIGHT)}px`);
    };
    const resizeObserver = new ResizeObserver(func);
    resizeObserver.observe(innerRef);
    window.addEventListener("resize", func);
    func();
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", func);
    };
  }, [innerRef]);

  const accountData = useAccount();

  useEffect(() => {
    if (selectedTab.needsConnected && !accountData.isConnected)
      setSelectedTabKey("buy");
  }, [accountData.isConnected, selectedTab]);

  const apiData = useApiState()

  return (
    <Loader loading={apiData.stageLoading}>
      <div
        className="flex flex-col overflow-hidden relative isolate [&_p]:text-[inherit]"
        style={{
          boxSizing: "content-box",
          borderRadius: "13.675px",
          border: "0.684px solid #D4AA49",
          background: "rgba(18, 19, 31, 0.40)",
          backdropFilter: "blur(6.837605953216553px)",
          height: widgetHeight,
          transition: "height 200ms ease-out",
        }}
      >
        <div className="max-md:gap-[15px] md:gap-[10px] flex max-md:p-[12px] md:p-[24px] flex-col w-full" ref={setInnerRef}>
          <div className="flex gap-2 border border-[rgba(255,255,255,0.2)] rounded-full p-1 min-h-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const disabled = tab.needsConnected && !accountData.isConnected;
              return (
                <button
                  disabled={disabled}
                  title={disabled ? "Connect your wallet" : undefined}
                  className={clsx(
                    "flex gap-1 items-center justify-center rounded-full flex-1 hover:bg-[rgba(255,255,255,0.1)] font-normal px-2 max-sm:text-sm h-7 cursor-pointer",
                    {
                      "btn-primary": selectedTab.key === tab.key,
                      "!bg-[rgba(255,255,255,0.4)] text-[#444] !cursor-not-allowed":
                        disabled,
                    }
                  )}
                  key={tab.key}
                  onClick={() => setSelectedTabKey(tab.key)}
                >
                  <Icon className="w-[1em] h-[1em]" />
                  {tab.label}
                </button>
              );
            })}
          </div>
          <Component />
        </div>
      </div>
    </Loader>
  );
};

export default Wallet;
