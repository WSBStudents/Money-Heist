import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { TransactionFormData } from "../../Components/Pages/Transaction/TransactionForm/TransactionForm.types";
import { API_URL } from "../../Utils/Types/Api";

const useTransaction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<TransactionFormData[]>([]);
  const getTransactions = (numberTransactionsToFetch?: number) => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/transaction`, {
        params: { count: numberTransactionsToFetch },
      })
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
  const getTransactionsForBudget = (budgetId?: number) => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/transaction/all`, {
        params: { id: budgetId },
      })
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
      .post(`${API_URL}/transaction`, {
        ...values,
        amount: Number(values.amount),
      })
      .then((response) => {
        setTransactions([response.data, ...transactions]);
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
      .delete(`${API_URL}/transaction`, {
        params: { id },
      })
      .then(() => {
        setTransactions((prevState) =>
          prevState.filter((transaction) => transaction.id !== id)
        );
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
    getTransactionsForBudget,
    isLoading,
    transactions,
    saveTransaction,
    deleteTransaction,
    getTransactions,
  };
};

export default useTransaction;
