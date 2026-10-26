import { describe, expect, it } from 'vitest'
import { agregarAlCarrito, calcularTotal, contarItems, eliminarDelCarrito } from './carrito.js'

const producto = { id: 1, nombre: 'Cilindro GLP 5 kg', precio: 6500 }
const producto2 = { id: 2, nombre: 'Cilindro GLP 11 kg', precio: 12000 }

describe('agregarAlCarrito', () => {
  it('agrega un producto nuevo con cantidad 1', () => {
    const carrito = agregarAlCarrito([], producto)
    expect(carrito).toEqual([{ ...producto, cantidad: 1 }])
  })

  it('aumenta la cantidad si el producto ya está en el carrito', () => {
    const carrito = agregarAlCarrito(agregarAlCarrito([], producto), producto)
    expect(carrito).toHaveLength(1)
    expect(carrito[0].cantidad).toBe(2)
  })

  it('no muta el carrito original', () => {
    const original = [{ ...producto, cantidad: 1 }]
    agregarAlCarrito(original, producto)
    expect(original[0].cantidad).toBe(1)
  })
})

describe('eliminarDelCarrito', () => {
  it('elimina el producto por id', () => {
    const carrito = [
      { ...producto, cantidad: 1 },
      { ...producto2, cantidad: 2 },
    ]
    expect(eliminarDelCarrito(carrito, 1)).toEqual([{ ...producto2, cantidad: 2 }])
  })

  it('acepta el id como texto', () => {
    const carrito = [{ ...producto, cantidad: 1 }]
    expect(eliminarDelCarrito(carrito, '1')).toEqual([])
  })
})

describe('contarItems y calcularTotal', () => {
  it('suma las unidades y los montos del carrito', () => {
    const carrito = [
      { ...producto, cantidad: 2 },
      { ...producto2, cantidad: 1 },
    ]
    expect(contarItems(carrito)).toBe(3)
    expect(calcularTotal(carrito)).toBe(6500 * 2 + 12000)
  })

  it('devuelve 0 con el carrito vacío', () => {
    expect(contarItems([])).toBe(0)
    expect(calcularTotal([])).toBe(0)
  })
})
