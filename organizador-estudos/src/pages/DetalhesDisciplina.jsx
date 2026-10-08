import { Link, useParams } from "react-router-dom";

import disciplinas from "../data/disciplinas.js";
import "./Disciplinas.css";

function DetalhesDisciplina() {
  const { id } = useParams();
  const disciplina = disciplinas.find((item) => item.id === id);

  if (!disciplina) {
    return (
      <section className="disciplina-detail disciplina-detail--not-found">
        <h1>Disciplina não encontrada</h1>
        <p>Não foi possível encontrar uma disciplina com esse identificador.</p>
        <Link className="disciplina-card__link" to="/disciplinas">
          Voltar para disciplinas
        </Link>
      </section>
    );
  }

  return (
    <section className="disciplina-detail">
      <Link className="disciplina-detail__back" to="/disciplinas">
        ← Voltar para disciplinas
      </Link>
      <p className="page-header__eyebrow">Detalhes da disciplina</p>
      <h1>{disciplina.nome}</h1>

      <div className="disciplina-detail__info">
        <div>
          <span>Professor</span>
          <strong>{disciplina.professor}</strong>
        </div>
        <div>
          <span>Semestre</span>
          <strong>{disciplina.semestre}</strong>
        </div>
      </div>

      <div className="disciplina-detail__description">
        <h2>Sobre a disciplina</h2>
        <p>{disciplina.descricao}</p>
      </div>
    </section>
  );
}

export default DetalhesDisciplina;
