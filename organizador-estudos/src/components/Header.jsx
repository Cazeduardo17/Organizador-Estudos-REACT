import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <NavLink className="header__brand" to="/">
        Organizador <span>de Estudos</span>
      </NavLink>

      <nav className="nav">
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/disciplinas">Disciplinas</NavLink>
        <NavLink to="/tarefas">Tarefas</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
}

export default Header;
