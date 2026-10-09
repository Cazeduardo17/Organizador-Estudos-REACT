import { useState } from "react";
import TarefaCard from "../components/TarefaCard.jsx";
import disciplinas from "../data/disciplinas.js";
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

const CHAVE_TAREFAS = "organizador-estudos:tarefas";

function carregarTarefas() {
  try {
    const tarefasSalvas = window.localStorage.getItem(CHAVE_TAREFAS);

    if (!tarefasSalvas) {
      return { tarefas: tarefasIniciais, erro: "" };
    }

    const tarefasParseadas = JSON.parse(tarefasSalvas);
    const tarefasValidas =
      Array.isArray(tarefasParseadas) &&
      tarefasParseadas.every(
        (tarefa) =>
          Number.isInteger(tarefa.id) &&
          typeof tarefa.titulo === "string" &&
          typeof tarefa.disciplina === "string" &&
          typeof tarefa.concluida === "boolean",
      );

    if (!tarefasValidas) {
      throw new Error("Os dados salvos não têm o formato esperado.");
    }

    return { tarefas: tarefasParseadas, erro: "" };
  } catch (erro) {
    console.error("Não foi possível carregar as tarefas salvas.", erro);
    return {
      tarefas: tarefasIniciais,
      erro: "Não foi possível carregar as tarefas salvas neste navegador.",
    };
  }
}

function Tarefas() {
  const [estadoInicial] = useState(carregarTarefas);
  const [tarefas, setTarefas] = useState(estadoInicial.tarefas);
  const [erroFormulario, setErroFormulario] = useState("");
  const [erroPersistencia, setErroPersistencia] = useState(
    estadoInicial.erro,
  );

  function persistirTarefas(novasTarefas) {
    try {
      window.localStorage.setItem(
        CHAVE_TAREFAS,
        JSON.stringify(novasTarefas),
      );
      setErroPersistencia("");
    } catch (erro) {
      console.error("Não foi possível salvar as tarefas.", erro);
      setErroPersistencia(
        "Não foi possível salvar as alterações neste navegador.",
      );
    }
  }

  function alternarConclusao(id) {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
    );
    setTarefas(novasTarefas);
    persistirTarefas(novasTarefas);
  }

  function adicionarTarefa(event) {
    event.preventDefault();

    const dados = new FormData(event.currentTarget);
    const titulo = dados.get("titulo").trim();
    const disciplina = dados.get("disciplina");

    if (!titulo) {
      setErroFormulario("Informe um título para a tarefa.");
      return;
    }

    const proximoId =
      tarefas.reduce(
        (maiorId, tarefa) => Math.max(maiorId, tarefa.id),
        0,
      ) + 1;
    const novasTarefas = [
      ...tarefas,
      { id: proximoId, titulo, disciplina, concluida: false },
    ];

    setTarefas(novasTarefas);
    persistirTarefas(novasTarefas);
    setErroFormulario("");
    event.currentTarget.reset();
  }

  function excluirTarefa(id) {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
    persistirTarefas(novasTarefas);
  }

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <section className="tarefas-pagina">
      <header className="page-header">
        <p className="page-header__eyebrow">Acompanhe sua rotina</p>
        <h1>Tarefas</h1>
        <p>
          Cadastre atividades, acompanhe o que está pendente e marque suas
          tarefas concluídas.
        </p>
      </header>

      <form className="tarefa-form" onSubmit={adicionarTarefa}>
        <h2>Adicionar tarefa</h2>
        <div className="tarefa-form__fields">
          <label className="tarefa-form__field">
            <span>Nome da tarefa</span>
            <input
              type="text"
              name="titulo"
              placeholder="Ex.: Revisar anotações"
              maxLength={120}
              required
              onChange={() => setErroFormulario("")}
            />
          </label>

          <label className="tarefa-form__field">
            <span>Disciplina</span>
            <select name="disciplina" defaultValue={disciplinas[0]?.nome ?? ""}>
              {disciplinas.map((disciplina) => (
                <option key={disciplina.id} value={disciplina.nome}>
                  {disciplina.nome}
                </option>
              ))}
            </select>
          </label>
        </div>
        {erroFormulario && (
          <p className="tarefa-form__error" role="alert">
            {erroFormulario}
          </p>
        )}
        <button className="tarefa-card__button" type="submit">
          Adicionar tarefa
        </button>
      </form>

      {erroPersistencia && (
        <p className="tarefas-persistencia-erro" role="alert">
          {erroPersistencia}
        </p>
      )}

      {tarefas.length > 0 ? (
        <ul className="tarefas-lista">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <TarefaCard
                tarefa={tarefa}
                onAlternar={alternarConclusao}
                onExcluir={excluirTarefa}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="tarefas-empty">Nenhuma tarefa cadastrada.</p>
      )}
    </section>
  );
}

export default Tarefas;
