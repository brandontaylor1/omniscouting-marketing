import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

import backgroundImage from '../../public/images/stadium-bg.png';
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
      
      {/* Dark Overlay - temporarily making it red to test visibility */}
      <div className="absolute inset-0 bg-red-500/50 z-10"></div>

      {/* Test content to see if overlay is working */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl">
        Test Content - Can you see this white text?
      </div>

     
    </section>


    
    
    
    

     
        
    </div>
  );
}
