import { createContext, useState, useContext } from "react";

const BlogpostContext = createContext();

export const BlogpostProvider = ({ children }) => {
  const initialData = {
    title: "",
    description: "",
    image: null,
    author: "",
    publish_date: "",
    categories: [],
    email: "",
  };

  const [data, setData] = useState(initialData);

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const resetData = () => {
    setData(initialData);
  };

  return <BlogpostContext.Provider value={{ data, updateData, resetData }}>{children}</BlogpostContext.Provider>;
};

export const useBlogpost = () => {
  const context = useContext(BlogpostContext);
  if (!context) {
    throw new Error("useBlogpost must be used within a BlogpostProvider");
  }
  return context;
};
