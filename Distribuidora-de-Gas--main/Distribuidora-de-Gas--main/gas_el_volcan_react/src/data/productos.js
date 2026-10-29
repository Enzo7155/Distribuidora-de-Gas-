// =====================================================
// DATOS DEL CATÁLOGO - DISTRIBUIDORA GAS EL VOLCÁN
// =====================================================
export const CATEGORIAS = [
  'Cilindros de Gas',
  'Reguladores',
  'Mangueras y Conexiones',
  'Accesorios',
]

export const productos = [
  { id: 1, codigo: 'CL001', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 5 kg', descripcion: 'Cilindro de gas licuado de petróleo 5 kg. Para uso residencial, cocina y calefacción pequeña.', unidad: 'Unidad', precio: 6500, precioComercial: 6000, stock: 80, imagen: 'assets/cilindro.svg' },
  { id: 2, codigo: 'CL002', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 11 kg', descripcion: 'Cilindro estándar doméstico. El más utilizado en hogares chilenos. Compatible con reguladores estándar.', unidad: 'Unidad', precio: 12000, precioComercial: 11000, stock: 200, imagen: 'assets/cilindro.svg' },
  { id: 3, codigo: 'CL003', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 15 kg', descripcion: 'Cilindro de mayor capacidad para hogares de alto consumo o locales pequeños.', unidad: 'Unidad', precio: 16000, precioComercial: 14500, stock: 90, imagen: 'assets/cilindro.svg' },
  { id: 4, codigo: 'CL004', categoria: 'Cilindros de Gas', nombre: 'Cilindro GLP 45 kg', descripcion: 'Cilindro industrial para restaurantes, talleres y calefacción de locales.', unidad: 'Unidad', precio: 45000, precioComercial: 40000, stock: 30, imagen: 'assets/cilindro.svg' },
  { id: 5, codigo: 'RG001', categoria: 'Reguladores', nombre: 'Regulador doméstico estándar', descripcion: 'Regulador de 1 etapa para cilindros 5, 11 y 15 kg. Presión de salida 28 mbar.', unidad: 'Unidad', precio: 8990, precioComercial: 8200, stock: 45, imagen: 'assets/regulador.svg' },
  { id: 6, codigo: 'RG002', categoria: 'Reguladores', nombre: 'Regulador de alta presión', descripcion: 'Regulador para cocinas industriales o equipos de mayor consumo. Presión regulable.', unidad: 'Unidad', precio: 18990, precioComercial: 17000, stock: 12, imagen: 'assets/regulador.svg' },
  { id: 7, codigo: 'RG003', categoria: 'Reguladores', nombre: 'Regulador dual (2 salidas)', descripcion: 'Permite conectar dos artefactos simultáneamente al mismo cilindro.', unidad: 'Unidad', precio: 14990, precioComercial: 13500, stock: 18, imagen: 'assets/regulador.svg' },
  { id: 8, codigo: 'MG001', categoria: 'Mangueras y Conexiones', nombre: 'Manguera gas 1.5 m', descripcion: 'Manguera flexible homologada. Diámetro interior 9 mm. Compatible con reguladores estándar.', unidad: 'Unidad', precio: 3990, precioComercial: 3500, stock: 80, imagen: 'assets/manguera.svg' },
  { id: 9, codigo: 'MG002', categoria: 'Mangueras y Conexiones', nombre: 'Manguera gas 3 m', descripcion: 'Manguera larga para instalaciones donde el artefacto está alejado del cilindro.', unidad: 'Unidad', precio: 6990, precioComercial: 6200, stock: 50, imagen: 'assets/manguera.svg' },
  { id: 10, codigo: 'MG003', categoria: 'Mangueras y Conexiones', nombre: 'Abrazadera metálica', descripcion: 'Abrazadera de acero para asegurar la conexión manguera-regulador y manguera-artefacto.', unidad: 'Unidad', precio: 990, precioComercial: 800, stock: 200, imagen: 'assets/manguera.svg' },
  { id: 11, codigo: 'MG004', categoria: 'Mangueras y Conexiones', nombre: 'Kit conexión completo', descripcion: 'Regulador, manguera de 1.5 m y abrazaderas. Todo lo necesario para instalar un cilindro nuevo.', unidad: 'Kit', precio: 12990, precioComercial: 11500, stock: 25, imagen: 'assets/manguera.svg' },
  { id: 12, codigo: 'AC001', categoria: 'Accesorios', nombre: 'Carro porta cilindro 11/15 kg', descripcion: 'Carro metálico con ruedas para transportar cilindros dentro del hogar con seguridad.', unidad: 'Unidad', precio: 12990, precioComercial: 11000, stock: 20, imagen: 'assets/accesorio.svg' },
  { id: 13, codigo: 'AC002', categoria: 'Accesorios', nombre: 'Tapa protectora para válvula', descripcion: 'Tapa de plástico ABS para proteger la válvula del cilindro durante el transporte.', unidad: 'Unidad', precio: 1490, precioComercial: 1200, stock: 60, imagen: 'assets/accesorio.svg' },
  { id: 14, codigo: 'AC003', categoria: 'Accesorios', nombre: 'Detector de gas a batería', descripcion: 'Sensor electroquímico con alarma sonora y visual ante fuga de gas GLP o metano.', unidad: 'Unidad', precio: 19990, precioComercial: 17000, stock: 8, imagen: 'assets/accesorio.svg' },
]

/** Devuelve los productos de una categoría. "Todos" (o vacío) devuelve el catálogo completo. */
export function filtrarPorCategoria(categoria) {
  if (!categoria || categoria === 'Todos') return productos
  return productos.filter((p) => p.categoria === categoria)
}

/** Busca un producto por su id. Devuelve el primero del catálogo si no lo encuentra. */
export function obtenerProducto(id) {
  return productos.find((p) => p.id === Number(id)) || productos[0]
}
