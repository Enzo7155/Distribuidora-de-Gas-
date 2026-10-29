import { useState } from 'react'
import { Link } from 'react-router-dom'
import Campo from '../components/Campo.jsx'
import Mensaje from '../components/Mensaje.jsx'
import { errorCorreo, errorPassword } from '../lib/validaciones.js'

export default function Login() {
  const [valores, setValores] = useState({ correo: '', password: '' })
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState(null)

  function cambiar(campo, valor) {
    setValores((v) => ({ ...v, [campo]: valor }))
  }

  function enviar(e) {
    e.preventDefault()
    const nuevos = {
      correo: errorCorreo(valores.correo),
      password: errorPassword(valores.password),
    }
    setErrores(nuevos)
    const ok = !nuevos.correo && !nuevos.password
    setMensaje({
      texto: ok ? 'Inicio de sesión validado correctamente.' : 'Revise los campos marcados.',
      ok,
    })
    if (ok) setValores({ correo: '', password: '' })
  }

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Acceso</span>
          <h1>Inicio de sesión</h1>
          <p>Ingresa con tu correo y contraseña.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor formulario-contenedor">
          <form id="form-login" className="tarjeta-formulario" noValidate onSubmit={enviar}>
            <Campo label="Correo electrónico *" htmlFor="correo-login" error={errores.correo}>
              <input
                type="email"
                id="correo-login"
                maxLength={100}
                autoComplete="email"
                placeholder="nombre@duoc.cl"
                value={valores.correo}
                onChange={(e) => cambiar('correo', e.target.value)}
              />
            </Campo>
            <Campo label="Contraseña *" htmlFor="password-login" error={errores.password}>
              <input
                type="password"
                id="password-login"
                maxLength={10}
                autoComplete="current-password"
                placeholder="Entre 4 y 10 caracteres"
                value={valores.password}
                onChange={(e) => cambiar('password', e.target.value)}
              />
            </Campo>
            <button type="submit" className="boton boton-ancho">
              Ingresar
            </button>
            <Mensaje estado={mensaje} />
            <p className="ayuda">
              ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
            </p>
            <p className="ayuda">
              Para la demostración académica: <Link to="/admin">abrir panel administrador</Link>.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
