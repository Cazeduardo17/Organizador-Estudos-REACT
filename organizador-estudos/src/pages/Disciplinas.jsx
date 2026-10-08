import { Link } from "react-router-dom";

import DisciplinaCard from "../components/DisciplinaCard.jsx";
import disciplinas from "../data/disciplinas.js";
import "./Disciplinas.css";

function Disciplinas() {
  return (
    <section className="disciplinas-page">
      <header className="page-header">
        <p className="page-header__eyebrow">Organização acadêmica</p>
        <h1>Disciplinas</h1>
        <p>Consulte as disciplinas e acesse os detalhes de cada uma.</p>
      </header>

      {disciplinas.length > 0 ? (
        <div className="disciplinas-grid">
          {disciplinas.map((disciplina) => (
            <DisciplinaCard key={disciplina.id} disciplina={disciplina}>
              <Link
                className="disciplina-card__link"
                to={`/disciplinas/${disciplina.id}`}
              >
                Ver detalhes
              </Link>
            </DisciplinaCard>
          ))}
        </div>
      ) : (
        <p className="disciplinas-empty">
          Nenhuma disciplina cadastrada no momento.
        </p>
      )}
    </section>
  );
}

export default Disciplinas;
