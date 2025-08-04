import Image from "next/image";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { motion } from "framer-motion";

import backgroundImage from '../../public/images/stadium-bg.png';

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
    <div className="relative h-full w-full bg-black text-white overflow-hidden">
      <Head>
        <title>Omni Scouting | Player Management Platform</title>
      </Head>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Stadium Background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Main Container with Logo and Content */}
      <main className="relative z-20 flex h-full">
        {/* Logo positioned on left side, vertically centered */}
        <div className="flex items-center pl-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src={"/logo.png"}
              alt="Omni Scouting Logo"
              width={200}
              height={200}
            />
          </motion.div>
        </div>

        {/* Content centered on the right side */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-xl mx-auto mb-8 text-lg"
        >
          Omni Scouting is the all-in-one player management solution built for high schools, colleges, and professional teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex gap-4"
        >
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">
            Schedule a Demo
          </button>
          <button className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition">
            Watch Overview
          </button>
        </motion.div>
      </main>
    </div>
  );
}
