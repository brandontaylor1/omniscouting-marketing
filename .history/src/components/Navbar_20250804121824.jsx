import React from 'react'

const Navbar = ({ onAboutClick, onFeaturesClick, onPricingClick, onContactClick }) => {
  const handleLoginClick = () => {
    // Redirect to the main app login
    window.location.href = 'https://app.omniscouting.com';
  };

  return (
    <nav className='flex items-center justify-between p-3 sm:p-4 bg-black/50 backdrop-blur-md fixed w-full z-20'>
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/images/logowhite.svg" alt="Omni Scouting" className="h-6 sm:h-8" />
        </div>
        
        {/* Navigation items on the right */}
        <div>
            <ul className='nav-links flex flex-row gap-4 sm:gap-6 md:gap-8 items-center'>
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
                <li className="ml-2 sm:ml-4">
                  <button
                    onClick={handleLoginClick}
                    className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-formula uppercase transition-all duration-200"
                  >
                    Login
                  </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
