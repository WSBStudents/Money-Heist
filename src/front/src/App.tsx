import { Layout } from "antd";
import HistoryTransaction from "./Components/Pages/HistoryTransaction/HistoryTransaction";
import Login from "./Components/Pages/Login/Login";

import Navigation from "./Components/Pages/Navigation/Navigation";
import TransactionForm from "./Components/Pages/TransactionForm/TransactionForm";
const App: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <Navigation />
      <Layout>
        <Content style={{ margin: "24px 16px" }}>
          <TransactionForm />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
