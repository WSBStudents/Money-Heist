import { useEffect } from "react";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import HistoryTransaction from "../../Organisms/HistoryTransaction/HistoryTransaction";

const Transaction: React.FC = () => {
  const { getTransactions, transactions, isLoading } = useTransaction();
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <HistoryTransaction
      manageHistory
      transactions={transactions}
      isLoading={isLoading}
    />
  );
};

export default Transaction;
