import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-end p-4 bg-black/50 backdrop-blur-md fixed w-full z-20 '>
        <div className='nav-links flex '>
            <ul>
                <li className='nav-item uppercase font-formula text-white'>About</li>
                <li className='nav-item uppercase font-formula text-white'>Features</li>
                <li className='nav-item uppercase font-formula text-white'>Pricing</li>
                <li className='nav-item uppercase font-formula text-white'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
