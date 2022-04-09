import "./styles.css";
import { Link } from "react-router-dom";

export function DetalhesContato() {
  return (
    <div>
      <Link to="/">seta pra voltar</Link>
      <h1>Detalhamento do contato</h1>
      <Link to="editar">Editar Contato</Link>
    </div>
  );
}
