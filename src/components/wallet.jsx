import { useEffect, useState } from "react";

import TokenSelectGrid from "./Widget/TokenSelectGrid";
import { refetchUserData, refetchUserStakeData, showConnectWalletModal, useApiState } from "@/presale-gg/stores";
import { buyWithCard, buyWithCrypto, formatDollar, formatLargeNumber, formatPrecision, parseNum } from "@/presale-gg/util";
import TokenAmountInputs from "./Widget/TokenAmountInputs";
import StageBox from "./Widget/StageBox";
import { useAccount } from "@/presale-gg/web3";
import toast from "react-hot-toast";
import { api } from "@/presale-gg/api";
import NowpaymentsModal from "./Widget/NowPaymentsModal";
import WalletTransferModal from "./Widget/WalletTransferModal";
import Modal from "./Widget/Modal";
import ContactModal from "./Widget/ContactModal";

/**
 * @typedef {import("@/presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * @typedef {import("@/presale-gg/api/api.types").API.PurchaseTransactionHistoryItemV2} PurchaseTransactionHistoryItemV2
 * @typedef {import("@/presale-gg/api/api.types").API.Transaction} Transaction
 * @typedef {import("@/presale-gg/util/buy.util").BuyState} BuyState
 */

const Wallet = () => {
  /** @type {[PaymentToken | null, (newToken: PaymentToken | null) => void]} */
  const [selectedToken, setSelectedToken] = useState(null);
  const [paymentAmountStr, setPaymentAmountStr] = useState("1");
  const [receiveAmountStr, setReceiveAmountStr] = useState("0");

  const apiData = useApiState()
  const accountData = useAccount()

  useEffect(() => {
    if (!apiData.paymentTokens?.length || selectedToken !== null) return
    setSelectedToken(apiData.paymentTokens.find((token) => token.symbol.toUpperCase() === "ETH") ?? apiData.paymentTokens[0] ?? null)
  }, [apiData.paymentTokens, selectedToken])

  useEffect(() => {
    if (!selectedToken || !apiData.stage) return
    const receiveNum = parseNum(selectedToken.price) * parseNum(paymentAmountStr) / parseNum(apiData.stage?.token_price ?? 1)
    setReceiveAmountStr(formatPrecision(receiveNum, 0, 3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedToken, apiData.stage?.token_price])

   const [transactionLoading, setTransactionLoading] = useState(false);
  /** @type {[Transaction | null, (newVal: Transaction | null) => void]} */
  const [createdTransaction, setCreatedTransaction] = useState(null);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);

  /** @type {[BuyState["type"] | null, (newVal: BuyState["type"] | null) => void]} */
  const [buyState, setBuyState] = useState(null);
  /** @type {[PurchaseTransactionHistoryItemV2 | null, (newVal: PurchaseTransactionHistoryItemV2 | null) => void]} */
  const [boughtTransaction, setBoughtTransaction] = useState(null);
  const [boughtTransactionHash, setBoughtTransactionHash] = useState(null);
  /** @type {[PaymentToken | null, (newVal: PaymentToken | null) => void]} */
  const [boughtPaymentToken, setBoughtPaymentToken] = useState(null);
  const [boughtPaymentAmountStr, setBoughtPaymentAmountStr] = useState(null);
  const [boughtModalOpen, setBoughtModalOpen] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [transactionErrorMessage, setTransactionErrorMessage] = useState(null);

  const buy = async () => {
    const account = accountData.address;
    if (apiData.presaleEnded) return toast.error("Presale has ended");
    if (!account) return toast.error("You must connect your wallet first");
    if (transactionLoading) return;
    if (!selectedToken) return;
    setTransactionLoading(true);
    try {
      if (selectedToken.symbol.toLowerCase() === "card") {
        await buyCard();
      } else {
        setBuyState(null);
        setBoughtModalOpen(true);
        setBoughtTransaction(null);
        setBoughtTransactionHash(null);
        setBoughtPaymentToken(selectedToken);
        setBoughtPaymentAmountStr(paymentAmountStr);
        setTransactionLoading(true);
        const res = await buyWithCrypto({
          paymentToken: selectedToken,
          paymentTokenNum: paymentAmountStr,
          walletAddress: account,
          onStateChanged: (state) => {
            setBuyState(state.type);
            if (state.type === "confirming") {
              setBoughtTransactionHash(state.transactionHash);
            } else if (state.type === "finished") {
              setBoughtTransaction(state.transaction);
              refetchUserData();
              refetchUserStakeData();
            } else if (state.type === "errored") {
              setTransactionErrorMessage(
                api.getApiErrorMessage(state.error, "Error sending transaction")
              );
            }
            if (state.type !== "sending") {
              setTransactionLoading(false);
            }
          },
        });
        if (!res) return setTransactionLoading(false);
        if (res.type === "created") {
          setCreatedTransaction(res.transaction);
          setTimeout(() => {
            setTransactionModalOpen(true);
          }, 50);
          setTransactionLoading(false);
        }
      }
    } catch (err) {
      console.error(err);
      setTransactionLoading(false);
    }
  };

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [erroredModalOpen, setErroredModalOpen] = useState(false);
  const [pendingModalOpen, setPendingModalOpen] = useState(false);
  const [successBoughtModalOpen, setSuccessBoughtModalOpen] = useState(false);

  const buyCard = async () => {
    try {
      const account = accountData.address;
      if (!account) return toast.error("You must connect your wallet first");
      const usdAmount = parseNum(paymentAmountStr);
      await buyWithCard({
        name: `${formatLargeNumber(parseNum(receiveAmountStr))} $SCORP2.0`,
        usd: usdAmount,
        walletAddress: account,
        onClosedEarly: () => {
          setPendingModalOpen(true);
        },
        onError: () => setErroredModalOpen(true),
        onSuccess: (tokens) => {
          if (tokens !== undefined) {
            setSuccessBoughtModalOpen(true);
          } else {
            setSuccessModalOpen(true);
          }
          refetchUserData();
          refetchUserStakeData();
        },
      });
    // eslint-disable-next-line no-unused-vars
    } catch (_) { /* empty */ }
    setTransactionLoading(false);
  };

  return (
    <div
      className="justify-between max-md:space-y-[15px] md:space-y-[10px] flex max-md:p-[12px] md:p-[24px] flex-col relative w-full min-h-full isolate"
      style={{
        borderRadius: "13.675px",
        border: "0.684px solid #D4AA49",
        background: "rgba(18, 19, 31, 0.40)",
        backdropFilter: "blur(6.837605953216553px)",
      }}
    >
      <h2
        className="text-center md:text-[25px] max-md:!text-[22px]"
        style={{
          color: "rgba(255, 255, 254, 0.50)",
        }}
      >
        {apiData.presaleEnded ? "Presale Ended" : apiData.stage?.stage_name ?? "SCORP2.0 PRESALE"}
      </h2>
      <StageBox />
      <TokenSelectGrid value={selectedToken} onChange={setSelectedToken} />

      <div
        className="rounded-[68.376px] flex items-center justify-center max-md:space-x-2 md:space-x-4 md:py-2 max-md:py-1 md:px-4 max-md:px-1 w-full"
        style={{
          background: "rgba(60, 60, 60, 0.50)",
        }}
      >
        <p className="md:!text-[14px] max-md:!text-[13px] font-[700] max-md:pr-[2px]">
          Presale Price = <span className="font-[700] text_gradient">{formatDollar(parseNum(apiData.stage?.token_price), true, 0, 6)}</span>
        </p>
        <p className="md:!text-[14px] max-md:!text-[13px]">|</p>
        <p className="md:!text-[14px] max-md:!text-[13px] font-[700] max-md:pl-[2px]">
          Listing Price = <span className="font-[700] text_gradient">$0.15</span>
        </p>
      </div>

      <TokenAmountInputs
        paymentAmountStr={paymentAmountStr}
        receiveAmountStr={receiveAmountStr}
        onPaymentAmountChange={setPaymentAmountStr}
        onReceiveAmountChange={setReceiveAmountStr}
        selectedToken={selectedToken}
      />
      <button
        onClick={async () => {
          if (accountData.isConnected) {
            buy()
          } else {
            showConnectWalletModal()
          }
        }}
        className="btn-primary !text-[20px] !text-[#000] mb-4 mt-2 w-[100%] max-md:py-[14px] md:!py-[16px]"
      >
        {accountData.isConnected ? "Buy Now" : "Connect Wallet"}
      </button>
      <div className="space-y-[8px]">
        <div className="flex justify-center space-x-3">
          <button
            className="!text-[14px] font-[700] max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="mr-1"
            >
              <path
                d="M7.50359 11.1722C7.82702 11.1722 8.08921 10.91 8.08921 10.5866C8.08921 10.2632 7.82702 10.001 7.50359 10.001C7.18016 10.001 6.91797 10.2632 6.91797 10.5866C6.91797 10.91 7.18016 11.1722 7.50359 11.1722Z"
                fill="white"
              />
              <path
                d="M7.50488 2.04883C10.6372 2.04885 13.1719 4.58388 13.1719 7.71582C13.1719 10.8482 10.6368 13.3828 7.50488 13.3828C4.37252 13.3828 1.83791 10.8478 1.83789 7.71582C1.83789 4.58345 4.37294 2.04883 7.50488 2.04883ZM7.50488 3.06055C4.93158 3.06055 2.84961 5.14286 2.84961 7.71582C2.84963 10.2891 4.93194 12.3711 7.50488 12.3711C10.0782 12.3711 12.1601 10.2888 12.1602 7.71582C12.1602 5.14253 10.0778 3.06057 7.50488 3.06055Z"
                fill="white"
                stroke="white"
                stroke-width="0.136752"
              />
              <path
                d="M7.50344 4.72852C6.46982 4.72852 5.62891 5.56943 5.62891 6.60305C5.62891 6.86187 5.83871 7.07168 6.09754 7.07168C6.35636 7.07168 6.56617 6.86187 6.56617 6.60305C6.56617 6.08624 6.98663 5.66578 7.50344 5.66578C8.02025 5.66578 8.4407 6.08624 8.4407 6.60305C8.4407 7.11985 8.02025 7.54031 7.50344 7.54031C7.24461 7.54031 7.0348 7.75012 7.0348 8.00894V9.18053C7.0348 9.43935 7.24461 9.64916 7.50344 9.64916C7.76226 9.64916 7.97207 9.43935 7.97207 9.18053V8.41827C8.77966 8.20966 9.37797 7.47491 9.37797 6.60305C9.37797 5.56943 8.53705 4.72852 7.50344 4.72852Z"
                fill="white"
              />
            </svg>
            Bonus Code
          </button>
          <button
            className="!text-[14px] font-[700] cursor-pointer max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M8.38145 7.09912C9.68959 8.40726 9.68959 10.5235 8.38145 11.8259C7.07331 13.1282 4.95703 13.134 3.65471 11.8259C2.35238 10.5177 2.34657 8.40145 3.65471 7.09912"
                stroke="white"
                stroke-width="1.02534"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.94613 8.53573C5.58566 7.17526 5.58566 4.96596 6.94613 3.59968C8.30659 2.2334 10.5159 2.23921 11.8822 3.59968C13.2485 4.96014 13.2426 7.16945 11.8822 8.53573"
                stroke="white"
                stroke-width="1.02534"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            5% Referral Link
          </button>
        </div>
        <div className="flex justify-center space-x-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#how-to-buy");
              if (element) {
                const y =
                  element.getBoundingClientRect().top +
                  window.scrollY +
                  -70;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="!text-[14px] !font-[700] cursor-pointer max-md:px-[15px] md:px-[35px] flex items-center justify-center py-[5px]"
            style={{
              borderRadius: "68.376px",
              background: "rgba(0, 0, 0, 0.50)",
            }}
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.83953 11.1722C8.16296 11.1722 8.42515 10.91 8.42515 10.5866C8.42515 10.2632 8.16296 10.001 7.83953 10.001C7.5161 10.001 7.25391 10.2632 7.25391 10.5866C7.25391 10.91 7.5161 11.1722 7.83953 11.1722Z"
                fill="white"
              />
              <path
                d="M7.84082 2.04883C10.9732 2.04885 13.5078 4.58388 13.5078 7.71582C13.5078 10.8482 10.9727 13.3828 7.84082 13.3828C4.70846 13.3828 2.17385 10.8478 2.17383 7.71582C2.17383 4.58345 4.70887 2.04883 7.84082 2.04883ZM7.84082 3.06055C5.26752 3.06055 3.18555 5.14286 3.18555 7.71582C3.18557 10.2891 5.26787 12.3711 7.84082 12.3711C10.4141 12.3711 12.4961 10.2888 12.4961 7.71582C12.4961 5.14253 10.4138 3.06057 7.84082 3.06055Z"
                fill="white"
                stroke="white"
                stroke-width="0.136752"
              />
              <path
                d="M7.83937 4.72852C6.80576 4.72852 5.96484 5.56943 5.96484 6.60305C5.96484 6.86187 6.17465 7.07168 6.43348 7.07168C6.6923 7.07168 6.90211 6.86187 6.90211 6.60305C6.90211 6.08624 7.32257 5.66578 7.83937 5.66578C8.35618 5.66578 8.77664 6.08624 8.77664 6.60305C8.77664 7.11985 8.35618 7.54031 7.83937 7.54031C7.58055 7.54031 7.37074 7.75012 7.37074 8.00894V9.18053C7.37074 9.43935 7.58055 9.64916 7.83937 9.64916C8.0982 9.64916 8.30801 9.43935 8.30801 9.18053V8.41827C9.1156 8.20966 9.71391 7.47491 9.71391 6.60305C9.71391 5.56943 8.87299 4.72852 7.83937 4.72852Z"
                fill="white"
              />
            </svg>
            How to buy
          </button>
        </div>
      </div>

   
      <div className="">
        
        <div
          className="px-[6px] py-1 w-full"
          style={{
            borderRadius: "7.442px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <p className="!text-[12px] max-w-[300px] mx-auto  text-center">
            <span className="text-[#E0AA3E] !font-[700]">Special Offer: </span>Get 20% more $SCORP2.0 tokens with the code SCORP20 (valid for a limited time)
          </p>
        </div>
      </div>

      {createdTransaction && (
        <NowpaymentsModal
          open={transactionModalOpen}
          onClose={() => {
            setTransactionModalOpen(false);
            setContactModalOpen(true);
          }}
          transaction={createdTransaction}
        />
      )}
      {boughtPaymentAmountStr !== null && boughtPaymentToken !== null && buyState !== null && (
        <WalletTransferModal
          open={boughtModalOpen}
          onClose={() => {
            setBoughtModalOpen(false);
            setContactModalOpen(true);
          }}
          payCurrency={boughtPaymentToken}
          payAmount={boughtPaymentAmountStr}
          state={buyState}
          transactionHash={boughtTransactionHash}
          transaction={boughtTransaction}
          transactionError={transactionErrorMessage}
        />
      )}
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <Modal
        title="Transaction Successful"
        open={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction was successful. Please wait a minute and refresh the
          transactions tab to see your package.
        </p>
      </Modal>
      <Modal
        title="Transaction Successful"
        open={successBoughtModalOpen}
        onClose={() => {
          setSuccessBoughtModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction was successful. You bought{" "}
          {boughtTransaction?.tokens_bought ?? "Unknown"} DOGEBALL.
        </p>
      </Modal>
      <Modal
        title="Transaction Errored"
        open={erroredModalOpen}
        onClose={() => setErroredModalOpen(false)}
      >
        <p>The transaction was not successful. Please try again.</p>
      </Modal>
      <Modal
        title="Transaction Pending"
        open={pendingModalOpen}
        onClose={() => {
          setPendingModalOpen(false);
          setContactModalOpen(true);
        }}
      >
        <p>
          The transaction is pending. Please wait a minute and refresh the
          transactions tab to see your tokens.
        </p>
      </Modal>
    </div>
  );
};

export default Wallet;
