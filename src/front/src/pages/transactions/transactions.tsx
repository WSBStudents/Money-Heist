import { useContext, useEffect } from "react";
import HistoryTransaction from "../../components/history-transaction/history-transaction";
import TransactionContext from "../../context/transaction-context/transaction-context";

const Transaction: React.FC = () => {
  const { getTransactions, transactions, isLoading } =
    useContext(TransactionContext);

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
