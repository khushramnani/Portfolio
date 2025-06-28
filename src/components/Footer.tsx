import { Github, Linkedin, Twitter } from "lucide-react"
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer className='bg-black gap-4 md:gap-8 rounded-t-4xl flex flex-col py-4 md:py-6 px-4 md:px-16'>
        <nav className='flex flex-col md:flex-row justify-between items-center h-full text-white gap-4 md:gap-0'>
          <div className="flex flex-row items-center gap-2 md:gap-4 text-lg md:text-xl content-text">
            <NavLink className={'hover:text-green-500 transition-colors duration-300'} to={""}><li>Home</li></NavLink>
            <NavLink className={'hover:text-green-500 transition-colors duration-300'} to={""}><li className="">Projects</li></NavLink>
            <NavLink className={'hover:text-green-500 transition-colors duration-300'} to={""}><li>Resume</li></NavLink>
          </div>
          <div id="socials" className='flex justify-center items-center gap-4 mt-0 md:mt-4'>
            <NavLink to={""} ><Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-green-500 hover:scale-110 transition-all duration-300"/></NavLink>
            <NavLink to={""}><Github className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-green-500 hover:scale-110 transition-all duration-300"/></NavLink>
            <NavLink to={""} ><Twitter className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-green-500 hover:scale-110 transition-all duration-300"/></NavLink>
          </div>
        </nav>

        <div className="content flex  flex-col items-center justify-center h-full px-2 md:px-0">
          <div className="w-full mt-8 md:mt-0 md:max-w-[70%] lg:max-w-[40%] gap-3 md:gap-4 flex items-center justify-center flex-col text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl headings-regular tertiary-color font-bold leading-tight">
              Ready to Bring Your <span className="text-green-500 merienda-cursive">Vision</span> to Life?
            </h1>
            <span className="text-center text-sm md:text-lg general-text text-gray-400 leading-relaxed px-2 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse facilis rem obcaecati eum molestias ducimus impedit, explicabo magnam maiores? Iure minus ad nemo eos voluptatibus est ex nobis repudiandae.
            </span>
          </div>
          
          <button className="mt-6 md:mt-8 bg-white text-black py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base">
            Hire Me
          </button>
        </div>

        <div className="pt-2 md:pt-4 flex items-center justify-center">
          <p className="text-center text-gray-500 text-xs md:text-sm mt-2 md:mt-4">khushramnani.me © All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
