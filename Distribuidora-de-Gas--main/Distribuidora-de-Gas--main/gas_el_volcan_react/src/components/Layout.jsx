import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PanelCarrito from './PanelCarrito.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <PanelCarrito />
      <Footer />
    </>
  )
}
