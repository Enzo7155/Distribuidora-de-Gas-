import { useState } from 'react'
import Campo from '../components/Campo.jsx'
import Mensaje from '../components/Mensaje.jsx'
import { errorCorreo, errorObligatorio } from '../lib/validaciones.js'

export default function Contacto() {
  const [valores, setValores] = useState({ nombre: '', correo: '', comentario: '' })
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState(null)

  function cambiar(campo, valor) {
    setValores((v) => ({ ...v, [campo]: valor }))
  }

  function enviar(e) {
    e.preventDefault()
    const nuevos = {
      nombre: errorObligatorio(valores.nombre, 100, 'El nombre es obligatorio.', 'Máximo 100 caracteres.'),
      correo: errorCorreo(valores.correo, false),
      comentario: errorObligatorio(valores.comentario, 500, 'El comentario es obligatorio.', 'Máximo 500 caracteres.'),
    }
    setErrores(nuevos)
    const ok = !nuevos.nombre && !nuevos.correo && !nuevos.comentario
    setMensaje({
      texto: ok ? 'Mensaje enviado correctamente.' : 'Revise los campos marcados.',
      ok,
    })
    if (ok) setValores({ nombre: '', correo: '', comentario: '' })
  }

  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">Ayuda</span>
          <h1>Contacto</h1>
          <p>Envía un mensaje a la distribuidora.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor formulario-contenedor">
          <form id="form-contacto" className="tarjeta-formulario" noValidate onSubmit={enviar}>
            <Campo label="Nombre *" htmlFor="nombre-contacto" error={errores.nombre}>
              <input
                id="nombre-contacto"
                maxLength={100}
                placeholder="Ingrese su nombre"
                value={valores.nombre}
                onChange={(e) => cambiar('nombre', e.target.value)}
              />
            </Campo>
            <Campo label="Correo electrónico" htmlFor="correo-contacto" error={errores.correo}>
              <input
                type="email"
                id="correo-contacto"
                maxLength={100}
                placeholder="nombre@gmail.com"
                value={valores.correo}
                onChange={(e) => cambiar('correo', e.target.value)}
              />
            </Campo>
            <Campo label="Comentario *" htmlFor="comentario-contacto" error={errores.comentario}>
              <textarea
                id="comentario-contacto"
                maxLength={500}
                rows={6}
                placeholder="Escriba su mensaje"
                value={valores.comentario}
                onChange={(e) => cambiar('comentario', e.target.value)}
              />
            </Campo>
            <button type="submit" className="boton boton-ancho">
              Enviar mensaje
            </button>
            <Mensaje estado={mensaje} />
          </form>
        </div>
      </section>
    </main>
  )
}
