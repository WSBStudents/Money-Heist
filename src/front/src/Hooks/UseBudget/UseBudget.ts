import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { BudgetFormData } from "../../Components/Pages/Budget/BudgetForm/BudgetForm.types";

const useBudget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const getBudgets = () => {
    setIsLoading(true);
    axios
      .get("")
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
  const saveBudget = (values: BudgetFormData) => {
    setIsLoading(true);
    axios
      .post("", values)
      .then((response) => {
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
      .delete("", {
        params: id,
      })
      .then((response) => {
        message.success("Pomyślnie dodano budżet");
      })
      .catch((error) => {
        message.error("Wystąpił błąd podczas usuwania budżetu");
        throw new Error("Wystąpił błąd podczas usuwania budżetu", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, budgets, saveBudget, deleteBudget, getBudgets };
};

export default useBudget;
