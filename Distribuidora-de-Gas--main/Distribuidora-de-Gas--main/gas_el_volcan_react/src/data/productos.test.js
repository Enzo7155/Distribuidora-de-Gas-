import { describe, expect, it } from 'vitest'
import { CATEGORIAS, filtrarPorCategoria, obtenerProducto, productos } from './productos.js'

describe('catálogo de productos', () => {
  it('contiene los 14 productos del catálogo original', () => {
    expect(productos).toHaveLength(14)
  })

  it('tiene ids y códigos únicos', () => {
    const ids = productos.map((p) => p.id)
    const codigos = productos.map((p) => p.codigo)
    expect(new Set(ids).size).toBe(ids.length)
    expect(new Set(codigos).size).toBe(codigos.length)
  })

  it('cada producto tiene los campos requeridos y precios coherentes', () => {
    productos.forEach((p) => {
      expect(p).toMatchObject({
        id: expect.any(Number),
        codigo: expect.any(String),
        categoria: expect.any(String),
        nombre: expect.any(String),
        precio: expect.any(Number),
        stock: expect.any(Number),
        imagen: expect.any(String),
      })
      expect(CATEGORIAS).toContain(p.categoria)
      expect(p.precioComercial).toBeLessThanOrEqual(p.precio)
      expect(p.stock).toBeGreaterThanOrEqual(0)
    })
  })
})

describe('filtrarPorCategoria', () => {
  it('devuelve todo el catálogo con "Todos" o sin filtro', () => {
    expect(filtrarPorCategoria('Todos')).toHaveLength(14)
    expect(filtrarPorCategoria(undefined)).toHaveLength(14)
  })

  it('filtra por una categoría específica', () => {
    const cilindros = filtrarPorCategoria('Cilindros de Gas')
    expect(cilindros).toHaveLength(4)
    expect(cilindros.every((p) => p.categoria === 'Cilindros de Gas')).toBe(true)
  })
})

describe('obtenerProducto', () => {
  it('busca por id numérico o texto', () => {
    expect(obtenerProducto(2).nombre).toBe('Cilindro GLP 11 kg')
    expect(obtenerProducto('2').nombre).toBe('Cilindro GLP 11 kg')
  })

  it('devuelve el primer producto cuando el id no existe', () => {
    expect(obtenerProducto(9999)).toBe(productos[0])
    expect(obtenerProducto(undefined)).toBe(productos[0])
  })
})
