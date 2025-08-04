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
        
      </div>
    </section>


    
    
    
    

     
        
    </div>
  );
}
