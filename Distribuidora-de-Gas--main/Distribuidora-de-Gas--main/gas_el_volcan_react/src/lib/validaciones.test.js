import { describe, expect, it } from 'vitest'
import { errorCorreo, errorObligatorio, errorPassword, validarRun } from './validaciones.js'

describe('errorCorreo', () => {
  it('exige el correo cuando es obligatorio', () => {
    expect(errorCorreo('')).toBe('El correo es obligatorio.')
    expect(errorCorreo('   ')).toBe('El correo es obligatorio.')
  })

  it('permite el campo vacío cuando no es obligatorio', () => {
    expect(errorCorreo('', false)).toBe('')
  })

  it('acepta correos @duoc.cl, @profesor.duoc.cl y @gmail.com (sin distinguir mayúsculas)', () => {
    expect(errorCorreo('alumno@duoc.cl')).toBe('')
    expect(errorCorreo('profe@profesor.duoc.cl')).toBe('')
    expect(errorCorreo('persona@gmail.com')).toBe('')
    expect(errorCorreo('Persona@GMAIL.com')).toBe('')
  })

  it('rechaza dominios no permitidos y formatos inválidos', () => {
    const mensaje = 'Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    expect(errorCorreo('persona@hotmail.com')).toBe(mensaje)
    expect(errorCorreo('sinarroba.com')).toBe(mensaje)
  })

  it('rechaza correos de más de 100 caracteres', () => {
    const largo = `${'a'.repeat(95)}@gmail.com`
    expect(errorCorreo(largo)).toBe('El correo no puede superar 100 caracteres.')
  })
})

describe('errorPassword', () => {
  it('exige la contraseña', () => {
    expect(errorPassword('')).toBe('La contraseña es obligatoria.')
  })

  it('exige entre 4 y 10 caracteres', () => {
    expect(errorPassword('123')).toBe('La contraseña debe tener entre 4 y 10 caracteres.')
    expect(errorPassword('12345678901')).toBe('La contraseña debe tener entre 4 y 10 caracteres.')
  })

  it('acepta contraseñas de 4 a 10 caracteres', () => {
    expect(errorPassword('1234')).toBe('')
    expect(errorPassword('1234567890')).toBe('')
  })
})

describe('errorObligatorio', () => {
  it('exige el valor y respeta el máximo', () => {
    expect(errorObligatorio('', 100, 'El nombre es obligatorio.')).toBe('El nombre es obligatorio.')
    expect(errorObligatorio('x'.repeat(101), 100, 'El nombre es obligatorio.', 'Máximo 100 caracteres.')).toBe(
      'Máximo 100 caracteres.',
    )
    expect(errorObligatorio('Ana', 100, 'El nombre es obligatorio.')).toBe('')
  })
})

describe('validarRun', () => {
  it('exige el RUN', () => {
    expect(validarRun('')).toBe('El RUN es obligatorio.')
  })

  it('valida el formato del RUN', () => {
    expect(validarRun('123')).toBe('Ingrese RUN sin puntos ni guion, entre 7 y 9 caracteres.')
    expect(validarRun('12.345.678-5')).toBe('Ingrese RUN sin puntos ni guion, entre 7 y 9 caracteres.')
  })

  it('acepta RUN válidos', () => {
    expect(validarRun('123456785')).toBe('')
    expect(validarRun('190110222')).toBe('')
  })

  it('rechaza RUN con dígito verificador incorrecto', () => {
    expect(validarRun('123456784')).toBe('El RUN ingresado no es válido.')
    expect(validarRun('19011022K')).toBe('El RUN ingresado no es válido.')
  })
})
