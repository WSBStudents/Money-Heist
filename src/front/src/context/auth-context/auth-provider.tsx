import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    navigate("/");
  };

  const logout = () => {
    setIsAuth(false);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
