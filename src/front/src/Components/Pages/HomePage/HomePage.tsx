import { Content } from "antd/lib/layout/layout";
import "./HomePage.scss";
import Title from "antd/lib/typography/Title";
import BudgetCard from "../Budget/BudgetCard/BudgetCard";
import useTransaction from "../../../Hooks/UseTransaction/UseTransaction";
import { Spin } from "antd";

const HomePage: React.FC = () => {
  const { isLoading } = useTransaction(5);

  return (
    <Content className="homePage__wrapper">
      <Spin spinning={isLoading}>
        <Title level={2}>Witaj, username</Title>
        <BudgetCard />
      </Spin>
    </Content>
  );
};

export default HomePage;
