import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-black/50 backdrop-blur-md fixed w-full z-20 text-left'>
        <div className='nav-links '>
            <ul>
                <li className='nav-item uppercase font-formula text-white'>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
