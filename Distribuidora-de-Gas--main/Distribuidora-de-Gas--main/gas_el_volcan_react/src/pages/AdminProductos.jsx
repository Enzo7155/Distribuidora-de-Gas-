import { useState } from 'react'
import AdminLayout from '../components/AdminLayout.jsx'
import Campo from '../components/Campo.jsx'
import Mensaje from '../components/Mensaje.jsx'
import { productos } from '../data/productos.js'
import { formatoDinero } from '../lib/dinero.js'

const VALORES_INICIALES = { codigo: '', nombre: '', precio: '', stock: '', descripcion: '' }

export default function AdminProductos() {
  const [mostrarForm, setMostrarForm] = useState(false)
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState(null)

  function cambiar(campo, valor) {
    setValores((v) => ({ ...v, [campo]: valor }))
  }

  function enviar(e) {
    e.preventDefault()
    const nuevos = {
      codigo: valores.codigo.trim().length < 3 ? 'Código requerido, mínimo 3 caracteres.' : '',
      nombre: !valores.nombre.trim() ? 'Nombre requerido.' : '',
      precio: valores.precio === '' || Number(valores.precio) < 0 ? 'Precio requerido, mínimo 0.' : '',
      stock:
        valores.stock === '' || Number(valores.stock) < 0 || !Number.isInteger(Number(valores.stock))
          ? 'Stock requerido, entero mínimo 0.'
          : '',
    }
    setErrores(nuevos)
    const ok = Object.values(nuevos).every((x) => !x)
    setMensaje({
      texto: ok ? 'Producto validado y listo para guardar.' : 'Revise los campos marcados.',
      ok,
    })
    if (ok) setValores(VALORES_INICIALES)
  }

  return (
    <AdminLayout titulo="Mantenedor de productos">
      <div className="cabecera-listado">
        <h2>Productos</h2>
        <button id="mostrar-form-producto" className="boton" onClick={() => setMostrarForm((v) => !v)}>
          Nuevo producto
        </button>
      </div>

      <form
        id="form-producto-admin"
        className={`tarjeta-formulario ${mostrarForm ? '' : 'oculto'}`}
        noValidate
        onSubmit={enviar}
      >
        <div className="form-grid">
          <Campo label="Código *" htmlFor="codigo-producto-admin" error={errores.codigo}>
            <input
              id="codigo-producto-admin"
              minLength={3}
              value={valores.codigo}
              onChange={(e) => cambiar('codigo', e.target.value)}
            />
          </Campo>
          <Campo label="Nombre *" htmlFor="nombre-producto-admin" error={errores.nombre}>
            <input
              id="nombre-producto-admin"
              maxLength={100}
              value={valores.nombre}
              onChange={(e) => cambiar('nombre', e.target.value)}
            />
          </Campo>
          <Campo label="Precio *" htmlFor="precio-producto-admin" error={errores.precio}>
            <input
              id="precio-producto-admin"
              type="number"
              min="0"
              step="0.01"
              value={valores.precio}
              onChange={(e) => cambiar('precio', e.target.value)}
            />
          </Campo>
          <Campo label="Stock *" htmlFor="stock-producto-admin" error={errores.stock}>
            <input
              id="stock-producto-admin"
              type="number"
              min="0"
              step="1"
              value={valores.stock}
              onChange={(e) => cambiar('stock', e.target.value)}
            />
          </Campo>
        </div>
        <Campo label="Descripción" htmlFor="descripcion-producto-admin">
          <textarea
            id="descripcion-producto-admin"
            maxLength={500}
            value={valores.descripcion}
            onChange={(e) => cambiar('descripcion', e.target.value)}
          />
        </Campo>
        <button className="boton" type="submit">
          Guardar producto
        </button>
        <Mensaje estado={mensaje} />
      </form>

      <div className="tabla-responsive">
        <table id="tabla-admin-productos">
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <tr key={p.id}>
                <td>{p.codigo}</td>
                <td>{p.nombre}</td>
                <td>{p.categoria}</td>
                <td>${formatoDinero(p.precio)}</td>
                <td>{p.stock}</td>
                <td>
                  <button className="boton-pequeno">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
