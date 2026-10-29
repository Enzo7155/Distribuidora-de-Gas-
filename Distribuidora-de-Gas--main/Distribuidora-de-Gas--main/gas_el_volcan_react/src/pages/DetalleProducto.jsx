import { Link, useParams } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext.jsx'
import { obtenerProducto } from '../data/productos.js'
import { asset } from '../lib/assets.js'
import { formatoDinero } from '../lib/dinero.js'

export default function DetalleProducto() {
  const { id } = useParams()
  const p = obtenerProducto(id)
  const { agregar } = useCarrito()

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <Link to="/productos" className="volver">
            ← Volver a productos
          </Link>
        </div>
      </section>
      <section className="seccion">
        <div id="detalle-producto" className="contenedor detalle-producto">
          <img src={asset(p.imagen)} alt={p.nombre} />
          <div>
            <span className="etiqueta">{p.categoria}</span>
            <h1>{p.nombre}</h1>
            <p>{p.descripcion}</p>
            <p className="precio-grande">${formatoDinero(p.precio)}</p>
            <div className="detalle-meta">
              <div>
                <small>Código</small>
                <strong>{p.codigo}</strong>
              </div>
              <div>
                <small>Stock actual</small>
                <strong>
                  {p.stock} {p.unidad.toLowerCase()}
                </strong>
              </div>
              <div>
                <small>Precio residencial</small>
                <strong>${formatoDinero(p.precio)}</strong>
              </div>
              <div>
                <small>Precio comercial</small>
                <strong>${formatoDinero(p.precioComercial)}</strong>
              </div>
            </div>
            <button className="boton agregar-carrito" data-id={p.id} onClick={() => agregar(p)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
