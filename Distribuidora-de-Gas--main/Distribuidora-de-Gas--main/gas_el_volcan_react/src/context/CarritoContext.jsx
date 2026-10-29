import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  agregarAlCarrito,
  calcularTotal,
  contarItems,
  eliminarDelCarrito,
} from '../lib/carrito'

const CLAVE_STORAGE = 'carritoElVolcan'

const CarritoContext = createContext(null)

function leerCarritoInicial() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_STORAGE))
    return Array.isArray(guardado) ? guardado : []
  } catch {
    return []
  }
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(leerCarritoInicial)
  const [abierto, setAbierto] = useState(false)

  // Persistimos igual que el script.js original (clave "carritoElVolcan").
  useEffect(() => {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(carrito))
  }, [carrito])

  const valor = useMemo(
    () => ({
      carrito,
      abierto,
      cantidad: contarItems(carrito),
      total: calcularTotal(carrito),
      abrir: () => setAbierto(true),
      cerrar: () => setAbierto(false),
      agregar: (producto) => {
        setCarrito((actual) => agregarAlCarrito(actual, producto))
        setAbierto(true)
      },
      eliminar: (id) => setCarrito((actual) => eliminarDelCarrito(actual, id)),
      vaciar: () => setCarrito([]),
    }),
    [carrito, abierto],
  )

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>
}

export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider')
  }
  return contexto
}
