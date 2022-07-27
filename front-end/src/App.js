import Rotas from "./Rotas";
import { BrowserRouter } from "react-router-dom";
import NavScrollExample from "./Components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavScrollExample />
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
