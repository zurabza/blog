import Navbar from "./components/Navbar";
import Home from "./layout/home";

import { LoginProvider } from "./context/LoginContext";
import { ApiProvider } from "./context/ApiProviderContext";
import AddBlogpost from "./components/AddBlogpost";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes, Route, Outlet, Link, useLocation, useNavigate, useParams } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <ApiProvider>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddBlogpost />} />
        </Routes>
      </ApiProvider>
    </LoginProvider>
  );
}

export default App;
