import { describe, expect, it } from 'vitest'
import { obtenerComunas, regiones } from './regiones.js'

describe('regiones y comunas', () => {
  it('incluye las 16 regiones', () => {
    expect(Object.keys(regiones)).toHaveLength(16)
  })

  it('obtenerComunas devuelve las comunas de Ñuble', () => {
    const comunas = obtenerComunas('Ñuble')
    expect(comunas).toContain('Chillán')
    expect(comunas).toContain('Chillán Viejo')
  })

  it('obtenerComunas devuelve un arreglo vacío para una región desconocida', () => {
    expect(obtenerComunas('Región inexistente')).toEqual([])
  })
})
