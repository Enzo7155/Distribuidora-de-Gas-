import { useState } from 'react'
import Campo from '../components/Campo.jsx'
import Mensaje from '../components/Mensaje.jsx'
import { regiones } from '../data/regiones.js'
import { errorCorreo, errorPassword, validarRun } from '../lib/validaciones.js'

const VALORES_INICIALES = {
  run: '',
  nombre: '',
  apellidos: '',
  correo: '',
  fechaNacimiento: '',
  password: '',
  region: '',
  comuna: '',
  direccion: '',
}

export default function Registro() {
  const [valores, setValores] = useState(VALORES_INICIALES)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState(null)

  const comunasDisponibles = valores.region ? regiones[valores.region] || [] : []

  function cambiar(campo, valor) {
    setValores((v) => {
      const siguiente = { ...v, [campo]: valor }
      // Al cambiar de región se resetea la comuna, igual que en el script original.
      if (campo === 'region') siguiente.comuna = ''
      return siguiente
    })
  }

  function enviar(e) {
    e.preventDefault()
    const nuevos = {
      run: validarRun(valores.run),
      nombre: !valores.nombre.trim() ? 'El nombre es obligatorio.' : '',
      apellidos: !valores.apellidos.trim() ? 'Los apellidos son obligatorios.' : '',
      correo: errorCorreo(valores.correo),
      password: errorPassword(valores.password),
      region: !valores.region ? 'Seleccione una región.' : '',
      comuna: !valores.comuna ? 'Seleccione una comuna.' : '',
      direccion: !valores.direccion.trim() ? 'La dirección es obligatoria.' : '',
    }
    setErrores(nuevos)
    const ok = Object.values(nuevos).every((x) => !x)
    setMensaje({
      texto: ok ? 'Usuario registrado correctamente.' : 'Revise los campos marcados.',
      ok,
    })
    if (ok) setValores(VALORES_INICIALES)
  }

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Cuenta de cliente</span>
          <h1>Registro de usuario</h1>
          <p>Completa tus datos para crear una cuenta.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor formulario-contenedor formulario-ancho">
          <form id="form-registro" className="tarjeta-formulario" noValidate onSubmit={enviar}>
            <div className="form-grid">
              <Campo label="RUN *" htmlFor="run" error={errores.run}>
                <input
                  id="run"
                  maxLength={9}
                  placeholder="19011022K"
                  value={valores.run}
                  onChange={(e) => cambiar('run', e.target.value)}
                />
              </Campo>
              <Campo label="Nombre *" htmlFor="nombre-registro" error={errores.nombre}>
                <input
                  id="nombre-registro"
                  maxLength={50}
                  autoComplete="given-name"
                  value={valores.nombre}
                  onChange={(e) => cambiar('nombre', e.target.value)}
                />
              </Campo>
              <Campo label="Apellidos *" htmlFor="apellidos-registro" error={errores.apellidos}>
                <input
                  id="apellidos-registro"
                  maxLength={100}
                  autoComplete="family-name"
                  value={valores.apellidos}
                  onChange={(e) => cambiar('apellidos', e.target.value)}
                />
              </Campo>
              <Campo label="Correo *" htmlFor="correo-registro" error={errores.correo}>
                <input
                  type="email"
                  id="correo-registro"
                  maxLength={100}
                  autoComplete="email"
                  placeholder="nombre@gmail.com"
                  value={valores.correo}
                  onChange={(e) => cambiar('correo', e.target.value)}
                />
              </Campo>
              <Campo label="Fecha de nacimiento" htmlFor="fecha-nacimiento">
                <input
                  type="date"
                  id="fecha-nacimiento"
                  value={valores.fechaNacimiento}
                  onChange={(e) => cambiar('fechaNacimiento', e.target.value)}
                />
              </Campo>
              <Campo label="Contraseña *" htmlFor="password-registro" error={errores.password}>
                <input
                  type="password"
                  id="password-registro"
                  maxLength={10}
                  placeholder="Entre 4 y 10 caracteres"
                  value={valores.password}
                  onChange={(e) => cambiar('password', e.target.value)}
                />
              </Campo>
              <Campo label="Región *" htmlFor="region" error={errores.region}>
                <select id="region" value={valores.region} onChange={(e) => cambiar('region', e.target.value)}>
                  <option value="">Seleccione una región</option>
                  {Object.keys(regiones).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Campo>
              <Campo label="Comuna *" htmlFor="comuna" error={errores.comuna}>
                <select
                  id="comuna"
                  disabled={!comunasDisponibles.length}
                  value={valores.comuna}
                  onChange={(e) => cambiar('comuna', e.target.value)}
                >
                  <option value="">Seleccione una comuna</option>
                  {comunasDisponibles.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Campo>
            </div>
            <Campo label="Dirección *" htmlFor="direccion" error={errores.direccion}>
              <input
                id="direccion"
                maxLength={300}
                autoComplete="street-address"
                placeholder="Calle, número y referencia"
                value={valores.direccion}
                onChange={(e) => cambiar('direccion', e.target.value)}
              />
            </Campo>
            <button type="submit" className="boton boton-ancho">
              Crear cuenta
            </button>
            <Mensaje estado={mensaje} />
          </form>
        </div>
      </section>
    </main>
  )
}
