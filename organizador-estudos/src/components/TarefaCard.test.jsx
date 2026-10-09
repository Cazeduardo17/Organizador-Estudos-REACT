import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import TarefaCard from './TarefaCard.jsx'

const tarefa = {
  id: 1,
  titulo: 'Estudar React',
  disciplina: 'Programação Web',
  concluida: false,
}

describe('TarefaCard', () => {
  it('renderiza o cartão com status pendente e botão de concluir', () => {
    render(<TarefaCard tarefa={tarefa} onAlternar={vi.fn()} onExcluir={vi.fn()} />)

    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText('Pendente')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Concluir' })).toBeInTheDocument()
  })

  it('exibe o título e a disciplina recebidos pela prop tarefa', () => {
    const outraTarefa = { ...tarefa, titulo: 'Revisar SQL', disciplina: 'Banco de Dados' }
    render(<TarefaCard tarefa={outraTarefa} onAlternar={vi.fn()} onExcluir={vi.fn()} />)

    expect(screen.getByRole('heading', { name: 'Revisar SQL' })).toBeInTheDocument()
    expect(screen.getByText('Banco de Dados')).toBeInTheDocument()
  })
})
