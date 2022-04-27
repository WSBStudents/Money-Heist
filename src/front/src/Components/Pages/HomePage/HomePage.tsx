import { Content } from "antd/lib/layout/layout";
import "./HomePage.scss";
import Title from "antd/lib/typography/Title";
import AmountCard from "../../Molecules/AmountCard/AmountCard";
import HistoryTransaction from "../HistoryTransaction/HistoryTransaction";

const HomePage: React.FC = () => {
  return (
    <Content className="homePage__wrapper">
      <Title level={2}>Witaj, username</Title>
      <Title level={4}>
        Tutaj znajdują się informacje, które zebraliśmy o Twoich płatnościach
      </Title>

      <AmountCard />

      <Title level={2} className="homePage__margin-top">
        Historia Transakcji
      </Title>
      <HistoryTransaction disableHeader />
    </Content>
  );
};

export default HomePage;
