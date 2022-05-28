import { BudgetData } from "../Budget/BudgetForm/BudgetForm.types";

export enum TransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export type TransactionFormData = {
  id: number;
  label: string;
  amount: string;
  budget: BudgetData;
  description: string;
  type: TransactionType;
};
