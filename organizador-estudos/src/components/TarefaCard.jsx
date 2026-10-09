function TarefaCard({ tarefa, onAlternar, onExcluir }) {
  return (
    <article
      className={`tarefa-card ${tarefa.concluida ? "tarefa-card--concluida" : ""}`}
    >
      <div>
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.disciplina}</p>
        <span className="tarefa-card__status">
          {tarefa.concluida ? "Concluída" : "Pendente"}
        </span>
      </div>

      <div className="tarefa-card__actions">
        <button
          type="button"
          className={
            tarefa.concluida
              ? "tarefa-card__button tarefa-card__button--secondary"
              : "tarefa-card__button"
          }
          onClick={() => onAlternar(tarefa.id)}
          aria-pressed={tarefa.concluida}
        >
          {tarefa.concluida ? "Marcar como pendente" : "Concluir"}
        </button>
        <button
          type="button"
          className="tarefa-card__button tarefa-card__button--delete"
          onClick={() => onExcluir(tarefa.id)}
          aria-label={`Excluir tarefa ${tarefa.titulo}`}
        >
          Excluir
        </button>
      </div>
    </article>
  );
}

export default TarefaCard;
