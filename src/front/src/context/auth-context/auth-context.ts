import React from "react";

export type AuthContextTypes = {
  isAuth: boolean;
  login: (x: string, y: string) => void;
  logout: () => void;
  handleUserPage: () => void;
  loginPage: boolean;
  userName: string;
};

const AuthContext = React.createContext<AuthContextTypes>({
  isAuth: true,
  loginPage: true,
  handleUserPage: () => ({}),
  login: (x: string, y: string) => ({}),
  logout: () => ({}),
  userName: "username",
});

export default AuthContext;
