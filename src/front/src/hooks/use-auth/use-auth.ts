import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [loginPage, setLoginPage] = useState(true);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("user", "Smith");
    navigate("/");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleUserPage = useCallback(() => {
    setLoginPage(!loginPage);
  }, [loginPage]);

  useEffect(() => {
    console.log("isAuth ", isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsAuth(true);
      localStorage.setItem("user", "Ralfons");
    } else {
      setIsAuth(false);
    }
  }, [localStorage.getItem("user")]);
  return { isAuth, login, logout, handleUserPage, loginPage };
};
