import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { expect, it } from 'vitest'
import AppRoutes from '../routes/AppRoutes.jsx'
import Home from './Home.jsx'
import { CHAVE_TAREFAS } from '../data/tarefas.js'

function resumo(titulo) {
  return within(screen.getByRole('heading', { name: titulo }).closest('article'))
}

it('atualiza o resumo após concluir e cadastrar tarefas na página Tarefas', async () => {
  const user = userEvent.setup()
  render(<MemoryRouter><AppRoutes /></MemoryRouter>)
  expect(resumo('Tarefas pendentes').getByText('2')).toBeInTheDocument()
  await user.click(screen.getByRole('link', { name: 'Gerenciar tarefas' }))
  const tarefa = within(screen.getByRole('heading', { name: 'Estudar React' }).closest('article'))
  await user.click(tarefa.getByRole('button', { name: 'Concluir' }))
  await user.type(screen.getByRole('textbox', { name: 'Nome da tarefa' }), 'Revisar a prova')
  await user.click(screen.getByRole('button', { name: 'Adicionar tarefa' }))
  await user.click(screen.getByRole('link', { name: 'Início' }))
  expect(resumo('Tarefas pendentes').getByText('2')).toBeInTheDocument()
  expect(resumo('Tarefas concluídas').getByText('2')).toBeInTheDocument()
  expect(resumo('Progresso dos estudos').getByText('50%')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem').some(item => item.textContent.includes('Revisar a prova'))).toBe(true)
  expect(screen.queryByRole('heading', { name: 'Estudar React' })).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Ver todas as tarefas' }))
  expect(screen.getByRole('heading', { name: 'Estudar React' })).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Mostrar menos' }))
  expect(screen.queryByRole('heading', { name: 'Estudar React' })).not.toBeInTheDocument()
})

it('mostra o estado vazio e progresso zero quando todas as tarefas foram excluídas', () => {
  localStorage.setItem(CHAVE_TAREFAS, '[]')
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByText('Nenhuma tarefa cadastrada ainda.')).toBeInTheDocument()
  expect(resumo('Progresso dos estudos').getByText('0%')).toBeInTheDocument()
  expect(resumo('Tarefas pendentes').getByText('0')).toBeInTheDocument()
  expect(resumo('Tarefas concluídas').getByText('0')).toBeInTheDocument()
})
