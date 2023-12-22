import Navbar from "./components/Navbar";
import Home from "./layout/home";
import AddBlogpost from "./components/AddBlogpost";

import { Routes, Route } from "react-router-dom";
import { BlogpostProvider } from "./context/BlogpostContext";

import { useLogin } from "./context/LoginContext";

function App() {
  const { isLoggedIn } = useLogin();

  return (
    <BlogpostProvider>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {isLoggedIn && <Route path="/add" element={<AddBlogpost />} />}
      </Routes>
    </BlogpostProvider>
  );
}

export default App;
