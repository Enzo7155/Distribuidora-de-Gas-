import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Header from './organisms/Header.jsx'
import PanelCarrito from './PanelCarrito.jsx'
import TarjetaProducto from './molecules/TarjetaProducto.jsx'
import { renderConProveedores } from '../test/utils.jsx'
import { productos } from '../data/productos.js'

function renderTienda() {
  const producto = productos[0] // Cilindro GLP 5 kg — $6.500
  return {
    producto,
    user: userEvent.setup(),
    ...renderConProveedores(
      <>
        <Header />
        <TarjetaProducto producto={producto} />
        <PanelCarrito />
      </>,
    ),
  }
}

const contador = () => document.getElementById('contador-carrito')
const total = () => document.getElementById('total-carrito')

describe('Carrito', () => {
  it('muestra el carrito vacío, contador 0 y total 0 al inicio', () => {
    renderTienda()
    expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument()
    expect(contador()).toHaveTextContent('0')
    expect(total()).toHaveTextContent('0')
  })

  it('agrega un producto y actualiza contador, detalle y total', async () => {
    const { user } = renderTienda()

    await user.click(screen.getByRole('button', { name: 'Añadir' }))

    expect(contador()).toHaveTextContent('1')
    expect(total()).toHaveTextContent('6.500')
    expect(screen.getByText('Cantidad: 1')).toBeInTheDocument()
    expect(screen.getByText('Subtotal: $6.500')).toBeInTheDocument()
  })

  it('acumula unidades y calcula el total al añadir dos veces', async () => {
    const { user } = renderTienda()
    const boton = screen.getByRole('button', { name: 'Añadir' })

    await user.click(boton)
    await user.click(boton)

    expect(contador()).toHaveTextContent('2')
    expect(total()).toHaveTextContent('13.000')
    expect(screen.getByText('Cantidad: 2')).toBeInTheDocument()
  })

  it('elimina un producto del carrito', async () => {
    const { user } = renderTienda()

    await user.click(screen.getByRole('button', { name: 'Añadir' }))
    await user.click(screen.getByRole('button', { name: 'Eliminar' }))

    expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument()
    expect(contador()).toHaveTextContent('0')
  })

  it('vacía el carrito con el botón correspondiente', async () => {
    const { user } = renderTienda()

    await user.click(screen.getByRole('button', { name: 'Añadir' }))
    await user.click(screen.getByRole('button', { name: 'Vaciar carrito' }))

    expect(screen.getByText('El carrito está vacío.')).toBeInTheDocument()
    expect(total()).toHaveTextContent('0')
  })

  it('persiste el carrito en localStorage', async () => {
    const { user, producto } = renderTienda()

    await user.click(screen.getByRole('button', { name: 'Añadir' }))

    const guardado = JSON.parse(localStorage.getItem('carritoElVolcan'))
    expect(guardado).toHaveLength(1)
    expect(guardado[0]).toMatchObject({ id: producto.id, cantidad: 1 })
  })
})
