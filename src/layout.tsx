
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
const Layout = () => {
  return (
    <>
      <Header />
      <div className=" pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
