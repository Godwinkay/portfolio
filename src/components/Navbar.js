import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    
      <div className='w-full flex justify-between items-center px-6 md:px-24 py-4'>
        <div>
            <h1 className='text-xl font-lilita border-[2px] border-lightblue text-lightblue p-4'>GA</h1>
        </div>
        <div className='flex justify-center gap-4 text-3xl'>
        <a href="https://github.com/Godwinkay?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/godwin-ahiable/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a>
        <a href="https://x.com/GodwynKay" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /> </a>
        </div>
      </div>
    
  )
}

export default Navbar
