export type BudgetFormData = {
  label: string;
  amount: string;
  description: string;
};

export type BudgetData = BudgetFormData & { id: number };
