
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
