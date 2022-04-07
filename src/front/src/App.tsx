import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Budget from "./Components/Pages/Budget/Budget";
import HistoryTransaction from "./Components/Pages/HistoryTransaction/HistoryTransaction";

import HomePage from "./Components/Pages/HomePage/HomePage";
import Navigation from "./Components/Pages/Navigation/Navigation";
import TransactionForm from "./Components/Pages/TransactionForm/TransactionForm";

const App: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Navigation />
      <Layout style={{ margin: "24px 16px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transaction-history" element={<HistoryTransaction />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
