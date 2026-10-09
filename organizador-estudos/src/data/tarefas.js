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

export const CHAVE_TAREFAS = "organizador-estudos:tarefas";

export function carregarTarefas() {
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
          tarefa !== null &&
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

