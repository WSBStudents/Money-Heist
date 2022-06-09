import { message } from "antd";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/types/api-types";
import BudgetContext from "../budget-context/budget-context";
import AuthContext from "./auth-context";

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { clearBudgets } = React.useContext(BudgetContext);

  const login = (username: string, password: string) => {
    axios
      .post(`${API_URL}/auth/signin`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "userToken",
          `Bearer ${response.data.accessToken}`
        );
        setUserName(response.data.username);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        message.error("Użytkownik nie istnieje lub błędne dane");
        throw new Error("Wystąpił błąd logowania", error);
      });
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setIsAuth(false);
    clearBudgets();
    navigate("/login");
  };

  const handleUserPage = useCallback(() => {
    setLoginPage(!loginPage);
  }, [loginPage]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login,
        logout,
        handleUserPage,
        loginPage,
        userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
