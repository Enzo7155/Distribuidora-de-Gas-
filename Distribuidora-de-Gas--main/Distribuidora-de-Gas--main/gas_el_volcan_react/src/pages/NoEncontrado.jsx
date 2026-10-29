import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Error 404</span>
          <h1>Página no encontrada</h1>
          <p>La dirección que buscas no existe o fue movida.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          <Link className="boton" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  )
}
