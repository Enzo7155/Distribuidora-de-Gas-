# Gas El Volcán — versión React

Migración a **React + Vite** del sitio estático original (`gas_el_volcan_web`), con **Vitest** para
las pruebas automatizadas.

El sitio original se conserva intacto en la carpeta `gas_el_volcan_web`. Esta carpeta es la versión
nueva en React.

## Tecnologías

- **React 18** + **React Router 6** (la web de varias páginas pasó a una SPA con rutas).
- **Vite** como servidor de desarrollo y compilador.
- **Vitest** + **Testing Library** + **jsdom** para las pruebas.

## Requisitos

- Node.js 18 o superior (incluye `npm`). En este equipo quedó instalado **Node.js v24.20.0 (LTS)** con
  `winget install OpenJS.NodeJS.LTS`. Si `node` no responde en una terminal ya abierta, ábrela de nuevo.

> Nota: `npm` puede estar bloqueado por la política de ejecución de PowerShell (`npm.ps1`). Si ocurre,
> usa `npm.cmd`, por ejemplo: `npm.cmd install` y `npm.cmd test`.


## Puesta en marcha

```bash
cd gas_el_volcan_react
npm install
npm run dev        # servidor de desarrollo -> http://localhost:5173
```

## Pruebas con Vitest

```bash
npm test           # ejecuta todas las pruebas una vez
npm run test:watch # modo interactivo (re-ejecuta al guardar)
npm run coverage   # reporte de cobertura
```

## Scripts disponibles

| Script            | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo con recarga.     |
| `npm run build`   | Genera la versión de producción en `dist/`.        |
| `npm run preview` | Sirve la versión compilada para revisarla.         |
| `npm test`        | Corre la suite de Vitest en modo "run".            |
| `npm run coverage`| Corre las pruebas y genera la cobertura.           |

## Estructura del proyecto

```
gas_el_volcan_react/
├─ public/assets/            # SVGs (logo, hero, productos) copiados del sitio original
├─ src/
│  ├─ components/            # Header, Footer, Layout, PanelCarrito, TarjetaProducto, AdminLayout...
│  ├─ context/               # CarritoContext (carrito + localStorage)
│  ├─ data/                  # productos.js y regiones.js (datos del catálogo)
│  ├─ lib/                   # lógica pura: carrito, validaciones, dinero, assets
│  ├─ pages/                 # una página por cada HTML original
│  ├─ styles/estilos.css     # CSS del sitio original
│  ├─ test/                  # setup de Vitest y utilidades de render
│  ├─ App.jsx                # definición de rutas
│  └─ main.jsx               # punto de entrada
├─ index.html
├─ package.json
└─ vite.config.js            # configuración de Vite + Vitest
```

## Equivalencia sitio original → React

| HTML original           | Ruta React              | Componente                    |
| ----------------------- | ----------------------- | ----------------------------- |
| `index.html`            | `/`                     | `pages/Inicio.jsx`            |
| `productos.html`        | `/productos`            | `pages/Productos.jsx`         |
| `detalle-producto.html` | `/detalle-producto/:id` | `pages/DetalleProducto.jsx`   |
| `seguimiento.html`      | `/seguimiento`          | `pages/Seguimiento.jsx`       |
| `nosotros.html`         | `/nosotros`             | `pages/Nosotros.jsx`          |
| `blog.html`             | `/blog`                 | `pages/Blog.jsx`              |
| `blog-detalle-1.html`   | `/blog/seguridad`       | `pages/BlogDetalle1.jsx`      |
| `blog-detalle-2.html`   | `/blog/seguimiento`     | `pages/BlogDetalle2.jsx`      |
| `contacto.html`         | `/contacto`             | `pages/Contacto.jsx`          |
| `login.html`            | `/login`                | `pages/Login.jsx`             |
| `registro.html`         | `/registro`             | `pages/Registro.jsx`          |
| `admin.html`            | `/admin`                | `pages/Admin.jsx`             |
| `admin-productos.html`  | `/admin/productos`      | `pages/AdminProductos.jsx`    |
| `admin-usuarios.html`   | `/admin/usuarios`       | `pages/AdminUsuarios.jsx`     |

La lógica que en `script.js` estaba mezclada con el DOM ahora vive en módulos puros y testeables
(`src/lib/`), y el estado del carrito se maneja con un **Context** que sigue guardando en
`localStorage` bajo la misma clave (`carritoElVolcan`).

## Pruebas incluidas

- `src/lib/validaciones.test.js` — correo, contraseña, campos obligatorios y RUN chileno.
- `src/lib/carrito.test.js` — lógica pura del carrito (agregar, eliminar, totales).
- `src/lib/dinero.test.js` — formato de precios.
- `src/data/productos.test.js` y `src/data/regiones.test.js` — integridad de los datos.
- `src/components/Carrito.test.jsx` — integración del carrito (contador, panel, localStorage).
- `src/components/Header.test.jsx` — navegación y contador del header.
- `src/pages/Login.test.jsx`, `Registro.test.jsx`, `Seguimiento.test.jsx`, `Productos.test.jsx`.
- `src/App.test.jsx` — smoke test de todas las rutas.
