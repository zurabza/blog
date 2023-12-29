import { createContext, useState, useContext, useEffect } from "react";

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

  // Retrieve data from local storage on component mount
  const storedData = JSON.parse(localStorage.getItem("blogpostData")) || initialData;
  const [data, setData] = useState(storedData);

  useEffect(() => {
    const { image, ...dataWithoutImage } = data;
    localStorage.setItem("blogpostData", JSON.stringify(dataWithoutImage));
  }, [data]);

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
