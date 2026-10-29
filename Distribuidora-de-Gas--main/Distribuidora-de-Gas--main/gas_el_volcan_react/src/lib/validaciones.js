// =====================================================
// VALIDACIONES GENERALES (misma lógica que script.js original)
// =====================================================

export const PATRON_CORREO = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i

/**
 * Valida un correo. `requerido=false` permite dejarlo vacío (formulario de contacto).
 * Devuelve el mensaje de error o cadena vacía si es válido.
 */
export function errorCorreo(valor, requerido = true) {
  const v = (valor ?? '').trim()
  if (!v && requerido) return 'El correo es obligatorio.'
  if (!v && !requerido) return ''
  if (v.length > 100) return 'El correo no puede superar 100 caracteres.'
  if (!PATRON_CORREO.test(v)) return 'Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.'
  return ''
}

/** Contraseña obligatoria, entre 4 y 10 caracteres. */
export function errorPassword(valor) {
  const v = valor ?? ''
  if (!v) return 'La contraseña es obligatoria.'
  if (v.length < 4 || v.length > 10) return 'La contraseña debe tener entre 4 y 10 caracteres.'
  return ''
}

/** Texto obligatorio con un máximo de caracteres. */
export function errorObligatorio(valor, maximo, mensajeVacio, mensajeMaximo) {
  const v = (valor ?? '').trim()
  if (!v) return mensajeVacio
  if (v.length > maximo) return mensajeMaximo || `Máximo ${maximo} caracteres.`
  return ''
}

/** Valida el RUN chileno. Debe venir sin puntos ni guion (ej: 19011022K). */
export function validarRun(run) {
  const limpio = (run ?? '').trim().toUpperCase()
  if (!limpio) return 'El RUN es obligatorio.'
  if (!/^[0-9]{6,8}[0-9K]$/.test(limpio)) {
    return 'Ingrese RUN sin puntos ni guion, entre 7 y 9 caracteres.'
  }
  const cuerpo = limpio.slice(0, -1)
  const dv = limpio.slice(-1)
  let suma = 0
  let mult = 2
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * mult
    mult = mult === 7 ? 2 : mult + 1
  }
  const resto = 11 - (suma % 11)
  const esperado = resto === 11 ? '0' : resto === 10 ? 'K' : String(resto)
  return dv === esperado ? '' : 'El RUN ingresado no es válido.'
}
