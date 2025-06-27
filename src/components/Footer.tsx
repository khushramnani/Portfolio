import { Github, Linkedin, Twitter } from "lucide-react"
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer className='bg-black  gap-8 rounded-t-4xl flex flex-col py-4 px-16'>
        <nav className='flex justify-between items-center h-full text-white'>
          <div className="flex items-center gap-4 text-xl content-text ">
            <NavLink className={'hover:text-green-500 '} to={""}><li >Home</li></NavLink>
            <NavLink className={'hover:text-green-500 '} to={""}><li className="">Projects</li></NavLink>
            <NavLink className={'hover:text-green-500 '} to={""}><li>Resume</li></NavLink>
          </div>
          <div id="socials" className='flex justify-center items-center gap-4 mt-4'>
            <NavLink to={""} ><Linkedin className="w-6 h-6 text-white hover:text-green-500 hover:scale-120 "/></NavLink>
            <NavLink to={""}><Github className="w-6 h-6 text-white  hover:text-green-500 hover:scale-120"/></NavLink>
            <NavLink to={""} ><Twitter className="w-6 h-6 text-white hover:text-green-500 hover:scale-120 "/></NavLink>
          </div>
        </nav>

        <div className="content flex flex-col  items-center  justify-center h-full ">
          <div className="lg:max-w-[40%]  lg:gap-4 gap-2 flex items-center justify-center flex-col text-center">
<h1 className="text-3xl headings-regular tertiary-color font-bold">Ready to Bring Your <span className="text-green-500 merienda-cursive">Vision</span>  to Life?</h1>
          <span className="text-center text-lg general-text text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt esse facilis rem obcaecati eum molestias ducimus impedit, explicabo magnam maiores? Iure minus ad nemo eos voluptatibus est ex nobis repudiandae.</span>
          </div>
          
          <button className="mt-4 bg-white text-black py-2 px-4 rounded-full">Hire Me</button>
        </div>

        <div className="pt-4 flex  items-center justify-center">
          <p className="text-center text-gray-500 text-sm mt-4"> khushramnani.me © All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
