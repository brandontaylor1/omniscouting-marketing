import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-end p-4 bg-black/50 backdrop-blur-md fixed w-full z-20 '>
        <div >
            <ul className='nav-links flex flex-row gap-8'>
                <li className='nav-item uppercase font-formula text-white text-sm'>About</li>
                <li className='nav-item uppercase font-formula text-white text-sm'>Features</li>
                <li className='nav-item uppercase font-formula text-white text-sm'>Pricing</li>
                <li className='nav-item uppercase font-formula text-white text-sm'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
