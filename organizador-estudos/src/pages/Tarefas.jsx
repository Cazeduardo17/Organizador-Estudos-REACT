import { useState } from "react";
import TarefaCard from "../components/TarefaCard.jsx";
import "./Tarefas.css";

const tarefasIniciais = [
  {
    id: 1,
    titulo: "Estudar React",
    disciplina: "Programação Web",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Revisar exercícios",
    disciplina: "Programação Web",
    concluida: true,
  },
  {
    id: 3,
    titulo: "Ler o capítulo 2",
    disciplina: "Banco de Dados",
    concluida: false,
  },
];

function Tarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  function alternarConclusao(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
      ),
    );
  }

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <section className="tarefas-pagina">
      <h2>Tarefas</h2>

      <div className="tarefas-resumo" aria-live="polite">
        <p>Pendentes: {tarefasPendentes}</p>
        <p>Concluídas: {tarefasConcluidas}</p>
      </div>

      {tarefas.length > 0 ? (
        <ul className="tarefas-lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <TarefaCard tarefa={tarefa} onAlternar={alternarConclusao} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma tarefa cadastrada.</p>
      )}
    </section>
  );
}

export default Tarefas;
