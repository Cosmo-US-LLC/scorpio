import {
  useApiState,
  userStakeTokens,
  userUnstakeTokens,
  useUserState,
} from "@/presale-gg/stores";
import {
  formatLargeNumber,
  parseNum,
  partialNumRegexp,
} from "@/presale-gg/util";
import { useState } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import { api } from "@/presale-gg/api";

const StakeTab = () => {
  const userData = useUserState();
  const [tokensStr, setTokensStr] = useState("0");
  const [stakeLoading, setStakeLoading] = useState(false);
  const [unstakeLoading, setUnstakeLoading] = useState(false);

  const stake = async () => {
    if (stakeLoading || unstakeLoading) return;
    if (!tokensStr || tokensStr === "0")
      return toast.error("Invalid amount specified");
    setStakeLoading(true);
    try {
      await userStakeTokens(tokensStr);
      toast.success("Successfully staked tokens");
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error staking tokens"));
    }
    setStakeLoading(false);
  };

  const unstake = async () => {
    if (stakeLoading || unstakeLoading) return;
    if (!tokensStr || tokensStr === "0")
      return toast.error("Invalid amount specified");
    setUnstakeLoading(true);
    try {
      await userUnstakeTokens(tokensStr);
      toast.success("Successfully unstaked tokens");
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error unstaking tokens"));
    }
    setUnstakeLoading(false);
  };

  const apiData = useApiState();

  return (
    <>
      <div className="flex flex-col gap-2">
        {[
          {
            label: "Owned Tokens",
            value: `${formatLargeNumber(
              parseNum(userData.user?.total_tokens)
            )} $SCORP2.0 ($${formatLargeNumber(
              parseNum(userData.user?.total_tokens) *
                parseNum(apiData.stage?.token_price)
            )})`,
          },
          {
            label: "Currently Staked",
            value: `${formatLargeNumber(
              parseNum(userData.userStakeData?.total_staked)
            )} $SCORP2.0`,
          },
          {
            label: "Daily Interest",
            value: `${formatLargeNumber(
              parseNum(userData.userStakeData?.daily_interest)
            )} $SCORP2.0`,
          },
          {
            label: "Total Earnings",
            value: `${formatLargeNumber(
              parseNum(userData.userStakeData?.total_earnings)
            )} $SCORP2.0 ($${formatLargeNumber(
              parseNum(userData.userStakeData?.total_earnings) *
                parseNum(apiData.stage?.token_price)
            )})`,
          },
        ].map(({ label, value }) => (
          <div className="bg-[rgba(176,176,176,0.17)] p-2 rounded-md flex flex-col text-center">
            <p className="">{value}</p>
            <p className="text-xs text-[#aaa]">{label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 my-4">
        <div className="flex gap-2 justify-between leading-[1] text-xs">
          <p>Available to Stake</p>
          <p>
            {formatLargeNumber(
              parseNum(userData.userStakeData?.total_can_stake)
            )}{" "}
            $SCORP2.0
          </p>
        </div>
        <input
          type="text"
          className="walletinput_bg px-2 py-2 w-full text-[#fff] text-[14.85px] font-[700] outline-none"
          value={tokensStr}
          onFocus={(e) => {
            if (e.currentTarget.value === "0") {
              e.currentTarget.value = ""
              setTokensStr("")
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === "") {
              e.currentTarget.value = "0"
              setTokensStr("0")
            }
          }}
          onChange={(e) => {
            let val = e.target.value
            if (!partialNumRegexp.test(val)) {
              val = tokensStr
            }
            e.target.value = val
            setTokensStr(val)
          }}
        />
        <div className="flex gap-2 justify-between">
          <button
            className="bg-[#fff] text-[#000] leading-[1] text-xs py-1 px-[0.375rem] rounded-sm flex items-center justify-center cursor-pointer font-bold hover:brightness-90"
            onClick={() =>
              setTokensStr(userData.userStakeData?.total_can_stake ?? "0")
            }
          >
            Max Stake (
            {formatLargeNumber(
              parseNum(userData.userStakeData?.total_can_stake)
            )}
            )
          </button>
          <button
            className="bg-[#fff] text-[#000] leading-[1] text-xs py-1 px-[0.375rem] rounded-sm flex items-center justify-center cursor-pointer font-bold hover:brightness-90"
            onClick={() =>
              setTokensStr(userData.userStakeData?.total_staked ?? "0")
            }
          >
            Max Unstake (
            {formatLargeNumber(parseNum(userData.userStakeData?.total_staked))})
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={stake} className="flex-1 btn-primary">
          {stakeLoading ? <Spinner size={5} /> : "Stake"}
        </button>
        <button onClick={unstake} className="flex-1 btn-primary">
          {unstakeLoading ? <Spinner size={5} /> : "Unstake"}
        </button>
      </div>
    </>
  );
};

export default StakeTab;