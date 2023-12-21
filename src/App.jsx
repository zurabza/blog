import Navbar from "./components/Navbar";
import Home from "./layout/home";

import { LoginProvider } from "./context/LoginContext";
import { ApiProvider } from "./context/ApiProviderContext";
import AddBlogpost from "./components/AddBlogpost";

function App() {
  return (
    <LoginProvider>
      <ApiProvider>
        {/* <Navbar /> */}
        {/* <Home /> */}
        <AddBlogpost />
      </ApiProvider>
    </LoginProvider>
  );
}

export default App;
