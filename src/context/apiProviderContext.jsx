import React, { createContext, useContext } from "react";
import { useFetch } from "use-http";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_TOKEN = import.meta.env.VITE_TOKEN;
  const request_url = import.meta.env.VITE_REQUEST_URL;

  const { get, response } = useFetch(request_url, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  // GET fetch function (path - api path; setData - useState setter function)
  async function initializeData(path, setData) {
    const initialData = await get(path);
    if (response.ok) setData(initialData.data);
  }

  return <ApiContext.Provider value={{ initializeData }}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
