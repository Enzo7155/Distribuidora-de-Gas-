import { Link } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext.jsx'
import { asset } from '../../lib/assets.js'
import { formatoDinero } from '../../lib/dinero.js'

export default function TarjetaProducto({ producto }) {
  const { agregar } = useCarrito()

  return (
    <article className="producto">
      <img
        src={asset(producto.imagen)}
        alt={producto.nombre}
        loading="lazy"
      />

      <div className="producto-contenido">
        <span className="categoria">
          {producto.codigo} · {producto.categoria}
        </span>

        <h3>{producto.nombre}</h3>

        <p className="descripcion">
          {producto.descripcion}
        </p>

        <p className="precio">
          ${formatoDinero(producto.precio)}
        </p>

        <span className="stock">
          Stock: {producto.stock}
        </span>

        <div className="acciones-producto">
          <Link
            className="boton boton-sec"
            to={`/detalle-producto/${producto.id}`}
          >
            Detalle
          </Link>

          <button
            type="button"
            className="boton agregar-carrito"
            data-id={producto.id}
            onClick={() => agregar(producto)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  )
}
