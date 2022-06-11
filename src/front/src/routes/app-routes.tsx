import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import BudgetCard from "../pages/single-budget/single-budget";
import BudgetForm from "../components/forms/budget-form/budget-form";
import Budget from "../pages/budgets/budgets";
import HomePage from "../pages/home-page/home-page";
import Transaction from "../pages/transactions/transactions";
import TransactionForm from "../components/forms/transaction-form/transaction-form";
import AuthContext from "../context/auth-context/auth-context";
import InitialLoginPage from "../pages/initial-login-page/initial-login-page";
import App from "../App";

const AppRoutes: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path={"/login"} element={<InitialLoginPage />} />
      {isAuth && (
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="transaction-history" element={<Transaction />} />
          <Route path="add-transaction" element={<TransactionForm />} />
          <Route path="budget" element={<Budget />} />
          <Route path="add-budget" element={<BudgetForm />} />
          <Route path="budget/:id" element={<BudgetCard />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
