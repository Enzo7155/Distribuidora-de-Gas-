import { useState } from 'react'
import TarjetaProducto from '../components/molecules/TarjetaProducto.jsx'
import FiltroCategoria from '../components/molecules/FiltroCategoria.jsx'
import { CATEGORIAS, filtrarPorCategoria } from '../data/productos.js'

export default function Productos() {
  const [categoria, setCategoria] = useState('Todos')

  const lista = filtrarPorCategoria(categoria)

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

        </div>
      </section>
    </main>
  )
}
