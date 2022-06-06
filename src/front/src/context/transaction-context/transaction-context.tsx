import { FormInstance } from "antd";
import { createContext } from "react";
import { TransactionFormData } from "../../components/forms/transaction-form/transaction-form-types";

const TransactionContext = createContext({
  transactions: [] as TransactionFormData[],
  isLoading: false,
  saveTransaction: (_values: TransactionFormData) => {},
  deleteTransaction: (_id: number) => {},
  getTransactions: (_numberTransactionsToFetch?: number) => {},
  getTransactionsForBudget: (_budgetId?: number) => {},
  form: {} as FormInstance<any>,
});

export default TransactionContext;
