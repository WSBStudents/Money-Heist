import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";
// import AuthContext from "./AuthContext"

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [loginPage, setLoginPage] = useState(true);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
    console.log("login ", isAuth);
    navigate("/");
  };

  const logout = () => {
    setIsAuth(false);
    console.log("logout ", isAuth);
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
