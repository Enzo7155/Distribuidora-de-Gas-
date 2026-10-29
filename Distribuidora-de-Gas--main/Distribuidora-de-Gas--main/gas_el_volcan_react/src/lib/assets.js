// Prefija una ruta de public/ con el base URL de Vite.
// Así las imágenes siguen funcionando aunque la app se sirva en una subcarpeta.
export function asset(ruta) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${ruta}`.replace(/([^:]\/)\/+/g, '$1')
}
