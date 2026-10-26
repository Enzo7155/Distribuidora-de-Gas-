import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Login from './Login.jsx'
import { renderConProveedores } from '../test/utils.jsx'

describe('Login', () => {
  it('muestra errores cuando se envía vacío', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Login />)

    await user.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(screen.getByText('El correo es obligatorio.')).toBeInTheDocument()
    expect(screen.getByText('La contraseña es obligatoria.')).toBeInTheDocument()
    expect(screen.getByText('Revise los campos marcados.')).toBeInTheDocument()
  })

  it('rechaza un correo de dominio no permitido', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Login />)

    await user.type(screen.getByLabelText('Correo electrónico *'), 'persona@hotmail.com')
    await user.type(screen.getByLabelText('Contraseña *'), '1234')
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(screen.getByText('Use un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.')).toBeInTheDocument()
  })

  it('valida correctamente un inicio de sesión válido y limpia el formulario', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Login />)
    const correo = screen.getByLabelText('Correo electrónico *')
    const password = screen.getByLabelText('Contraseña *')

    await user.type(correo, 'persona@gmail.com')
    await user.type(password, '1234')
    await user.click(screen.getByRole('button', { name: 'Ingresar' }))

    expect(screen.getByText('Inicio de sesión validado correctamente.')).toBeInTheDocument()
    expect(correo).toHaveValue('')
    expect(password).toHaveValue('')
  })
})
