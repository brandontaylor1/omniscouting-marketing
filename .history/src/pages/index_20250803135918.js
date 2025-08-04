import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

import backgroundImage from '../../public/images/stadium-bg.png';
import logoImage from '../../public/logo.svg';  

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

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={backgroundImage}
          alt="Stadium Background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-5 top-0 left-0 w-full h-full flex flex-col items-center justify-center">test


      </div>
        
    </div>
  );
}
