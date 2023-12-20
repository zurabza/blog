import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  return <LoginContext.Provider value={{ isLoggedIn, login }}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  return context;
};
