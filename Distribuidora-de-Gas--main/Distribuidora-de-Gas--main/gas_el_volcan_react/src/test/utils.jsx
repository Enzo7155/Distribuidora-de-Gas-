import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CarritoProvider } from '../context/CarritoContext.jsx'

/** Renderiza `ui` dentro de un Router en memoria y del proveedor del carrito. */
export function renderConProveedores(ui, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <CarritoProvider>{ui}</CarritoProvider>
    </MemoryRouter>,
  )
}
