import React from "react";

export type AuthContextTypes = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
  handleUserPage: () => void;
  loginPage: boolean;
};

const AuthContext = React.createContext<AuthContextTypes>({
  isAuth: true,
  loginPage: true,
  handleUserPage: () => ({}),
  login: () => ({}),
  logout: () => ({}),
});

export default AuthContext;
