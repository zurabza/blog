import React, { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const login = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return <LoginContext.Provider value={{ isLoggedIn, login }}>{children}</LoginContext.Provider>;
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  return context;
};
