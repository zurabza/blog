import Navbar from "./components/Navbar";
import Home from "./layout/home";

import { LoginProvider } from "./context/LoginContext";
import { ApiProvider } from "./context/ApiProviderContext";

function App() {
  return (
    <LoginProvider>
      <ApiProvider>
        <Navbar />
        <Home />
      </ApiProvider>
    </LoginProvider>
  );
}

export default App;
