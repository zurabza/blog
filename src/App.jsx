import Navbar from "./components/Navbar";
import Home from "./layout/home";
import AddBlogpost from "./components/AddBlogpost";
import BlogpostPage from "./components/BlogpostPage";
import NotFound from "./components/NotFound";

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
        <Route path="/add" element={isLoggedIn ? <AddBlogpost /> : <NotFound content="ავტორიზაცია სავალდებულოა" />} />
        <Route path="/:id" element={<BlogpostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BlogpostProvider>
  );
}

export default App;
