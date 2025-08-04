import Navbar from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import './App.css'

import backgroundImage from './assets/backgroundImage.jpg'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    organizationType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Ensure proper scroll position on load and prevent zoom issues on mobile
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Prevent zoom on double tap for mobile
    let lastTouchEnd = 0;
    const preventZoom = (e) => {
      const now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };
    
    document.addEventListener('touchend', preventZoom, { passive: false });
    
    return () => {
      document.removeEventListener('touchend', preventZoom);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleScheduleDemo = () => {
    setShowContactForm(true);
    setShowFeatures(false);
    setShowPricing(false);
    setShowAbout(false);
    scrollToTop();
  };

  const handleShowFeatures = () => {
    setShowFeatures(true);
    setShowContactForm(false);
    setShowPricing(false);
    setShowAbout(false);
    scrollToTop();
  };

  const handleShowPricing = () => {
    setShowPricing(true);
    setShowContactForm(false);
    setShowFeatures(false);
    setShowAbout(false);
    scrollToTop();
  };

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowContactForm(false);
    setShowFeatures(false);
    setShowPricing(false);
    scrollToTop();
  };

  const handleBackToHome = () => {
    setShowContactForm(false);
    setShowFeatures(false);
    setShowPricing(false);
    setShowAbout(false);
    // Reset form when going back to home
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      organizationType: '',
      message: ''
    });
    setSubmitStatus(null);
    scrollToTop();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          organizationType: '',
          message: ''
        });
      } else {
        console.error('API Error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar 
        onAboutClick={handleShowAbout}
        onFeaturesClick={handleShowFeatures}
        onPricingClick={handleShowPricing}
        onContactClick={handleScheduleDemo}
      />
        <section className="relative h-screen w-screen overflow-hidden touch-pan-y">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full fixed inset-0 z-0"
            poster={backgroundImage} // Fallback image while video loads
          >
            <source src="/videos/stadium.mp4" type="video/mp4" />
            <source src="/videos/stadium.mov" type="video/quicktime" />
            <source src="/videos/stadium-background.webm" type="video/webm" />
            {/* Fallback to image if video doesn't load */}
            <img
              src={backgroundImage}
              alt="Stadium"
              className="object-cover w-full h-full"
            />
          </video>
          
          <AnimatePresence mode="wait">
            {!showContactForm && !showFeatures && !showPricing && !showAbout ? (
              <motion.div 
                key="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center sm:items-start justify-center text-white px-6 sm:px-12 md:px-20"
              >
                <img src="/images/logowhite.svg" alt="Logo" className="w-2/3 sm:w-1/2 md:w-1/3 mb-6" />
                <p className="max-w-lg text-center sm:text-left mb-8 sm:mb-10 text-lg sm:text-xl md:text-2xl font-neue-montreal leading-relaxed">
                  The all-in-one player management system built for teams that want to win on and off the field.
                </p>
                
                {/* Existing customer notice */}
                <div className="mb-6 p-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm w-full sm:w-auto">
                  <p className="text-white/90 text-sm sm:text-base font-neue-montreal text-center sm:text-left">
                    Already have an account? 
                    <a 
                      href="https://app.omniscouting.com" 
                      className="text-blue-300 hover:text-blue-200 font-semibold ml-2 underline transition"
                    >
                      Login to your dashboard →
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button 
                    onClick={handleScheduleDemo}
                    className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-gray-300 transition text-center"
                  >
                    Schedule a Demo
                  </button>
                  <button 
                    disabled
                    className="w-full sm:w-auto bg-white/10 border border-white px-6 sm:px-8 py-4 rounded-lg font-medium cursor-not-allowed opacity-60 relative group text-center"
                  >
                    Watch Overview
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full transform group-hover:scale-110 transition">
                      Coming Soon
                    </span>
                  </button>
                </div>
              </motion.div>
            ) : showAbout ? (
              <motion.div 
                key="about-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-6 sm:px-12 md:px-20 overflow-y-auto pt-4 sm:pt-8"
              >
                <div className="max-w-4xl w-full py-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center font-formula">About Omni Scouting</h2>
                  <p className="text-white/80 text-center mb-8 sm:mb-12 text-lg sm:text-xl font-neue-montreal max-w-3xl mx-auto">
                    Built by football professionals, for football professionals.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-formula">Our Story</h3>
                      <p className="text-white/80 font-neue-montreal text-base sm:text-lg leading-relaxed">
                        Omni Scouting was created by football insiders who understand the demands of managing players, data, and decisions. Whether you're in a high school, college, or pro front office — this platform was designed for you.
                      </p>
                      <p className="text-white/80 font-neue-montreal text-lg leading-relaxed">
                        We've experienced firsthand the challenges of tracking player development, managing compliance, and making data-driven decisions with outdated tools and scattered spreadsheets.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-formula">Our Mission</h3>
                      <p className="text-white/80 font-neue-montreal text-base sm:text-lg leading-relaxed">
                        To empower football programs with the tools they need to win on and off the field. We believe that better data leads to better decisions, and better decisions lead to better outcomes for players and programs.
                      </p>
                      <div className="border border-white/20 rounded-lg p-4 sm:p-6 bg-white/5 backdrop-blur-sm">
                        <p className="text-white font-neue-montreal text-base sm:text-lg italic">
                          "Every player deserves comprehensive support. Every coach deserves reliable data. Every program deserves to reach its potential."
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-formula mb-6">Why Choose Omni Scouting?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="border border-white/20 rounded-lg p-4 sm:p-6 bg-white/5 backdrop-blur-sm">
                        <div className="text-3xl mb-4">🎯</div>
                        <h4 className="text-lg sm:text-xl font-bold text-white font-formula mb-2">Purpose-Built</h4>
                        <p className="text-white/80 font-neue-montreal">Designed specifically for football programs, not adapted from generic solutions.</p>
                      </div>
                      <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                        <div className="text-3xl mb-4">🚀</div>
                        <h4 className="text-xl font-bold text-white font-formula mb-2">Always Evolving</h4>
                        <p className="text-white/80 font-neue-montreal">Regular updates and new features based on real user feedback from programs like yours.</p>
                      </div>
                      <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
                        <div className="text-3xl mb-4">🤝</div>
                        <h4 className="text-xl font-bold text-white font-formula mb-2">True Partnership</h4>
                        <p className="text-white/80 font-neue-montreal">We're not just a vendor – we're your technology partner in building a winning program.</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={handleScheduleDemo}
                      className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Schedule Demo
                    </button>
                    <button 
                      onClick={handleBackToHome}
                      className="w-full sm:w-auto px-8 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : showFeatures ? (
              <motion.div 
                key="features-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-6 sm:px-12 md:px-20 overflow-y-auto pt-4 sm:pt-8"
              >
                <div className="max-w-6xl w-full py-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center font-formula">Key Features</h2>
                  <p className="text-white/80 text-center mb-8 sm:mb-12 text-base sm:text-lg md:text-xl font-neue-montreal max-w-3xl mx-auto">
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
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={handleScheduleDemo}
                      className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Schedule Demo
                    </button>
                    <button 
                      onClick={handleBackToHome}
                      className="w-full sm:w-auto px-8 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
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
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-6 sm:px-12 md:px-20 overflow-y-auto pt-4 sm:pt-8"
              >
                <div className="max-w-6xl w-full py-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center font-formula">Simple Pricing</h2>
                  <p className="text-white/80 text-center mb-8 sm:mb-12 text-base sm:text-lg md:text-xl font-neue-montreal max-w-3xl mx-auto">
                    Choose the plan that fits your organization. All plans come with onboarding support and full access to all modules.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-6 lg:p-8 bg-white/5 backdrop-blur-sm relative h-full flex flex-col"
                    >
                      <h3 className="text-3xl font-bold mb-2 text-white font-formula">High School</h3>
                      <div className="text-3xl lg:text-4xl font-bold mb-6 text-white">Contact for Pricing</div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal flex-grow">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Up to 75 players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Full feature access</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Onboarding support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Email support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Basic analytics</li>
                      </ul>
                      <button 
                        onClick={handleScheduleDemo}
                        className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition mt-auto"
                      >
                        Contact for Pricing
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
                      <div className="text-2xl font-bold mb-6 text-white">Contact for Pricing</div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Up to 150 players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Team & staff dashboards</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced integrations</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Priority support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Advanced analytics</li>
                      </ul>
                      <button 
                        onClick={handleScheduleDemo}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                      >
                        Contact for Pricing
                      </button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="border border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm relative"
                    >
                      <h3 className="text-3xl font-bold mb-2 text-white font-formula">Pro / Enterprise</h3>
                      <div className="text-2xl font-bold mb-6 text-white">Contact for Pricing</div>
                      <ul className="text-white/80 text-left space-y-3 mb-8 font-neue-montreal">
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Unlimited players</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>API + CRM integration</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Dedicated account manager</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>24/7 phone support</li>
                        <li className="flex items-center"><span className="text-green-400 mr-2">✓</span>Custom features</li>
                      </ul>
                      <button 
                        onClick={handleScheduleDemo}
                        className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
                      >
                        Contact for Pricing
                      </button>
                    </motion.div>
                  </div>
                  
                  {/* Existing customer notice */}
                  <div className="text-center mb-6">
                    <p className="text-white/80 text-sm sm:text-base font-neue-montreal">
                      Already a customer? 
                      <a 
                        href="https://app.omniscouting.com" 
                        className="text-blue-300 hover:text-blue-200 font-semibold ml-2 underline transition"
                      >
                        Login to your account
                      </a>
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={handleScheduleDemo}
                      className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Schedule Demo
                    </button>
                    <button 
                      onClick={handleBackToHome}
                      className="w-full sm:w-auto px-8 py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition"
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
                className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center text-white px-6 sm:px-12 md:px-20"
              >
                <div className="max-w-lg w-full">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="text-5xl sm:text-6xl mb-4">✅</div>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center font-formula">Thank You!</h2>
                      <p className="text-white/80 text-center mb-6 sm:mb-8 font-neue-montreal text-sm sm:text-base">
                        We've received your demo request and will get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={handleBackToHome}
                        className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
                      >
                        Back to Home
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center font-formula">Schedule Your Demo</h2>
                      <p className="text-white/80 text-center mb-6 sm:mb-8 font-neue-montreal text-sm sm:text-base">
                        Ready to see Omni Scouting in action? Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                      
                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 border border-red-400 rounded-lg bg-red-500/10 text-red-400 text-center">
                          There was an error submitting your request. Please try again or contact us directly.
                        </div>
                      )}
                      
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            name="firstName"
                            placeholder="First Name" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-3 sm:p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition text-sm sm:text-base" 
                            required 
                          />
                          <input 
                            type="text" 
                            name="lastName"
                            placeholder="Last Name" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-3 sm:p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition text-sm sm:text-base" 
                            required 
                          />
                        </div>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email Address" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 sm:p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition text-sm sm:text-base" 
                          required 
                        />
                        <input 
                          type="text" 
                          name="organization"
                          placeholder="Organization/School" 
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full p-3 sm:p-4 border border-white/30 rounded-lg bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition text-sm sm:text-base" 
                          required 
                        />
                        <select 
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          className="w-full p-3 sm:p-4 border border-white/30 rounded-lg bg-transparent text-white focus:border-white focus:outline-none transition text-sm sm:text-base"
                          required
                        >
                          <option value="" className="bg-black">Select Organization Type</option>
                          <option value="high-school" className="bg-black">High School</option>
                          <option value="college" className="bg-black">College</option>
                          <option value="pro" className="bg-black">Professional</option>
                        </select>
                        <textarea 
                          name="message"
                          placeholder="Tell us about your needs (optional)" 
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full p-3 sm:p-4 border border-white/30 rounded-lg h-20 sm:h-24 bg-transparent text-white placeholder-white/70 focus:border-white focus:outline-none transition resize-none text-sm sm:text-base" 
                        ></textarea>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full sm:flex-1 bg-white text-black px-6 py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                          >
                            {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                          </button>
                          <button 
                            type="button"
                            onClick={handleBackToHome}
                            className="w-full sm:w-auto px-6 py-3 sm:py-4 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition text-sm sm:text-base"
                          >
                            Back to Home
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
    </>
  );
}

export default App
