import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import {
  BudgetData,
  BudgetFormData,
} from "../../components/forms/budget-form/budget-form-types";
import { API_URL, HEADER } from "../../utils/types/api-types";
import BudgetContext from "./budget-context";

const BudgetProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [budgets, setBudgets] = useState<BudgetData[]>([]);
  const [budget, setBudget] = useState<BudgetData>({} as BudgetData);
  const [budgetAmount, setBudgetAmount] = useState(0);
  const getBudgets = () => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/budget/all`)
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((error) => {
        throw new Error("Wystąpił błąd podczas pobierania budżetów", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getBudget = (id: number) => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/budget`, {
        params: {
          id,
        },
      })
      .then((response) => {
        setBudget(response.data);
      })
      .catch((error) => {
        throw new Error("Wystąpił błąd podczas pobierania budżetu", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const saveBudget = (values: BudgetFormData) => {
    setIsLoading(true);
    axios
      .post(
        `${API_URL}/budget`,
        { ...values, amount: values.amount ?? 0 },
        {
          headers: {
            "Access-Control-Allow-Origin": `${HEADER}`,
          },
        }
      )
      .then((response) => {
        setBudgets([response.data, ...budgets]);
        message.success("Pomyślnie dodano budżet");
      })
      .catch((error) => {
        message.error("Wystąpił błąd podczas dodawania budżetu");
        throw new Error("Wystąpił błąd podczas dodawania budżetu", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteBudget = (id: number) => {
    setIsLoading(true);
    axios
      .delete(`${API_URL}/budget`, {
        params: {
          id,
        },
      })
      .then(() => {
        setBudgets((prevState) =>
          prevState.filter((budget) => budget.id !== id)
        );
        message.success("Pomyślnie usunięto budżet");
      })
      .catch((error) => {
        message.error("Wystąpił błąd podczas usuwania budżetu");
        throw new Error("Wystąpił błąd podczas usuwania budżetu", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getBudgetAmount = () => {
    axios
      .get(`${API_URL}/budget/all/amount`)
      .then((response) => {
        setBudgetAmount(response.data);
      })
      .catch((error) => {
        throw new Error(
          "Wystąpił błąd podczas pobierania kwoty budżetów",
          error
        );
      });
  };

  return (
    <BudgetContext.Provider
      value={{
        isLoading,
        budgets,
        saveBudget,
        deleteBudget,
        getBudgets,
        getBudget,
        budget,
        getBudgetAmount,
        budgetAmount,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
