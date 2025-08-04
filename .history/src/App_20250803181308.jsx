import Navbar from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import './App.css'

import backgroundImage from '../public/images/backgroundImage.jpg'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleScheduleDemo = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <Navbar />
        <section className="relative h-screen w-screen overflow-hidden">
          <img
            src={backgroundImage}
            alt="Stadium"
            className="object-cover w-full h-full fixed inset-0"
            />
          
          <AnimatePresence mode="wait">
            {!showContactForm ? (
              <motion.div 
                key="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-start justify-center text-white text-center pl-20"
              >
                <img src="/images/logowhite.svg" alt="Logo" className="w-1/3" />
                <p className="max-w-lg text-left mb-10 text-2xl font-neue-montreal">
                  The all-in-one player management system built for teams that want to win on and off the field.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={handleScheduleDemo}
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                  >
                    Schedule a Demo
                  </button>
                  <button className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition">Watch Overview</button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="contact-form"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-20"
              >
                <div className="max-w-lg w-full">
                  <h2 className="text-4xl font-bold mb-4 text-center font-formula">Schedule Your Demo</h2>
                  <p className="text-white/80 text-center mb-8 font-neue-montreal">
                    Ready to see Omni Scouting in action? Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition" 
                        required 
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition" 
                        required 
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition" 
                      required 
                    />
                    <input 
                      type="text" 
                      placeholder="Organization/School" 
                      className="w-full p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition" 
                      required 
                    />
                    <select className="w-full p-4 border border-white/30 rounded-lg bg-transparent text-white focus:border-white focus:outline-none transition">
                      <option value="" className="bg-black">Select Organization Type</option>
                      <option value="high-school" className="bg-black">High School</option>
                      <option value="college" className="bg-black">College</option>
                      <option value="pro" className="bg-black">Professional</option>
                    </select>
                    <textarea 
                      placeholder="Tell us about your needs (optional)" 
                      className="w-full p-4 border border-white/30 rounded-lg h-24 bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition resize-none" 
                    ></textarea>
                    
                    <div className="flex gap-4 pt-4">
                      <button 
                        type="submit" 
                        className="flex-1 bg-white text-black px-6 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                      >
                        Schedule Demo
                      </button>
                      <button 
                        type="button"
                        onClick={handleCloseForm}
                        className="px-6 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
                      >
                        Back to Home
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
    </>
  );
}

export default App
