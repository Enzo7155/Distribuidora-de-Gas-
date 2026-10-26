import { describe, expect, it } from 'vitest'
import { formatoDinero } from './dinero.js'

describe('formatoDinero', () => {
  it('agrupa los miles con punto', () => {
    expect(formatoDinero(6500)).toBe('6.500')
    expect(formatoDinero(12000)).toBe('12.000')
    expect(formatoDinero(1234567)).toBe('1.234.567')
  })

  it('maneja el cero, negativos y valores vacíos', () => {
    expect(formatoDinero(0)).toBe('0')
    expect(formatoDinero(-1000)).toBe('-1.000')
    expect(formatoDinero(null)).toBe('0')
    expect(formatoDinero('')).toBe('0')
  })

  it('redondea los decimales', () => {
    expect(formatoDinero(999.6)).toBe('1.000')
  })
})
