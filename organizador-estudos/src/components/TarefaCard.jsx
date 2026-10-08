function TarefaCard({ tarefa, onAlternar }) {
  return (
    <article
      className={`tarefa-card ${tarefa.concluida ? "tarefa-card--concluida" : ""}`}
    >
      <div>
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.disciplina}</p>
        <span>{tarefa.concluida ? "Concluída" : "Pendente"}</span>
      </div>

      <button
        type="button"
        onClick={() => onAlternar(tarefa.id)}
        aria-pressed={tarefa.concluida}
      >
        {tarefa.concluida ? "Marcar como pendente" : "Concluir"}
      </button>
    </article>
  );
}

export default TarefaCard;
