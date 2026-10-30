import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext.jsx'
import { asset } from '../../lib/assets.js'

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos' },
  { to: '/seguimiento', label: 'Mi pedido' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { cantidad, abrir } = useCarrito()

  return (
    <header className="cabecera">
      <div className="contenedor barra-superior">
        <Link
          className="marca"
          to="/"
          aria-label="Ir al inicio"
        >
          <img
            src={asset('assets/logo.svg')}
            alt="Gas El Volcán"
          />
        </Link>

        <button
          id="btn-menu"
          className="btn-menu"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(v => !v)}
        >
          ☰
        </button>

        <nav
          id="nav-principal"
          className={menuAbierto ? 'abierto' : ''}
          aria-label="Navegación principal"
        >
          <ul>
            {enlaces.map(enlace => (
              <li key={enlace.to}>
                <NavLink
                  to={enlace.to}
                  end={enlace.end}
                  className={({ isActive }) =>
                    isActive ? 'activo' : ''
                  }
                >
                  {enlace.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="acciones-header">
          <Link
            className="enlace-login"
            to="/login"
          >
            Iniciar sesión
          </Link>

          <button
            id="btn-carrito"
            className="btn-carrito"
            onClick={abrir}
          >
            Carrito (
            <span id="contador-carrito">
              {cantidad}
            </span>
            )
          </button>
        </div>
      </div>
    </header>
  )
}
