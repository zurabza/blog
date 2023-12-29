import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Globals.css";

import { BrowserRouter } from "react-router-dom";

import { LoginProvider } from "./context/LoginContext";
import { CategoryProvider } from "./context/categoriesFilterContext.jsx";
import { ApiProvider } from "./context/ApiProviderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <CategoryProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </CategoryProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
