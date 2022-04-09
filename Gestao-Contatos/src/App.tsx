import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DetalhesContato } from "./pages/DetalhesContato";
import { ListaDeContatos } from "./pages/ListaDeContatos";
import { EditarContato } from "./pages/EditarContato";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListaDeContatos />} />
        <Route path="detalhes" element={<DetalhesContato />} />
        <Route path="detalhes/editar" element={<EditarContato />} />
      </Routes>
    </div>
  );
}

export default App;
