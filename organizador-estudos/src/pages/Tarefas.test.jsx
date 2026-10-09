import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, expect, it } from 'vitest'
import Tarefas from './Tarefas.jsx'

beforeEach(() => {
  window.localStorage.clear()
})

it('altera o estado da tarefa ao concluir e ao marcar como pendente', async () => {
  const user = userEvent.setup()
  render(<Tarefas />)

  const cartao = screen.getByRole('heading', { name: 'Estudar React' }).closest('article')
  const tarefa = within(cartao)

  expect(tarefa.getByText('Pendente')).toBeInTheDocument()
  await user.click(tarefa.getByRole('button', { name: 'Concluir' }))

  expect(tarefa.getByText('Concluída')).toBeInTheDocument()
  expect(tarefa.getByRole('button', { name: 'Marcar como pendente' })).toHaveAttribute('aria-pressed', 'true')

  await user.click(tarefa.getByRole('button', { name: 'Marcar como pendente' }))
  expect(tarefa.getByText('Pendente')).toBeInTheDocument()
  expect(tarefa.getByRole('button', { name: 'Concluir' })).toHaveAttribute('aria-pressed', 'false')
})
