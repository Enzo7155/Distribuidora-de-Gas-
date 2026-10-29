import { useState } from 'react'
import Mensaje from '../components/Mensaje.jsx'

export default function Seguimiento() {
  const [codigo, setCodigo] = useState('')
  const [mensaje, setMensaje] = useState(null)
  const [mostrarEstado, setMostrarEstado] = useState(false)

  function consultar() {
    const limpio = codigo.trim().toUpperCase()
    if (!limpio) {
      setMensaje({ texto: 'Ingrese un código de pedido.', ok: false })
      setMostrarEstado(false)
      return
    }
    setMensaje({
      texto: `Pedido ${limpio}: repartidor en camino. Entrega estimada entre 1 y 3 horas.`,
      ok: true,
    })
    setMostrarEstado(true)
  }

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Pedido</span>
          <h1>Seguimiento de entrega</h1>
          <p>Consulta el estado de tu pedido con un código de ejemplo.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor seguimiento-grid">
          <div className="tarjeta-formulario">
            <div className="campo">
              <label htmlFor="codigo-pedido">Código de pedido</label>
              <input
                id="codigo-pedido"
                placeholder="Ejemplo: EV-1024"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>
            <button id="buscar-pedido" className="boton boton-ancho" onClick={consultar}>
              Consultar estado
            </button>
            <Mensaje estado={mensaje} />
            <div id="estado-pedido" className={`estado-pedido ${mostrarEstado ? '' : 'oculto'}`}>
              <div className="pasos">
                <div className="paso completado">
                  <span>✓</span>
                  <p>Pedido registrado</p>
                </div>
                <div className="paso completado">
                  <span>✓</span>
                  <p>Asignado</p>
                </div>
                <div className="paso activo">
                  <span>3</span>
                  <p>En camino</p>
                </div>
                <div className="paso">
                  <span>4</span>
                  <p>Entregado</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mapa-simulado">
            <div className="pin bodega">Bodega</div>
            <div className="ruta"></div>
            <div className="camion">🚚</div>
            <div className="pin destino">Entrega</div>
            <p>Mapa demostrativo para representar la ubicación del repartidor y el punto de entrega.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
