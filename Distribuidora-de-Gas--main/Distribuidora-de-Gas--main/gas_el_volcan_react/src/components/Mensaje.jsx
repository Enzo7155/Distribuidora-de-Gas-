/** Mensaje de resultado (verde cuando ok, rojo cuando hay error). */
export default function Mensaje({ estado }) {
  if (!estado) return <p className="mensaje" />
  return (
    <p className={`mensaje ${estado.ok ? 'ok' : 'mal'}`} role="status">
      {estado.texto}
    </p>
  )
}
