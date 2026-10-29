import AdminLayout from '../components/AdminLayout.jsx'

const pedidos = [
  { codigo: 'EV-1024', cliente: 'María Soto', estado: 'En camino', clase: 'estado-camino', repartidor: 'Repartidor 2' },
  { codigo: 'EV-1023', cliente: 'Pedro Díaz', estado: 'Asignado', clase: 'estado-asignado', repartidor: 'Repartidor 1' },
  { codigo: 'EV-1022', cliente: 'Almacén Central', estado: 'Entregado', clase: 'estado-entregado', repartidor: 'Repartidor 3' },
]

export default function Admin() {
  return (
    <AdminLayout titulo="Panel de administración">
      <p>Vista protegida de demostración para la gestión del sistema.</p>
      <div className="stats">
        <article>
          <span>Pedidos hoy</span>
          <strong>96</strong>
        </article>
        <article>
          <span>En camino</span>
          <strong>12</strong>
        </article>
        <article>
          <span>Stock cilindros</span>
          <strong>400</strong>
        </article>
      </div>
      <div className="tarjeta-info">
        <h2>Pedidos recientes</h2>
        <div className="tabla-responsive">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Cliente</th>
                <th>Estado</th>
                <th>Repartidor</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((p) => (
                <tr key={p.codigo}>
                  <td>{p.codigo}</td>
                  <td>{p.cliente}</td>
                  <td>
                    <span className={`estado ${p.clase}`}>{p.estado}</span>
                  </td>
                  <td>{p.repartidor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
