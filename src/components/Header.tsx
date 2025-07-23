
import { NavLink } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { isDarkBackground } = useTheme();
  
  // Determine text colors based on background
  const textColor = isDarkBackground ? 'text-white' : 'text-black';
  const hoverColor = isDarkBackground ? 'hover:text-green-400' : 'hover:text-green-600';
  
  return (
    <nav className='bg-transparent fixed top-0 left-0 px-4 md:px-8 w-full z-40 p-3 md:p-4 flex justify-center items-center'>
      <div className="flex flex-row items-center justify-evenly w-full gap-4 md:gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-sm md:text-lg ${textColor} relative group transition-colors duration-300 ${
              isActive ? (isDarkBackground ? 'text-green-400' : 'text-green-800') : hoverColor
            }`
          }
        >
          Home
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkBackground ? 'bg-green-400' : 'bg-green-600'} transition-all duration-300 group-hover:w-full`}></span>
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `text-sm md:text-lg ${textColor} relative group transition-colors duration-300 ${
              isActive ? (isDarkBackground ? 'text-green-400' : 'text-green-600') : hoverColor
            }`
          }
        >
          Projects
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkBackground ? 'bg-green-400' : 'bg-green-600'} transition-all duration-300 group-hover:w-full`}></span>
        </NavLink>
        
        <a 
          href="/Resume@Khush_Ramnani.pdf"
            // href="/src/assets/Resume#khushramnani.pdf"
  // onClick={(e) => {
  //   e.preventDefault();
  //   alert("Resume is currently being updated.");
  // }}
  title='Download Resume'
          download="Resume@Khush_Ramnani.pdf"
          className={`text-sm md:text-lg ${textColor} cursor-pointer relative group transition-colors duration-300 ${hoverColor}`}
        >
          Resume
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkBackground ? 'bg-green-400' : 'bg-green-600'} transition-all duration-300 group-hover:w-full`}></span>
        </a>
        
        {/* <NavLink 
          to="#" 
          className={({ isActive }) => 
            `text-sm md:text-lg ${textColor} relative group transition-colors duration-300 ${
              isActive ? (isDarkBackground ? 'text-green-400' : 'text-green-600') : hoverColor
            }`
          }
        >
          Contact
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkBackground ? 'bg-green-400' : 'bg-green-600'} transition-all duration-300 group-hover:w-full`}></span>
        </NavLink> */}
        <a 
          href="mailto:khushramnani@gmail.com"
          className={`text-sm md:text-lg ${textColor} relative group transition-colors duration-300 ${hoverColor}`}
        >
          Contact
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkBackground ? 'bg-green-400' : 'bg-green-600'} transition-all duration-300 group-hover:w-full`}></span>
        </a>
      </div>
    </nav>
  )
}

export default Header
