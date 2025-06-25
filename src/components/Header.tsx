
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='bg-transparent fixed top-0 left-0 px-8 w-full z-50 p-4 flex justify-between items-center'>
      
        <li><NavLink to="/" className="text-base hover:underline">Home</NavLink></li>
        <li><NavLink to="/projects" className="text-base">Projects</NavLink></li>
        <li><NavLink to="/about" className="text-base">Resume</NavLink></li>
        <li><NavLink to="/contact" className="text-base">Contact</NavLink></li>
      
    </nav>
  )
}

export default Header
