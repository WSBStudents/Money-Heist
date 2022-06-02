import { useEffect } from "react";
import useTransaction from "../../hooks/use-transaction/use-transaction";
import HistoryTransaction from "../../components/history-transaction/history-transaction";

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
