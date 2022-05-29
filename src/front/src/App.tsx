import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Budget from "./Components/Pages/Budget/Budgets";
import BudgetForm from "./Components/Pages/Budget/BudgetForm/BudgetForm";

import HomePage from "./Components/Pages/HomePage/HomePage";
import Login from "./Components/Pages/Login/Login";
import Navigation from "./Components/Pages/Navigation/Navigation";
import TransactionForm from "./Components/Pages/Transaction/TransactionForm/TransactionForm";
import BudgetCard from "./Components/Pages/Budget/BudgetCard/BudgetCard";
import Transaction from "./Components/Pages/Transaction/Transaction";

const App: React.FC = () => {
  document.title = "Zaliczenie na 5";
  return (
    <Layout style={{ height: "100vh" }}>
      <Navigation />
      <Layout style={{ margin: "24px 16px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/transaction-history" element={<Transaction />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/add-budget" element={<BudgetForm />} />
          <Route path="/budget/:id" element={<BudgetCard />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
