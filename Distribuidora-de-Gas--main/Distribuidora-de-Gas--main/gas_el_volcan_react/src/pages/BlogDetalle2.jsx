import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

export default function BlogDetalle2() {
  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <Link className="volver" to="/blog">
            ← Volver al blog
          </Link>
          <h1>Cómo funciona el seguimiento de pedidos</h1>
        </div>
      </section>
      <article className="seccion">
        <div className="contenedor articulo">
          <img src={asset('assets/hero.svg')} alt="Reparto de gas" />
          <p>
            El sistema propuesto reemplaza la dependencia de llamadas y listas en papel por un flujo
            digital. Una vez registrado el pedido, la operadora puede visualizarlo y asignarlo a un
            repartidor.
          </p>
          <h2>Estados del pedido</h2>
          <ol>
            <li>
              <strong>Pendiente:</strong> la solicitud fue registrada.
            </li>
            <li>
              <strong>Asignado:</strong> la operadora seleccionó un repartidor.
            </li>
            <li>
              <strong>En camino:</strong> el repartidor inició el despacho.
            </li>
            <li>
              <strong>Entregado:</strong> el pedido fue completado y su pago queda registrado.
            </li>
          </ol>
          <p>
            El cliente puede consultar el estado actualizado y visualizar una representación del
            seguimiento en la vista “Mi pedido”.
          </p>
        </div>
      </article>
    </main>
  )
}
