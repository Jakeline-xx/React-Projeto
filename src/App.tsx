import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ListaDeContatos } from "./pages/ListaDeContatos";
import { EditarContato } from "./pages/EditarContato";
import { NovoContato } from "./pages/NovoContato";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ListaDeContatos />} />
        <Route path="editar/:id" element={<EditarContato />} />
        <Route path="novo" element={<NovoContato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
