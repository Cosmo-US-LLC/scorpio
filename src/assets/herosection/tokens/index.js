import ada from "./ada.svg";
import avax from "./avax.svg";
import bch from "./bch.svg";
import bnb from "./bnb.svg";
import btc from "./btc.svg";
import busd from "./busd.svg";
import card from "./card.svg";
import visaCard from "./visacard.svg";
import cro from "./cro.svg";
import doge from "./doge.svg";
import etc from "./etc.svg";
import eth from "./eth.svg";
import fil from "./fil.svg";
import ltc from "./ltc.svg";
import matic from "./matic.svg";
import pepe from "./pepe.svg";
import shib from "./shib.svg";
import sol from "./sol.svg";
import ton from "./ton.svg";
import trx from "./trx.svg";
import usdc from "./usdc.svg";
import usdt from "./usdt.svg";
import xlm from "./xlm.svg";
import xrp from "./xrp.svg";

/** ✅ Token image map (must be defined before using in arrays) */
export const tokenImageMap = {
  ada,
  avax,
  bch,
  bnb,
  btc,
  busd,
  card,
  visaCard,
  cro,
  doge,
  etc,
  eth,
  fil,
  ltc,
  matic,
  pepe,
  shib,
  sol,
  ton,
  trx,
  usdc,
  usdt,
  xlm,
  xrp,
};

/** ✅ Local token list */
export const LOCAL_TOKENS = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    chain: "BITCOIN",
    icon: tokenImageMap["btc"],
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    chain: "ERC-20",
    icon: tokenImageMap["eth"],
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    chain: "TRC-20",
    icon: tokenImageMap["usdt"],
  },
];

/** ✅ Local wallet list */
export const LOCAL_WALLETS = [
  {
    id: 1,
    name: "MetaMask",
    type: "EVM",
    icon: tokenImageMap["eth"],
  },
  {
    id: 2,
    name: "Trust Wallet",
    type: "Multi-chain",
    icon: tokenImageMap["bnb"],
  },
  {
    id: 3,
    name: "Phantom",
    type: "Solana",
    icon: tokenImageMap["sol"],
  },
  {
    id: 4,
    name: "Phantom",
    type: "Solana",
    icon: tokenImageMap["sol"],
  },
  {
    id: 5,
    name: "MetaMask",
    type: "EVM",
    icon: tokenImageMap["eth"],
  },
  {
    id: 6,
    name: "Phantom",
    type: "Solana",
    icon: tokenImageMap["sol"],
  },
];


