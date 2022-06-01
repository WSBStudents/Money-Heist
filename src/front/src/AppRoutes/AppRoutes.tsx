import { Route, Routes } from "react-router-dom";
import BudgetCard from "../Components/Pages/Budget/BudgetCard/BudgetCard";
import BudgetForm from "../Components/Pages/Budget/BudgetForm/BudgetForm";
import Budget from "../Components/Pages/Budget/Budgets";
import HomePage from "../Components/Pages/HomePage/HomePage";
import Transaction from "../Components/Pages/Transaction/Transaction";
import TransactionForm from "../Components/Pages/Transaction/TransactionForm/TransactionForm";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transaction-history" element={<Transaction />} />
      <Route path="/add-transaction" element={<TransactionForm />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/add-budget" element={<BudgetForm />} />
      <Route path="/budget/:id" element={<BudgetCard />} />
    </Routes>
  );
};

export default AppRoutes;
