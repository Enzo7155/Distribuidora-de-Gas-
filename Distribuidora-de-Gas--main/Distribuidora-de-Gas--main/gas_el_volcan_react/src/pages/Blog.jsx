import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

export default function Blog() {
  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Información</span>
          <h1>Blog</h1>
          <p>Noticias y consejos relacionados con el uso y despacho de gas.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor grilla-blog">
          <article className="tarjeta-blog">
            <img src={asset('assets/cilindro.svg')} alt="Cilindro GLP" />
            <div>
              <span className="etiqueta">Seguridad</span>
              <h2>5 cuidados básicos al usar un cilindro de gas</h2>
              <p>Recomendaciones sencillas para manipular cilindros y sus conexiones de forma responsable.</p>
              <Link className="boton" to="/blog/seguridad">
                Leer artículo
              </Link>
            </div>
          </article>
          <article className="tarjeta-blog">
            <img src={asset('assets/hero.svg')} alt="Camión de reparto" />
            <div>
              <span className="etiqueta">Despacho</span>
              <h2>Cómo funciona el nuevo seguimiento de pedidos</h2>
              <p>Revisa las etapas desde que registras la solicitud hasta que el repartidor completa la entrega.</p>
              <Link className="boton" to="/blog/seguimiento">
                Leer artículo
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
