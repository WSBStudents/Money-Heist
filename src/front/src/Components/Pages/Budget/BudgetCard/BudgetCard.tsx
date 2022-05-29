import { Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBudget from "../../../../Hooks/UseBudget/UseBudget";

import useTransaction from "../../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../../Atoms/HeaderTitle/HeaderTilte";
import AmountCard from "../../../Molecules/AmountCard/AmountCard";
import HistoryTransaction from "../../../Organisms/HistoryTransaction/HistoryTransaction";

const BudgetCard: React.FC = () => {
  const { id } = useParams();
  const budgetID = Number(id) ?? 0;
  const { transactions, getTransactionsForBudget } = useTransaction();
  const navigate = useNavigate();
  const { deleteBudget, getBudget, budget, isLoading } = useBudget();
  const deleteSingleBudget = () => {
    deleteBudget(budgetID);
    navigate("/budget");
  };

  useEffect(() => {
    getTransactionsForBudget(budgetID);
    getBudget(budgetID);
  });
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
