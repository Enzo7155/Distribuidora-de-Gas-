import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'
import { renderConProveedores } from './test/utils.jsx'

const rutas = [
  { ruta: '/', titulo: 'Tu gas, más simple y con seguimiento.' },
  { ruta: '/productos', titulo: 'Productos y tarifas' },
  { ruta: '/detalle-producto/2', titulo: 'Cilindro GLP 11 kg' },
  { ruta: '/seguimiento', titulo: 'Seguimiento de entrega' },
  { ruta: '/nosotros', titulo: 'Nosotros' },
  { ruta: '/blog', titulo: 'Blog' },
  { ruta: '/blog/seguridad', titulo: '5 cuidados básicos al usar un cilindro de gas' },
  { ruta: '/blog/seguimiento', titulo: 'Cómo funciona el seguimiento de pedidos' },
  { ruta: '/contacto', titulo: 'Contacto' },
  { ruta: '/login', titulo: 'Inicio de sesión' },
  { ruta: '/registro', titulo: 'Registro de usuario' },
  { ruta: '/admin', titulo: 'Panel de administración' },
  { ruta: '/admin/productos', titulo: 'Mantenedor de productos' },
  { ruta: '/admin/usuarios', titulo: 'Mantenedor de usuarios' },
  { ruta: '/ruta-que-no-existe', titulo: 'Página no encontrada' },
]

describe('App (routing)', () => {
  it.each(rutas)('renderiza $ruta con el título "$titulo"', ({ ruta, titulo }) => {
    renderConProveedores(<App />, { route: ruta })
    expect(screen.getByRole('heading', { level: 1, name: titulo })).toBeInTheDocument()
  })
})
