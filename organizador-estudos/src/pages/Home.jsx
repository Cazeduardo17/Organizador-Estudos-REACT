import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ResumoCard from "../components/ResumoCard";
import disciplinas from "../data/disciplinas";
import { carregarTarefas } from "../data/tarefas.js";
import "./Home.css";

function Home() {
  const [{ tarefas, erro }] = useState(carregarTarefas);
  const [mostrarTodas, setMostrarTodas] = useState(false);

  useEffect(() => {
    document.title = "Organizador de Estudos | Início";
  }, []);
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
  const tarefasRecentes = [...tarefas].reverse();
  const tarefasVisiveis = mostrarTodas ? tarefasRecentes : tarefasRecentes.slice(0, 3);

  return (
    <section className="page-shell">
      

      <div className="home">
        <h2 className="home__titulo">Resumo dos estudos</h2>

        <p className="home__introducao">
          Acompanhe sua organização de estudos em um só lugar.
        </p>

        {erro && <p className="home__vazio" role="alert">{erro}</p>}

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
          <Link className="button-link button-link--secondary" to="/tarefas">
            Gerenciar tarefas
          </Link>

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
                  onClick={() => setMostrarTodas((atual) => !atual)}
                >
                  {mostrarTodas ? "Mostrar menos" : "Ver todas as tarefas"}
                </button>
              )}
            </>
          ) : (
            <p className="home__vazio">Nenhuma tarefa cadastrada ainda.</p>
          )}
        </section>
      </div>
    </section>
  );
}

export default Home;
