import React from 'react'

const Navbar = ({ onAboutClick, onFeaturesClick, onPricingClick, onContactClick }) => {
  return (
    <nav className='flex items-center justify-end p-3 sm:p-4 bg-black/50 backdrop-blur-md fixed w-full z-20'>
        <div>
            <ul className='nav-links flex flex-row gap-4 sm:gap-6 md:gap-8'>
                <li 
                  onClick={onAboutClick}
                  className='nav-item uppercase font-formula text-white text-xs sm:text-sm cursor-pointer hover:text-gray-300 transition'
                >
                  About
                </li>
                <li 
                  onClick={onFeaturesClick}
                  className='nav-item uppercase font-formula text-white text-xs sm:text-sm cursor-pointer hover:text-gray-300 transition'
                >
                  Features
                </li>
                <li 
                  onClick={onPricingClick}
                  className='nav-item uppercase font-formula text-white text-xs sm:text-sm cursor-pointer hover:text-gray-300 transition'
                >
                  Pricing
                </li>
                <li 
                  onClick={onContactClick}
                  className='nav-item uppercase font-formula text-white text-xs sm:text-sm cursor-pointer hover:text-gray-300 transition'
                >
                  Contact
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
