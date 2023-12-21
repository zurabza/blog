import Navbar from "./components/Navbar";
import Home from "./layout/home";
import AddBlogpost from "./components/AddBlogpost";

import { LoginProvider } from "./context/LoginContext";
import { ApiProvider } from "./context/ApiProviderContext";

import { Routes, Route } from "react-router-dom";
import { BlogpostProvider } from "./context/BlogpostContext";

function App() {
  return (
    <LoginProvider>
      <BlogpostProvider>
        <ApiProvider>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<AddBlogpost />} />
          </Routes>
        </ApiProvider>
      </BlogpostProvider>
    </LoginProvider>
  );
}

export default App;
