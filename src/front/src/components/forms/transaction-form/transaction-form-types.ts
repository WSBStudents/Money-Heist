import { BudgetData } from "../budget-form/budget-form-types";

export enum TransactionType {
  EXPENSE = "EXPENSE",
  INCOME = "INCOME",
}

export type TransactionFormData = {
  id: number;
  label: string;
  amount: string;
  budgetId: Pick<BudgetData, "id">;
  description: string;
  type: TransactionType;
};
