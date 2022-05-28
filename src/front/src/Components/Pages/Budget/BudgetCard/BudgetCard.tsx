import { Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { useNavigate, useParams } from "react-router-dom";
import useBudget from "../../../../Hooks/UseBudget/UseBudget";

import useTransaction from "../../../../Hooks/UseTransaction/UseTransaction";
import HeaderTitle from "../../../Atoms/HeaderTitle/HeaderTilte";
import AmountCard from "../../../Molecules/AmountCard/AmountCard";
import HistoryTransaction from "../../HistoryTransaction/HistoryTransaction";

const BudgetCard: React.FC = () => {
  const { transactions } = useTransaction(5);
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteBudget, isLoading } = useBudget();
  const deleteSingleBudget = () => {
    deleteBudget(Number(id));
    navigate("/budget");
  };
  return (
    <Spin spinning={isLoading}>
      {id && <HeaderTitle title={id} deleteBudgetId={deleteSingleBudget} />}
      <Title level={4}>
        Tutaj znajdują się informacje, które zebraliśmy o Twoich płatnościach
      </Title>

      <AmountCard />

      <Title level={2} className="homePage__margin-top">
        Historia Transakcji
      </Title>
      <HistoryTransaction disableHeader transactionsData={transactions} />
    </Spin>
  );
};

export default BudgetCard;
