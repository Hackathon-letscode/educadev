import Rotas from "./Rotas";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/footer/Footer";
import { AulaProvider } from "./context/AulaContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AulaProvider>
        <Menu />
        <Rotas />
        <Footer />
        </AulaProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
