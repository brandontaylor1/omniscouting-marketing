import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ onAboutClick, onFeaturesClick, onPricingClick, onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLoginClick = () => {
    // Redirect to the main app login
    window.location.href = 'https://app.omniscouting.com';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClick = (callback) => {
    callback();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className='flex items-center justify-between p-3 sm:p-4 bg-black/50 backdrop-blur-md fixed w-full z-30'>
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="/images/OmniLogoWhiteNoSlogan.png" alt="Omni Scouting" className="h-6 sm:h-8" />
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
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

          {/* Mobile Hamburger Menu - Visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="flex flex-col w-6 h-6 justify-center items-center"
              >
                <motion.div
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-0.5 bg-white mb-2 origin-center"
                />
                <motion.div
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-0.5 bg-white mb-2"
                />
                <motion.div
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-0.5 bg-white origin-center"
                />
              </motion.div>
            </button>
          </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md z-50 md:hidden"
            >
              <div className="flex flex-col p-6 pt-20 space-y-6">
                <button
                  onClick={() => handleMobileMenuClick(onAboutClick)}
                  className="text-left text-white text-lg font-formula uppercase py-3 border-b border-white/20 hover:text-gray-300 transition"
                >
                  About
                </button>
                <button
                  onClick={() => handleMobileMenuClick(onFeaturesClick)}
                  className="text-left text-white text-lg font-formula uppercase py-3 border-b border-white/20 hover:text-gray-300 transition"
                >
                  Features
                </button>
                <button
                  onClick={() => handleMobileMenuClick(onPricingClick)}
                  className="text-left text-white text-lg font-formula uppercase py-3 border-b border-white/20 hover:text-gray-300 transition"
                >
                  Pricing
                </button>
                <button
                  onClick={() => handleMobileMenuClick(onContactClick)}
                  className="text-left text-white text-lg font-formula uppercase py-3 border-b border-white/20 hover:text-gray-300 transition"
                >
                  Contact
                </button>
                <button
                  onClick={handleLoginClick}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-3 rounded-lg text-lg font-formula uppercase transition-all duration-200 mt-4"
                >
                  Login
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
