import { Link, NavLink } from 'react-router-dom'

const claseMenu = ({ isActive }) => (isActive ? 'activo' : '')

export default function AdminLayout({ etiqueta = 'Administración', titulo, children }) {
  return (
    <main>
      <section className="cabecera-pagina cabecera-admin">
        <div className="contenedor">
          <span className="etiqueta">{etiqueta}</span>
          <h1>{titulo}</h1>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor admin-layout">
          <aside className="menu-admin">
            <NavLink to="/admin" end className={claseMenu}>
              Resumen
            </NavLink>
            <NavLink to="/admin/productos" className={claseMenu}>
              Productos
            </NavLink>
            <NavLink to="/admin/usuarios" className={claseMenu}>
              Usuarios
            </NavLink>
            <Link to="/">Volver a la tienda</Link>
          </aside>
          <div>{children}</div>
        </div>
      </section>
    </main>
  )
}
