// Formato de dinero usado en toda la tienda (miles con punto, estilo es-CL).
export function formatoDinero(valor) {
  const numero = Math.round(Number(valor) || 0)
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
