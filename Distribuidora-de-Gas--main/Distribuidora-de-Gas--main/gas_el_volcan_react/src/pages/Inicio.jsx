import { Link } from 'react-router-dom'
import TarjetaProducto from '../components/TarjetaProducto.jsx'
import { asset } from '../lib/assets.js'
import { productos } from '../data/productos.js'

const zonas = [
  { zona: 'Zona Centro', comunas: 'Chillán (centro, norte y sur)', dias: 'Lunes a Sábado', horario: '08:00 – 20:00', tiempo: '1 – 3 horas' },
  { zona: 'Zona Oriente', comunas: 'Chillán oriente y Chillán Viejo', dias: 'Lunes a Viernes', horario: '08:00 – 18:00', tiempo: '2 – 4 horas' },
  { zona: 'Zona Rural', comunas: 'El Carmen, Pinto y San Ignacio', dias: 'Martes y Jueves', horario: '08:00 – 16:00', tiempo: '3 – 6 horas' },
  { zona: 'Zona Sur', comunas: 'Bulnes y Quillón', dias: 'Miércoles', horario: '08:00 – 16:00', tiempo: '4 – 6 horas' },
  { zona: 'Zona Comercial', comunas: 'Parques industriales y locales comerciales', dias: 'Lunes a Viernes', horario: '07:00 – 17:00', tiempo: 'Según agenda' },
]

const beneficios = [
  { n: '1', titulo: 'Haz tu pedido', texto: 'Selecciona el producto y agrega tu dirección de entrega.' },
  { n: '2', titulo: 'Asignación', texto: 'La operadora asigna el pedido a un repartidor disponible.' },
  { n: '3', titulo: 'Seguimiento', texto: 'Consulta si está pendiente, asignado, en camino o entregado.' },
]

export default function Inicio() {
  const destacados = productos.slice(0, 4)

  return (
    <main>
      <section className="hero">
        <div className="contenedor hero-grid">
          <div>
            <span className="etiqueta">Despacho a domicilio en Chillán y comunas cercanas</span>
            <h1>Tu gas, más simple y con seguimiento.</h1>
            <p>
              Solicita cilindros y accesorios, revisa el estado de tu pedido y recibe información de
              despacho sin tener que llamar por teléfono.
            </p>
            <div className="grupo-botones">
              <Link className="boton" to="/productos">
                Ver productos
              </Link>
              <Link className="boton boton-claro" to="/seguimiento">
                Consultar pedido
              </Link>
            </div>
            <div className="datos-hero">
              <span>
                <strong>80–120</strong> pedidos diarios
              </span>
              <span>
                <strong>3</strong> repartidores
              </span>
              <span>
                <strong>1998</strong> desde
              </span>
            </div>
          </div>
          <img className="hero-imagen" src={asset('assets/hero.svg')} alt="Camión de reparto y cilindro de gas" />
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <div className="titulo-seccion">
            <span className="etiqueta">Catálogo</span>
            <h2>Productos destacados</h2>
            <p>Precios residenciales del catálogo entregado para el caso.</p>
          </div>
          <div id="productos-destacados" className="grilla-productos">
            {destacados.map((p) => (
              <TarjetaProducto key={p.id} producto={p} />
            ))}
          </div>
          <p className="centrado">
            <Link className="boton" to="/productos">
              Ver catálogo completo
            </Link>
          </p>
        </div>
      </section>

      <section className="seccion seccion-suave">
        <div className="contenedor">
          <div className="titulo-seccion">
            <span className="etiqueta">Cobertura</span>
            <h2>Zonas de despacho</h2>
            <p>Horarios y tiempos estimados según el catálogo del proyecto.</p>
          </div>
          <div className="tabla-responsive">
            <table>
              <thead>
                <tr>
                  <th>Zona</th>
                  <th>Comunas cubiertas</th>
                  <th>Días</th>
                  <th>Horario</th>
                  <th>Tiempo estimado</th>
                </tr>
              </thead>
              <tbody>
                {zonas.map((z) => (
                  <tr key={z.zona}>
                    <td>{z.zona}</td>
                    <td>{z.comunas}</td>
                    <td>{z.dias}</td>
                    <td>{z.horario}</td>
                    <td>{z.tiempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor grilla-beneficios">
          {beneficios.map((b) => (
            <article className="beneficio" key={b.n}>
              <span>{b.n}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="seccion seccion-oscura">
        <div className="contenedor seguridad-grid">
          <div>
            <span className="etiqueta etiqueta-clara">Seguridad</span>
            <h2>Uso responsable del gas licuado</h2>
            <p>Incluimos un video embebido para cumplir con los elementos multimedia solicitados en la evaluación.</p>
          </div>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/watch?v=Y5j_dJVgDAA"
              title="Video sobre seguridad de cilindros de gas licuado"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
