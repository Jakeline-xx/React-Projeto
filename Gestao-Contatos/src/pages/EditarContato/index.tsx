import "./styles.css";
import { Link } from "react-router-dom";

export function EditarContato() {
  return (
    <div>
      <Link to="/detalhes">x pra voltar</Link>
      <h1>Editar Contato</h1>
    </div>
  );
}
