import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-end justify-between p-4 bg-black/50 backdrop-blur-md fixed w-full z-20 '>
        <div className='nav-links '>
            <ul>
                <li className='nav-item uppercase font-formula text-white'>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
