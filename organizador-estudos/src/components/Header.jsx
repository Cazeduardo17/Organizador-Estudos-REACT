import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Organizador de Estudos</h1>

      <nav className="nav">
        <Link to="/">Início</Link>
        <Link to="/disciplinas">Disciplinas</Link>
        <Link to="/tarefas">Tarefas</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
