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
    <section classname="relative w-full h-full">
    <Image 
      src="/images/stadium-bg.png"
      alt="Stadium Background"
      fill
      className="object-cover h-full w-full z-0"    
    />

    <div classname="absolute inset-0 z-10 bg-black/30">
      test

    </div>

    </section>


    
    
    
    

     
        
  );
}
