import { useState, useEffect } from "react";
import ResumoCard from "../components/ResumoCard";
import disciplinas from "../data/disciplinas";
import "./Home.css";

function Home() {
  const [mostrarTodas, setMostrarTodas] = useState(false);

  useEffect(() => {
    document.title = "Organizador de Estudos | Início";
  }, []);
  // Dados temporários das tarefas para a Home
  const tarefas = [
    {
      id: 1,
      titulo: "Estudar componentes React",
      concluida: false,
    },
    {
      id: 2,
      titulo: "Praticar props e children",
      concluida: true,
    },
    {
      id: 3,
      titulo: "Revisar JavaScript",
      concluida: false,
    },
    {
      id: 4,
      titulo: "Estudar React Router",
      concluida: true,
    },
    {
      id: 5,
      titulo: "Praticar useState",
      concluida: false,
    },
  ];

  // Calcula a quantidade de tarefas pendentes
  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;

  // Calcula a quantidade de tarefas concluídas
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  // Calcula o percentual de progresso
  const progresso =
    tarefas.length > 0
      ? Math.round((tarefasConcluidas / tarefas.length) * 100)
      : 0;

  // Mostra três tarefas ou todas, dependendo do estado
  const tarefasVisiveis = mostrarTodas ? tarefas : tarefas.slice(0, 3);

  return (
    <main className="home">
      <h1 className="home__titulo">Resumo dos estudos</h1>

      <p className="home__introducao">
        Acompanhe sua organização de estudos em um só lugar.
      </p>

      {/* Cartões com o resumo dos estudos */}
      <section className="home__resumos">
        <ResumoCard
          titulo="Disciplinas cadastradas"
          descricao="Total de disciplinas disponíveis para estudar."
        >
          {disciplinas.length}
        </ResumoCard>

        <ResumoCard
          titulo="Tarefas pendentes"
          descricao="Tarefas que ainda precisam ser realizadas."
        >
          {tarefasPendentes}
        </ResumoCard>

        <ResumoCard
          titulo="Tarefas concluídas"
          descricao="Tarefas que você já terminou."
        >
          {tarefasConcluidas}
        </ResumoCard>

        <ResumoCard
          titulo="Progresso dos estudos"
          descricao="Percentual de tarefas concluídas."
        >
          {progresso}%
        </ResumoCard>
      </section>

      {/* Lista de tarefas recentes */}
      <section className="home__tarefas-recentes">
        <h2 className="home__subtitulo">Tarefas recentes</h2>

        {tarefas.length > 0 ? (
          <>
            <ul className="home__lista-tarefas">
              {tarefasVisiveis.map((tarefa) => (
                <li className="home__tarefa" key={tarefa.id}>
                  <h3>{tarefa.titulo}</h3>

                  <span
                    className={`home__status ${
                      tarefa.concluida
                        ? "home__status--concluida"
                        : "home__status--pendente"
                    }`}
                  >
                    {tarefa.concluida ? "Concluída" : "Pendente"}
                  </span>
                </li>
              ))}
            </ul>

            {tarefas.length > 3 && (
              <button
                className="home__botao-tarefas"
                type="button"
                aria-expanded={mostrarTodas}
                onClick={() => setMostrarTodas(!mostrarTodas)}
              >
                {mostrarTodas ? "Mostrar menos" : "Ver todas as tarefas"}
              </button>
            )}
          </>
        ) : (
          <p className="home__vazio">Nenhuma tarefa cadastrada ainda.</p>
        )}
      </section>
    </main>
  );
}

export default Home;
