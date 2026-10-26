import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Productos from './Productos.jsx'
import { renderConProveedores } from '../test/utils.jsx'

const tarjetas = () => document.querySelectorAll('.producto')

describe('Productos', () => {
  it('muestra los 14 productos del catálogo', () => {
    renderConProveedores(<Productos />)
    expect(tarjetas()).toHaveLength(14)
  })

  it('filtra por categoría', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Productos />)

    await user.selectOptions(screen.getByLabelText('Categoría'), 'Reguladores')

    expect(tarjetas()).toHaveLength(3)
    expect(screen.getByText('Regulador doméstico estándar')).toBeInTheDocument()
    expect(screen.queryByText('Cilindro GLP 5 kg')).not.toBeInTheDocument()
  })
})
