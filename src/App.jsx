import Navbar from "./components/Navbar";
import Home from "./layout/home";

import { ApiProvider } from "./context/apiProviderContext";

function App() {
  return (
    <ApiProvider>
      <Navbar />
      <Home />
    </ApiProvider>
  );
}

export default App;
