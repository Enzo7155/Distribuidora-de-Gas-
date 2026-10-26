import { useState } from 'react'
import AdminLayout from '../components/AdminLayout.jsx'
import Campo from '../components/Campo.jsx'
import Mensaje from '../components/Mensaje.jsx'
import { errorCorreo, validarRun } from '../lib/validaciones.js'

const VALORES_INICIALES = { run: '', nombre: '', correo: '', rol: '' }

const usuarios = [
  { run: '19011022K', nombre: 'Administrador Demo', correo: 'admin@duoc.cl', rol: 'Administrador' },
  { run: '201234567', nombre: 'Operadora Demo', correo: 'operadora@gmail.com', rol: 'Operadora' },
]

const roles = ['Administrador', 'Operadora', 'Repartidor', 'Cliente']

export default function AdminUsuarios() {
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
      run: validarRun(valores.run),
      nombre: !valores.nombre.trim() ? 'Nombre requerido.' : '',
      correo: errorCorreo(valores.correo),
      rol: !valores.rol ? 'Seleccione un tipo de usuario.' : '',
    }
    setErrores(nuevos)
    const ok = Object.values(nuevos).every((x) => !x)
    setMensaje({
      texto: ok ? 'Usuario validado y listo para guardar.' : 'Revise los campos marcados.',
      ok,
    })
    if (ok) setValores(VALORES_INICIALES)
  }

  return (
    <AdminLayout titulo="Mantenedor de usuarios">
      <div className="cabecera-listado">
        <h2>Usuarios</h2>
        <button id="mostrar-form-usuario" className="boton" onClick={() => setMostrarForm((v) => !v)}>
          Nuevo usuario
        </button>
      </div>

      <form
        id="form-usuario-admin"
        className={`tarjeta-formulario ${mostrarForm ? '' : 'oculto'}`}
        noValidate
        onSubmit={enviar}
      >
        <div className="form-grid">
          <Campo label="RUN *" htmlFor="run-admin" error={errores.run}>
            <input
              id="run-admin"
              maxLength={9}
              placeholder="19011022K"
              value={valores.run}
              onChange={(e) => cambiar('run', e.target.value)}
            />
          </Campo>
          <Campo label="Nombre *" htmlFor="nombre-admin" error={errores.nombre}>
            <input
              id="nombre-admin"
              maxLength={50}
              value={valores.nombre}
              onChange={(e) => cambiar('nombre', e.target.value)}
            />
          </Campo>
          <Campo label="Correo *" htmlFor="correo-admin" error={errores.correo}>
            <input
              type="email"
              id="correo-admin"
              maxLength={100}
              value={valores.correo}
              onChange={(e) => cambiar('correo', e.target.value)}
            />
          </Campo>
          <Campo label="Tipo de usuario *" htmlFor="rol-admin" error={errores.rol}>
            <select id="rol-admin" value={valores.rol} onChange={(e) => cambiar('rol', e.target.value)}>
              <option value="">Seleccione</option>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </Campo>
        </div>
        <button className="boton" type="submit">
          Guardar usuario
        </button>
        <Mensaje estado={mensaje} />
      </form>

      <div className="tabla-responsive">
        <table>
          <thead>
            <tr>
              <th>RUN</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tabla-admin-usuarios">
            {usuarios.map((u) => (
              <tr key={u.run}>
                <td>{u.run}</td>
                <td>{u.nombre}</td>
                <td>{u.correo}</td>
                <td>{u.rol}</td>
                <td>Activo</td>
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
