// =====================================================
// LÓGICA DEL CARRITO (funciones puras, fáciles de testear)
// =====================================================

/** Agrega un producto; si ya existe, aumenta la cantidad. Devuelve un nuevo carrito. */
export function agregarAlCarrito(carrito, producto) {
  const existente = carrito.find((x) => x.id === producto.id)
  if (existente) {
    return carrito.map((x) => (x.id === producto.id ? { ...x, cantidad: x.cantidad + 1 } : x))
  }
  return [...carrito, { ...producto, cantidad: 1 }]
}

/** Elimina un producto del carrito por su id. */
export function eliminarDelCarrito(carrito, id) {
  return carrito.filter((x) => x.id !== Number(id))
}

/** Cantidad total de unidades en el carrito (para el contador del header). */
export function contarItems(carrito) {
  return carrito.reduce((acc, p) => acc + p.cantidad, 0)
}

/** Monto total del carrito en pesos. */
export function calcularTotal(carrito) {
  return carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
}
