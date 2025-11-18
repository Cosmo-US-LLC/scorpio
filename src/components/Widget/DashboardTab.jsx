import TransactionHistoryList from "./TransactionHistoryList"
import UserReferralData from "./UserReferralData"

const DashboardTab = () => {
  return (
    <>
      <UserReferralData />
      <p className="text-sm font-[500]">Transactions</p>
      <TransactionHistoryList />
    </>
  )
}

export default DashboardTab