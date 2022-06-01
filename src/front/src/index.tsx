import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthContext/AuthProvider";
import AuthContext from "./Context/AuthContext/AuthContext";
import BudgetCard from "./Components/Pages/Budget/BudgetCard/BudgetCard";
import BudgetForm from "./Components/Pages/Budget/BudgetForm/BudgetForm";
import Budget from "./Components/Pages/Budget/Budgets";
import HomePage from "./Components/Pages/HomePage/HomePage";
import Transaction from "./Components/Pages/Transaction/Transaction";
import TransactionForm from "./Components/Pages/Transaction/TransactionForm/TransactionForm";
import UserManage from "./Components/Pages/UserManage/UserManage";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <AuthContext.Consumer>
        {(user) => {
          return (
            <Routes>
              <Route path={"/login"} element={<UserManage />} />
              {user.isAuth && (
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
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
