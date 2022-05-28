import Title from "antd/lib/typography/Title";
import AmountCard from "../../../Molecules/AmountCard/AmountCard";
import HistoryTransaction from "../../HistoryTransaction/HistoryTransaction";

const BudgetCard: React.FC = () => {
  return (
    <>
      <Title level={4}>
        Tutaj znajdują się informacje, które zebraliśmy o Twoich płatnościach
      </Title>

      <AmountCard />

      <Title level={2} className="homePage__margin-top">
        Historia Transakcji
      </Title>
      <HistoryTransaction disableHeader />
    </>
  );
};

export default BudgetCard;
