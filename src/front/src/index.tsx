import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/auth-context/auth-provider";
import AppRoutes from "./routes/app-routes";
import TransactionProvider from "./context/transaction-context/transaction-provider";
import BudgetProvider from "./context/budget-context/budget-provider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <BudgetProvider>
        <TransactionProvider>
          <AppRoutes />
        </TransactionProvider>
      </BudgetProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
