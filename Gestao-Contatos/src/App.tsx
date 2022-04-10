import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ListaDeContatos } from "./pages/ListaDeContatos";
import { EditarContato } from "./pages/EditarContato";
import { NovoContato } from "./pages/NovoContato";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListaDeContatos />} />
        <Route path="editar" element={<EditarContato />} />
        <Route path="novo" element={<NovoContato />} />
      </Routes>
    </div>
  );
}

export default App;
