import { useUserState } from "@/presale-gg/stores";
import { copyText } from "@/presale-gg/util";

const UserReferralData = () => {
  const userData = useUserState();
  const referralLink = `${window.origin}${
    window.location.pathname
  }?referral_code=${userData.user?.referral_code ?? ""}`;

  return (
    <>
      {[
        { label: "Your referral link", value: referralLink },
        {
          label: "Your referral code",
          value: userData.user?.referral_code ?? "",
        },
      ].map(({ label, value }) => (
        <div className="flex flex-col gap-1">
          <p className="text-sm font-[500]">
            {label}
          </p>
          <div className="flex gap-2 flex-1 walletinput_bg pl-2 pr-1 py-1">
            <input
              size={1}
              className="w-full text-[#fff] text-[14.85px] font-[700] outline-none flex-1"
              placeholder="0"
              value={value}
              readOnly
            />
            <button
              className={
                "bg-[#fff] text-[#000] font-bold text-xs px-2 leading-[1] rounded-md hover:brightness-90 w-[3.75rem] h-8 text-center flex items-center justify-center my-auto cursor-pointer"
              }
              onClick={() => copyText(value)}
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserReferralData;
