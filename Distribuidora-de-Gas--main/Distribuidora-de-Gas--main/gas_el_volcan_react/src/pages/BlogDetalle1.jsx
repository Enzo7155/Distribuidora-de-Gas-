import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

export default function BlogDetalle1() {
  return (
    <main>
      <section className="cabecera-pagina">
        <div className="contenedor">
          <Link className="volver" to="/blog">
            ← Volver al blog
          </Link>
          <h1>5 cuidados básicos al usar un cilindro de gas</h1>
        </div>
      </section>
      <article className="seccion">
        <div className="contenedor articulo">
          <img src={asset('assets/cilindro.svg')} alt="Cilindro GLP" />
          <p>
            El gas licuado debe utilizarse con atención y con accesorios adecuados. En el hogar conviene
            revisar periódicamente el regulador y la manguera, mantener los cilindros alejados de fuentes
            de calor y evitar manipular la válvula con elementos cortantes.
          </p>
          <h2>Consejos principales</h2>
          <ol>
            <li>Revisa que regulador y manguera estén en buen estado.</li>
            <li>Mantén el cilindro en posición vertical.</li>
            <li>Evita fuentes de ignición cerca del cilindro.</li>
            <li>Ventila el lugar si percibes olor a gas.</li>
            <li>Solicita ayuda especializada ante una fuga.</li>
          </ol>
          <p className="nota">Contenido académico de demostración para la vista Blog solicitada en la evaluación.</p>
        </div>
      </article>
    </main>
  )
}
