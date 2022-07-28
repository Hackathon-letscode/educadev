import Rotas from "./Rotas";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
