"use client"
import { FaRegUser } from 'react-icons/fa'
import { FaChalkboardUser } from 'react-icons/fa6'
import { HiAcademicCap } from 'react-icons/hi'
import { IoHome } from 'react-icons/io5'
import { RiContactsFill } from 'react-icons/ri'
import { SiBlackmagicdesign } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-gradient-to-r from-black via-gray-900 to-black text-white px-[6%] py-5'>
      <nav className='flex items-center justify-between w-full'>
        <Link to="/"><img src="logo.png" alt="logo" className='w-10 invert' /></Link>
        <div className='flex items-center gap-5 text-white'>
          <Link to="/" className='flex items-center gap-1'><IoHome />Home</Link>
          <Link to="/about" className='flex items-center gap-1'><FaRegUser />About</Link>
          <Link to="/skills" className='flex items-center gap-1'><FaChalkboardUser />Skills</Link>
          <Link to="/experience" className='flex items-center gap-1'><HiAcademicCap />Experience</Link>
          <Link to="/contact" className='flex items-center gap-1'><RiContactsFill />
          Contact</Link>
          <Link to="/project" className='flex items-center gap-1'><SiBlackmagicdesign />Project</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header