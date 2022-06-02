import { Content } from "antd/lib/layout/layout";
import "./home-page.scss";
import Title from "antd/lib/typography/Title";
import useTransaction from "../../hooks/use-transaction/use-transaction";
import { Spin } from "antd";
import useBudget from "../../hooks/use-budget/use-budget";
import AmountCard from "../../components/amount-card/amount-card";
import { useEffect } from "react";
import HistoryTransaction from "../../components/history-transaction/history-transaction";

const HomePage: React.FC = () => {
  const { isLoading, transactions, getTransactions } = useTransaction();
  const { budgetAmount, getBudgetAmount } = useBudget();
  useEffect(() => {
    getTransactions(5);
    getBudgetAmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
