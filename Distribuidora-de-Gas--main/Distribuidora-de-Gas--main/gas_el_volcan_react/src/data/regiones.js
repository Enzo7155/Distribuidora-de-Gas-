// Regiones y comunas de Chile usadas en el formulario de registro.
export const regiones = {
  'Arica y Parinacota': ['Arica', 'Camarones', 'Putre'],
  Tarapacá: ['Iquique', 'Alto Hospicio', 'Pozo Almonte'],
  Antofagasta: ['Antofagasta', 'Calama', 'Tocopilla'],
  Atacama: ['Copiapó', 'Caldera', 'Vallenar'],
  Coquimbo: ['La Serena', 'Coquimbo', 'Ovalle'],
  Valparaíso: ['Valparaíso', 'Viña del Mar', 'Quilpué'],
  'Metropolitana de Santiago': ['Santiago', 'Puente Alto', 'Maipú'],
  "O'Higgins": ['Rancagua', 'San Fernando', 'Rengo'],
  Maule: ['Talca', 'Curicó', 'Linares'],
  Ñuble: ['Chillán', 'Chillán Viejo', 'Bulnes', 'Quillón', 'El Carmen', 'Pinto', 'San Ignacio'],
  Biobío: ['Concepción', 'Talcahuano', 'Los Ángeles'],
  'La Araucanía': ['Temuco', 'Padre Las Casas', 'Villarrica'],
  'Los Ríos': ['Valdivia', 'La Unión', 'Panguipulli'],
  'Los Lagos': ['Puerto Montt', 'Osorno', 'Castro'],
  Aysén: ['Coyhaique', 'Aysén', 'Chile Chico'],
  Magallanes: ['Punta Arenas', 'Puerto Natales', 'Porvenir'],
}

/** Devuelve las comunas de una región (arreglo vacío si no existe). */
export function obtenerComunas(region) {
  return regiones[region] || []
}
