import React, { createContext, useContext } from "react";
import { useFetch } from "use-http";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const token = import.meta.env.VITE_TOKEN;
  const request_url = import.meta.env.VITE_REQUEST_URL;

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { get, post, response } = useFetch(request_url, options);

  // GET fetch function (path - api path; setData - useState setter function)
  async function initializeData(path, setData) {
    const initialData = await get(path);
    if (response.ok) setData(initialData.data);
  }

  // POST fetch function (path - api path; data - data to send)
  async function postData(path, data) {
    await post(path, data);
    return response.ok;
  }

  return <ApiContext.Provider value={{ initializeData, postData }}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  return useContext(ApiContext);
};
