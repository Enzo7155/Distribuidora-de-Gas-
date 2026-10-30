export default function FiltroCategoria({
  categorias,
  valor,
  onCambiar
}) {
  return (
    <div className="barra-filtros">
      <label htmlFor="filtro-categoria">
        Categoría
      </label>

      <select
        id="filtro-categoria"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      >
        <option value="Todos">
          Todos los productos
        </option>

        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  )
}
