import React, { createContext, useState, useContext } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const updateCategories = (newCategories) => {
    setCategories(newCategories);
  };

  return <CategoryContext.Provider value={{ categories, updateCategories }}>{children}</CategoryContext.Provider>;
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
