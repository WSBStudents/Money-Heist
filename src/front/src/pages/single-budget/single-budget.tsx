import { Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import HeaderTitle from "../../components/header-title/header-tilte";
import AmountCard from "../../components/amount-card/amount-card";
import HistoryTransaction from "../../components/history-transaction/history-transaction";
import TransactionContext from "../../context/transaction-context/transaction-context";
import BudgetContext from "../../context/budget-context/budget-context";

const BudgetCard: React.FC = () => {
  const { id } = useParams();
  const budgetID = Number(id) ?? 0;
  const { transactions, getTransactionsForBudget } =
    useContext(TransactionContext);
  const navigate = useNavigate();
  const { deleteBudget, getBudget, budget, isLoading } =
    useContext(BudgetContext);
  const deleteSingleBudget = () => {
    deleteBudget(budgetID);
    navigate("/budget");
  };

  useEffect(() => {
    getTransactionsForBudget(budgetID);
    getBudget(budgetID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgetID]);
  return (
    <Spin spinning={isLoading}>
      {id && (
        <HeaderTitle title={budget.label} deleteBudgetId={deleteSingleBudget} />
      )}
      <Title level={4}>
        Tutaj znajdują się informacje, które zebraliśmy o Twoich płatnościach
      </Title>

      <AmountCard budgetAmount={Number(budget.amount)} />

      <Title level={2} className="homePage__margin-top">
        Historia Transakcji
      </Title>
      <HistoryTransaction
        disableHeader
        transactions={transactions}
        isLoading={isLoading}
      />
    </Spin>
  );
};

export default BudgetCard;
