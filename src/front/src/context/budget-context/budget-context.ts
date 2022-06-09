import { createContext } from "react";
import {
  BudgetData,
  BudgetFormData,
} from "../../components/forms/budget-form/budget-form-types";

const BudgetContext = createContext({
  isLoading: false,
  budgets: [] as BudgetData[],
  saveBudget: (_values: BudgetFormData) => {},
  deleteBudget: (_id: number) => {},
  getBudgets: () => {},
  getBudget: (_id: number) => {},
  budget: {} as BudgetData,
  getBudgetAmount: () => {},
  budgetAmount: 0,
  clearBudgets: () => {},
});

export default BudgetContext;
