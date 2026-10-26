export default function Nosotros() {
  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <span className="etiqueta">La empresa</span>
          <h1>Nosotros</h1>
          <p>Una distribuidora familiar al servicio de Chillán desde 1998.</p>
        </div>
      </section>
      <section className="seccion">
        <div className="contenedor nosotros-grid">
          <div>
            <h2>Distribuidora de Gas El Volcán</h2>
            <p>
              La empresa distribuye cilindros de gas licuado a clientes residenciales y comerciales en
              Chillán y comunas aledañas. Actualmente trabaja con dos camiones de reparto, tres
              repartidores, una operadora y una administradora.
            </p>
            <p>Este proyecto académico propone digitalizar los pedidos, el seguimiento de entregas, el control de stock y el registro de pagos.</p>
          </div>
          <div className="tarjeta-info">
            <h3>Equipo de desarrollo</h3>
            <ul className="lista-limpia">
              <li>
                <strong>Sebastián Sellao</strong>
                <span>Estructura general, Home y navegación</span>
              </li>
              <li>
                <strong>Carlos Salazar</strong>
                <span>Productos, detalle y carrito</span>
              </li>
              <li>
                <strong>Enzo Muñoz</strong>
                <span>Formularios y validaciones</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
