import { Content } from "antd/lib/layout/layout";
import "./HomePage.scss";
import Title from "antd/lib/typography/Title";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import { Spin } from "antd";
import useBudget from "../../../Hooks/UseBudget/UseBudget";
import AmountCard from "../../Molecules/AmountCard/AmountCard";
import HistoryTransaction from "../../Organisms/HistoryTransaction/HistoryTransaction";
import { useEffect } from "react";

const HomePage: React.FC = () => {
  const { isLoading, transactions, getTransactions } = useTransaction();
  const { budgetAmount, getBudgetAmount } = useBudget();
  useEffect(() => {
    getTransactions(5);
    getBudgetAmount();
  });
  return (
    <Content className="homePage__wrapper">
      <Spin spinning={isLoading}>
        <Title level={2}>Witaj, username</Title>
        <Title level={4}>
          Tutaj znajdują się informacje, które zebraliśmy o Twoich płatnościach
        </Title>

        <AmountCard budgetAmount={budgetAmount} />

        <Title level={2} className="homePage__margin-top">
          Historia Transakcji
        </Title>
        <HistoryTransaction
          disableHeader
          transactions={transactions}
          isLoading={isLoading}
        />
      </Spin>
    </Content>
  );
};

export default HomePage;
