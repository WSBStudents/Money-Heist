import { message } from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/types/api-types";
import AuthContext from "./auth-context";

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const navigate = useNavigate();

  const login = (username: string, password: string) => {
    axios
      .post(`${API_URL}/auth/signin`, {
        params: {
          username,
          password,
        },
      })
      .then((response) => {
        // setBudgets(response.data);
        console.log(response);
        localStorage.setItem("userToken", "");
        setIsAuth(true);
      })
      .catch((error) => {
        message.error("Użytkownik nie istnieje lub błędne dane");
        throw new Error("Wystąpił błąd logowania", error);
      });

    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setIsAuth(false);
    navigate("/login");
  };

  const handleUserPage = useCallback(() => {
    setLoginPage(!loginPage);
  }, [loginPage]);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [login, logout, localStorage.getItem("userToken")]);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login,
        logout,
        handleUserPage,
        loginPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
