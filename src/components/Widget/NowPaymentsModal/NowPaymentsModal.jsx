import { QRCodeCanvas } from "@akamfoad/qrcode";
import clsx from "clsx";
import Modal from "../Modal";
import classes from "./NowPaymentsModal.module.css";
import CheckCircleIcon from "@/assets/icons/check-circle.svg?component-react";
import ClockIcon from "@/assets/icons/clock.svg?component-react";
import ErrorIcon from "@/assets/icons/error.svg?component-react";
import { useEffect, useMemo, useState } from "react";
import {
  capitalize,
  copyText,
  waitForNextTransaction,
  zeroPad,
} from "@/presale-gg/util";
import { refetchUserData, refetchUserStakeData } from "@/presale-gg/stores";
import { useAccount } from "@/presale-gg/web3";

const EXPIRES_IN_MS = 60 * 60 * 1000;

/**
 * @typedef {import("@/presale-gg/api/api.types").API.Transaction} Transaction
 * @typedef {import("@/presale-gg/api/api.types").API.PurchaseTransactionHistoryItemV2} PurchaseTransactionHistoryItemV2
 * @typedef {"paid" | "unpaid" | "expired"} Status
 * 
 * @param {import("../Modal").ModalProps & {transaction: Transaction}} props
 */
const NowpaymentsModal = ({
  transaction,
  ...others
}) => {
  /** @type {[HTMLCanvasElement | null, (newVal: HTMLCanvasElement | null) => void]} */
  const [qrRef, setQrRef] = useState(null);
  /** @type {[Status, (newVal: Status) => void]} */
  const [status, setStatus] = useState("unpaid");
  /** @type {[PurchaseTransactionHistoryItemV2 | null, (newVal: PurchaseTransactionHistoryItemV2 | null) => void]} */
  const [completedTransaction, setCompletedTransaction] = useState(null);
  const accountData = useAccount();
  const [createdAt, setCreatedAt] = useState(Date.now() - 1000);
  const [expiresInMs, setExpiresInMs] = useState(EXPIRES_IN_MS);

  const timeStr = useMemo(() => {
    const mins = Math.floor(expiresInMs / (60 * 1000));
    const secs = Math.floor((expiresInMs - mins * 60 * 1000) / 1000);
    return `${zeroPad(Math.floor(mins), 2)}:${zeroPad(Math.floor(secs), 2)}`;
  }, [expiresInMs]);

  useEffect(() => {
    if (!others.open) return;
    const interval = setInterval(() => {
      const diff = Math.max(createdAt + EXPIRES_IN_MS - Date.now(), 0);
      if (diff === 0 && status === "unpaid") setStatus("expired");
      setExpiresInMs(diff);
    }, 1_000);
    return () => clearInterval(interval);
  }, [others.open, createdAt, status]);

  useEffect(() => {
    setStatus("unpaid");
    setCreatedAt(Date.now() - 1000);
  }, [transaction]);

  useEffect(() => {
    if (!accountData.address || !others.open) return;
    const abortController = new AbortController();
    waitForNextTransaction(accountData.address, createdAt, undefined, {
      signal: abortController.signal,
    }).then((trx) => {
      refetchUserStakeData();
      refetchUserData().finally(() => {
        if (abortController.signal.aborted) return;
        setStatus("paid");
        setCompletedTransaction(trx);
      });
    });
    return () => abortController.abort();
  });

  useEffect(() => {
    if (!qrRef) return;
    new QRCodeCanvas(transaction.pay_address).draw(qrRef);
  }, [qrRef, transaction.pay_address]);

  const statusCols = {
    paid: "#abdbf3",
    unpaid: "#fff",
    expired: "#ff3333",
  };

  return (
    <Modal
      {...others}
      className={clsx(
        classes["transaction-modal"],
        classes[`status-${status.replace("_", "-")}`]
      )}
      title="Transaction"
      style={{ "--status-col": statusCols[status] }}
    >
      <div className={classes["payment-status"]}>
        <div className={classes["status-text-container"]}>
          <div className={classes["status-label"]}>
            {status === "paid" && <CheckCircleIcon />}
            {status === "unpaid" && <ClockIcon />}
            {status === "expired" && <ErrorIcon />}
            {capitalize(status)}
          </div>
          {status === "unpaid" && (
            <p className={classes["status-time"]}>Expires in {timeStr}</p>
          )}
        </div>
        <div
          className={classes["status-bar"]}
          style={
            { "--frac": `${1 - expiresInMs / EXPIRES_IN_MS}` }
          }
        />
      </div>
      {status === "unpaid" && (
        <>
          <div className={classes["payment-details"]}>
            <canvas ref={setQrRef} className={classes["qr"]} />
            <div className={classes["payment-values"]}>
              <NumberValue
                value={transaction.pay_amount}
                label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
              />
              <NumberValue
                value={transaction.payment_id}
                label={`Payment ID`}
              />
            </div>
          </div>
          {transaction.payin_extra_id && (
            <>
              <NumberValue
                value={transaction.payin_extra_id}
                label="Destination Tag"
              />
              <p className={classes["hint-text"]}>
                You <span className={classes["bold"]}>must include</span> the
                destination tag in the transaction or you will not receive your
                tokens
              </p>
            </>
          )}
          <NumberValue
            value={transaction.pay_address}
            label={`Payment address`}
          />
          <p className={classes["hint-text"]}>
            Pay{" "}
            <span className={classes["bold"]}>{transaction.pay_amount}</span> of{" "}
            <span className={classes["bold"]}>
              {transaction.pay_currency.toUpperCase()}
            </span>{" "}
            on the{" "}
            <span className={classes["bold"]}>
              {transaction.network.toUpperCase()}
            </span>{" "}
            network
            {transaction.payin_extra_id ? (
              <>
                , with the destination tag of{" "}
                <span className={classes["bold"]}>
                  {transaction.payin_extra_id}
                </span>
              </>
            ) : (
              ""
            )}{" "}
            to the address above to confirm the payment.
          </p>
          <p className={classes["hint-text"]}>
            The tokens will automatically be deposited upon received payment.
            Note that it can take between 10 minutes and 1 hour for transactions
            to go through.
          </p>
          <p className={classes["hint-text"]}>
            Refresh the page to check your balance.
          </p>
        </>
      )}
      {status === "expired" && (
        <>
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className={classes["hint-text"]}>
            This transaction has expired, do not send any more tokens as they
            may be lost. To try again create a new transaction.
          </p>
        </>
      )}
      {status === "paid" && (
        <>
          <NumberValue
            value={transaction.pay_amount}
            label={`Pay amount (${transaction.pay_currency.toUpperCase()})`}
          />
          <NumberValue
            value={completedTransaction?.tokens_bought ?? "0"}
            label={`You Received ($SCORP2.0)`}
            noCopy
          />
          <NumberValue value={transaction.payment_id} label={`Payment ID`} />
          <p className={classes["hint-text"]}>
            This transaction has completed successfully, do not send any more
            tokens as they may be lost. To try again create a new transaction.
          </p>
        </>
      )}
    </Modal>
  );
};

export default NowpaymentsModal;

/**
 * @param {object} props 
 * @param {string | number} props.value
 * @param {string} props.label
 * @param {boolean} [props.noCopy]
 */
export const NumberValue = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[14px] font-[700]">{props.label}</p>
      <div className="flex gap-2 h-12 px-2 py-[0.125rem] rounded-[8px] walletinput_bg">
        <input
          size={1}
          className="flex-1 outline-none"
          placeholder="0"
          value={props.value}
          readOnly
        />
        <button
          className={
            "bg-[#fff] text-[#000] font-bold text-xs px-2 leading-[1] rounded-md hover:brightness-125 w-[3.75rem] h-8 text-center flex items-center justify-center my-auto cursor-pointer"
          }
          onClick={() => copyText(props.value.toString())}
        >
          Copy
        </button>
      </div>
    </div>
  );
};
