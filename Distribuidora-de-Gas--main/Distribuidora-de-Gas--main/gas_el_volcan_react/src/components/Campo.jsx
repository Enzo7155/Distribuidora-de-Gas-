/** Campo de formulario con label y mensaje de error (equivalente a .campo del CSS original). */
export default function Campo({ label, htmlFor, error, children }) {
  return (
    <div className="campo">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      <small id={error ? `${htmlFor}-error` : undefined} className="error">
        {error || ''}
      </small>
    </div>
  )
}
