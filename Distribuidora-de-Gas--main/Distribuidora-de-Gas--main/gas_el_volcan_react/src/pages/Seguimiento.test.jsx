import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Seguimiento from './Seguimiento.jsx'
import { renderConProveedores } from '../test/utils.jsx'

const estado = () => document.getElementById('estado-pedido')

describe('Seguimiento', () => {
  it('pide un código cuando se consulta vacío', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Seguimiento />)

    await user.click(screen.getByRole('button', { name: 'Consultar estado' }))

    expect(screen.getByText('Ingrese un código de pedido.')).toBeInTheDocument()
    expect(estado()).toHaveClass('oculto')
  })

  it('muestra el estado del pedido al consultar con un código', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Seguimiento />)

    await user.type(screen.getByLabelText('Código de pedido'), 'ev-1024')
    await user.click(screen.getByRole('button', { name: 'Consultar estado' }))

    expect(
      screen.getByText('Pedido EV-1024: repartidor en camino. Entrega estimada entre 1 y 3 horas.'),
    ).toBeInTheDocument()
    expect(estado()).not.toHaveClass('oculto')
  })
})
