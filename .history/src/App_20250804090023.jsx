import Navbar from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import './App.css'

import backgroundImage from './assets/backgroundImage.jpg'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const handleScheduleDemo = () => {
    setShowContactForm(true);
    setShowFeatures(false);
    setShowPricing(false);
  };

  const handleShowFeatures = () => {
    setShowFeatures(true);
    setShowContactForm(false);
    setShowPricing(false);
  };

  const handleShowPricing = () => {
    setShowPricing(true);
    setShowContactForm(false);
    setShowFeatures(false);
  };

  const handleBackToHome = () => {
    setShowContactForm(false);
    setShowFeatures(false);
    setShowPricing(false);
  };

  return (
    <>
      <Navbar 
        onAboutClick={handleBackToHome}
        onFeaturesClick={handleShowFeatures}
        onPricingClick={handleShowPricing}
        onContactClick={handleScheduleDemo}
      />
        <section className="relative h-screen w-screen overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full fixed inset-0"
            poster={backgroundImage} // Fallback image while video loads
          >
            <source src="/videos/stadium.mp4" type="video/mp4" />
            <source src="/videos/stadium-background.webm" type="video/webm" />
            {/* Fallback to image if video doesn't load */}
            <img
              src={backgroundImage}
              alt="Stadium"
              className="object-cover w-full h-full"
            />
          </video>
          
          <AnimatePresence mode="wait">
            {!showContactForm && !showFeatures && !showPricing ? (
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
                <div className="flex gap-4 flex-wrap">
                  <button 
                    onClick={handleScheduleDemo}
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
                  >
                    Schedule a Demo
                  </button>
                  <button 
                    onClick={handleShowFeatures}
                    className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition"
                  >
                    View Features
                  </button>
                  <button 
                    onClick={handleShowPricing}
                    className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition"
                  >
                    See Pricing
                  </button>
                </div>
              </motion.div>
            ) : showFeatures ? (
              <motion.div 
                key="features-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-20 overflow-y-auto"
              >
                <div className="max-w-6xl w-full py-8">
                  <h2 className="text-5xl font-bold mb-4 text-center font-formula">Key Features</h2>
                  <p className="text-white/80 text-center mb-12 text-xl font-neue-montreal max-w-3xl mx-auto">
                    Everything you need to manage players, track performance, and make data-driven decisions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">🏈</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">Player Profiles</h3>
                      <p className="text-white/80 font-neue-montreal">Centralize every player's academic, athletic, and personal data in comprehensive, searchable profiles.</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">🤖</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">AI-Powered Evaluations</h3>
                      <p className="text-white/80 font-neue-montreal">Summarize notes and generate detailed reports with AI to streamline your scouting process.</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">NIL Tracking</h3>
                      <p className="text-white/80 font-neue-montreal">Monitor NIL activity and ensure compliance with clear, accessible records and automated alerts.</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">💪</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">S&C Tracking</h3>
                      <p className="text-white/80 font-neue-montreal">Track performance metrics and physical development in real time with integrated fitness monitoring.</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">💬</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">Communication Hub</h3>
                      <p className="text-white/80 font-neue-montreal">Share notes and evaluations across departments to keep everyone aligned and informed.</p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="text-4xl mb-4">📊</div>
                      <h3 className="text-2xl font-semibold mb-4 text-white font-formula">Custom Dashboards</h3>
                      <p className="text-white/80 font-neue-montreal">Visualize trends and data most important to your staff and program goals with custom analytics.</p>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={handleScheduleDemo}
                      className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Schedule Demo
                    </button>
                    <button 
                      onClick={handleBackToHome}
                      className="px-8 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : showPricing ? (
              <motion.div 
                key="pricing-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-20 overflow-y-auto"
              >
                <div className="max-w-5xl w-full py-8">
                  <h2 className="text-5xl font-bold mb-4 text-center font-formula">Simple Pricing</h2>
                  <p className="text-white/80 text-center mb-12 text-xl font-neue-montreal max-w-3xl mx-auto">
                    Choose the plan that fits your organization. All plans come with onboarding support and full access to all modules.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm relative"
                    >
                      <h3 className="text-3xl font-bold mb-2 text-white font-formula">High School</h3>
                      <div className="text-5xl font-bold mb-6 text-white">$99<span className="text-xl text-white/70">/mo</span></div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Up to 75 players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Full feature access</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Onboarding support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Email support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Basic analytics</li>
                      </ul>
                      <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                        Get Started
                      </button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="border border-blue-400 rounded-lg p-8 bg-blue-500/10 backdrop-blur-sm relative"
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                      <h3 className="text-3xl font-bold mb-2 text-white font-formula">College</h3>
                      <div className="text-5xl font-bold mb-6 text-white">$299<span className="text-xl text-white/70">/mo</span></div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Up to 150 players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Team & staff dashboards</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced integrations</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Priority support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced analytics</li>
                      </ul>
                      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                        Get Started
                      </button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm relative"
                    >
                      <h3 className="text-3xl font-bold mb-2 text-white font-formula">Pro / Enterprise</h3>
                      <div className="text-5xl font-bold mb-6 text-white">Custom</div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Unlimited players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>API + CRM integration</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Dedicated account manager</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>24/7 phone support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Custom features</li>
                      </ul>
                      <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                        Contact Sales
                      </button>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={handleScheduleDemo}
                      className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Schedule Demo
                    </button>
                    <button 
                      onClick={handleBackToHome}
                      className="px-8 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : showContactForm ? (
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
                        onClick={handleBackToHome}
                        className="px-6 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
                      >
                        Back to Home
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
    </>
  );
}

export default App
