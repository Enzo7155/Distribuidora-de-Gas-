import { useState } from 'react'
import TarjetaProducto from '../components/TarjetaProducto.jsx'
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
          <p>Consulta cilindros, reguladores, mangueras, conexiones y accesorios.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor">
          <div className="barra-filtros">
            <label htmlFor="filtro-categoria">Categoría</label>
            <select id="filtro-categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="Todos">Todos los productos</option>
              {CATEGORIAS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div id="grilla-productos" className="grilla-productos">
            {lista.map((p) => (
              <TarjetaProducto key={p.id} producto={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
