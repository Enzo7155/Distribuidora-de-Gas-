
import { useEffect, useState } from 'react'
import TarjetaProducto from '../components/molecules/TarjetaProducto.jsx'
import FiltroCategoria from '../components/molecules/FiltroCategoria.jsx'
import { CATEGORIAS } from '../data/productos.js'

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

export default function Productos() {
  const [categoria, setCategoria] = useState('Todos')
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()

    async function cargarProductos() {
      try {
        setCargando(true)
        setError('')

        const respuesta = await fetch(`${API_URL}/productos`, {
          signal: controlador.signal
        })

        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`)
        }

        const datos = await respuesta.json()

        if (!Array.isArray(datos)) {
          throw new Error('La API no devolvió una lista de productos')
        }

        setProductos(datos)
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error al cargar productos:', err)
          setError('No se pudieron cargar los productos desde el servidor.')
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false)
        }
      }
    }

    cargarProductos()

    return () => controlador.abort()
  }, [])

  const lista =
    categoria === 'Todos'
      ? productos
      : productos.filter(
          (producto) => producto.categoria === categoria
        )

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Catálogo</span>
          <h1>Productos y tarifas</h1>
          <p>
            Consulta cilindros, reguladores, mangueras,
            conexiones y accesorios.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">

          <FiltroCategoria
            categorias={CATEGORIAS}
            valor={categoria}
            onCambiar={setCategoria}
          />

          {cargando && (
            <p>Cargando productos...</p>
          )}

          {error && (
            <p role="alert">{error}</p>
          )}

          {!cargando && !error && (
            <div
              id="grilla-productos"
              className="grilla-productos"
            >
              {lista.map((producto) => (
                <TarjetaProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  )
}
