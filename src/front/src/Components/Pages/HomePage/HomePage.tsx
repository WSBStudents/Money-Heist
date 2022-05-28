import { Content } from "antd/lib/layout/layout";
import "./HomePage.scss";
import Title from "antd/lib/typography/Title";
import BudgetCard from "../Budget/BudgetCard/BudgetCard";

const HomePage: React.FC = () => {
  return (
    <Content className="homePage__wrapper">
      <Title level={2}>Witaj, username</Title>
      <BudgetCard />
    </Content>
  );
};

export default HomePage;
