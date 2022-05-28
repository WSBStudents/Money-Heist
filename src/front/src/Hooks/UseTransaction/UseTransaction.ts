import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { BudgetFormData } from "../../Components/Pages/Budget/BudgetForm/BudgetForm.types";
import { TransactionFormData } from "../../Components/Pages/TransactionForm/TransactionForm.types";

const useTransaction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const getTransactions = () => {
    setIsLoading(true);
    axios
      .get("")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        throw new Error("Wystąpił błąd podczas pobierania transkacji", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const saveTransaction = (values: TransactionFormData) => {
    setIsLoading(true);
    axios
      .post("", values)
      .then((response) => {
        message.success("Pomyślnie dodano transkację");
      })
      .catch((error) => {
        message.error("Wystąpił błąd podczas dodawania transkacji");
        throw new Error("Wystąpił błąd podczas dodawania transkacji", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteTransaction = (id: number) => {
    setIsLoading(true);
    axios
      .delete("", {
        params: id,
      })
      .then((response) => {
        message.success("Pomyślnie dodano transkację");
      })
      .catch((error) => {
        message.error("Wystąpił błąd podczas usuwania transkacji");
        throw new Error("Wystąpił błąd podczas usuwania transkacji", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    transactions,
    saveTransaction,
    deleteTransaction,
    getTransactions,
  };
};

export default useTransaction;
