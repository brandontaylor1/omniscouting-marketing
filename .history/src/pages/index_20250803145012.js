import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

import backgroundImage from '../../public/stadium-bg.svg';
import logoImageBlack from '../../public/logoblack.svg';  

// Define local fonts
const formula = localFont({
  src: [
    {
      path: '../../public/fonts/PPFormula-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPFormula-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPFormula-Extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-formula',
});

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-Book.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
});


export default function Home() {
  return (
    <div className="relative top-0 left-0 h-full w-full bg-black text-white overflow-hidden">
      <Head>
        <title>Omni Scouting | Player Management Platform</title>
      </Head>
    
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image 
        src={backgroundImage}
        alt="Stadium Background"
        fill
        className="object-cover z-0"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Logo in top-left */}
      <div className="absolute top-10 left-10 z-20">
        <Image 
          src={logoImageBlack}
          alt="Omni Scouting Logo"
          width={80}
          height={80}
          className="rounded-full bg-white p-2"
        />
      </div>

      {/* Main content */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-20 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${neueMontreal.className} text-sm uppercase tracking-widest mb-4 text-white/80`}
        >
          TOTAL CONTROL. EVERY PLAYER. ONE PLATFORM.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`${formula.className} text-6xl md:text-8xl font-extrabold mb-6 text-white leading-none`}
        >
          OMNISCOUTING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`${neueMontreal.className} text-lg mb-8 text-white/90 max-w-xl leading-relaxed`}
        >
          Omni Scouting is the all-in-one player management solution built for high schools, colleges, and professional teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4"
        >
          <button className={`${neueMontreal.className} bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors`}>
            Schedule a Demo
          </button>
          <button className={`${neueMontreal.className} bg-transparent border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors`}>
            Watch Overview
          </button>
        </motion.div>
      </div>
    </section>


    
    
    
    

     
        
    </div>
  );
}
