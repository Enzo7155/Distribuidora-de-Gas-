import { Route, Routes } from 'react-router-dom'
import Layout from './components/templates/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import Seguimiento from './pages/Seguimiento.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetalle1 from './pages/BlogDetalle1.jsx'
import BlogDetalle2 from './pages/BlogDetalle2.jsx'
import Contacto from './pages/Contacto.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Admin from './pages/Admin.jsx'
import AdminProductos from './pages/AdminProductos.jsx'
import AdminUsuarios from './pages/AdminUsuarios.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
        <Route path="detalle-producto/:id" element={<DetalleProducto />} />
        <Route path="seguimiento" element={<Seguimiento />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/seguridad" element={<BlogDetalle1 />} />
        <Route path="blog/seguimiento" element={<BlogDetalle2 />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/productos" element={<AdminProductos />} />
        <Route path="admin/usuarios" element={<AdminUsuarios />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}
