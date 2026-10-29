import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Registro from './Registro.jsx'
import { renderConProveedores } from '../test/utils.jsx'

describe('Registro', () => {
  it('muestra los errores obligatorios al enviar vacío', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Registro />)

    await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

    expect(screen.getByText('El RUN es obligatorio.')).toBeInTheDocument()
    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument()
    expect(screen.getByText('Los apellidos son obligatorios.')).toBeInTheDocument()
    expect(screen.getByText('Seleccione una región.')).toBeInTheDocument()
    expect(screen.getByText('La dirección es obligatoria.')).toBeInTheDocument()
  })

  it('habilita las comunas de la región seleccionada', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Registro />)
    const comuna = screen.getByLabelText('Comuna *')

    expect(comuna).toBeDisabled()

    await user.selectOptions(screen.getByLabelText('Región *'), 'Ñuble')

    expect(comuna).toBeEnabled()
    expect(screen.getByRole('option', { name: 'Chillán' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Chillán Viejo' })).toBeInTheDocument()
  })

  it('registra un usuario con datos válidos y limpia el formulario', async () => {
    const user = userEvent.setup()
    renderConProveedores(<Registro />)

    await user.type(screen.getByLabelText('RUN *'), '123456785')
    await user.type(screen.getByLabelText('Nombre *'), 'Ana')
    await user.type(screen.getByLabelText('Apellidos *'), 'Pérez')
    await user.type(screen.getByLabelText('Correo *'), 'ana@gmail.com')
    await user.type(screen.getByLabelText('Contraseña *'), '1234')
    await user.selectOptions(screen.getByLabelText('Región *'), 'Ñuble')
    await user.selectOptions(screen.getByLabelText('Comuna *'), 'Chillán')
    await user.type(screen.getByLabelText('Dirección *'), 'Av. Siempre Viva 123')
    await user.click(screen.getByRole('button', { name: 'Crear cuenta' }))

    expect(screen.getByText('Usuario registrado correctamente.')).toBeInTheDocument()
    expect(screen.getByLabelText('RUN *')).toHaveValue('')
    expect(screen.getByLabelText('Comuna *')).toBeDisabled()
  })
})
