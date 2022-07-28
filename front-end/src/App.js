import Rotas from "./Rotas";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
