import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext.jsx'
import { formatoDinero } from '../lib/dinero.js'

export default function PanelCarrito() {
  const { carrito, abierto, cerrar, eliminar, vaciar, total } = useCarrito()

  return (
    <aside
      id="panel-carrito"
      className={`panel-carrito ${abierto ? '' : 'oculto'}`}
      aria-label="Carrito de compras"
    >
      <div className="panel-cabecera">
        <h2>Mi carrito</h2>
        <button id="cerrar-carrito" className="btn-cerrar" aria-label="Cerrar carrito" onClick={cerrar}>
          ×
        </button>
      </div>

      <div id="lista-carrito">
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          carrito.map((p) => (
            <div className="item-carrito" key={p.id}>
              <div>
                <strong>{p.nombre}</strong>
                <p>Cantidad: {p.cantidad}</p>
                <p>Subtotal: ${formatoDinero(p.precio * p.cantidad)}</p>
              </div>
              <button onClick={() => eliminar(p.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>

      <div className="resumen-carrito">
        <strong>
          Total: $<span id="total-carrito">{formatoDinero(total)}</span>
        </strong>
        <button id="vaciar-carrito" className="boton boton-peligro" onClick={vaciar}>
          Vaciar carrito
        </button>
        <Link className="boton boton-ancho" to="/seguimiento">
          Continuar con pedido
        </Link>
      </div>
    </aside>
  )
}
