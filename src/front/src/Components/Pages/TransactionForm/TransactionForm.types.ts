import { BudgetData } from "../Budget/BudgetForm/BudgetForm.types";

export enum TransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export type TransactionFormData = {
  id: number;
  label: string;
  amount: string;
  budget: Pick<BudgetData, "id">;
  description: string;
  type: TransactionType;
};
