import { createContext, useState, useContext } from "react";

const BlogpostContext = createContext();

export const BlogpostProvider = ({ children }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: null,
    author: "",
    publish_date: "",
    categories: [],
    email: "",
  });

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return <BlogpostContext.Provider value={{ data, updateData }}>{children}</BlogpostContext.Provider>;
};

export const useBlogpost = () => {
  const context = useContext(BlogpostContext);
  if (!context) {
    throw new Error("useBlogpost must be used within a BlogpostProvider");
  }
  return context;
};
