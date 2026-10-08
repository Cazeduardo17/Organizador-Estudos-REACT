function DisciplinaCard({ disciplina, children }) {
  return (
    <article className="disciplina-card">
      <div className="disciplina-card__content">
        <h2>{disciplina.nome}</h2>
        <p className="disciplina-card__professor">
          <strong>Professor:</strong> {disciplina.professor}
        </p>
        <p className="disciplina-card__semestre">
          <strong>Semestre:</strong> {disciplina.semestre}
        </p>
        <p>{disciplina.descricao}</p>
      </div>

      {children && <div className="disciplina-card__actions">{children}</div>}
    </article>
  );
}

export default DisciplinaCard;
