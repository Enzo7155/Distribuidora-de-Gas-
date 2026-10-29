import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header.jsx'
import { renderConProveedores } from '../test/utils.jsx'

describe('Header', () => {
  it('renderiza los enlaces de navegación principales', () => {
    renderConProveedores(<Header />)

    const enlaces = ['Inicio', 'Productos', 'Mi pedido', 'Nosotros', 'Blog', 'Contacto']
    enlaces.forEach((texto) => {
      expect(screen.getByRole('link', { name: texto })).toBeInTheDocument()
    })
  })

  it('marca como activo el enlace de la ruta actual', () => {
    renderConProveedores(<Header />, { route: '/productos' })

    expect(screen.getByRole('link', { name: 'Productos' })).toHaveClass('activo')
    expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveClass('activo')
  })

  it('muestra el contador del carrito en 0', () => {
    renderConProveedores(<Header />)
    expect(document.getElementById('contador-carrito')).toHaveTextContent('0')
  })
})
