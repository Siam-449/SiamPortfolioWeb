import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ArrowRightIcon from './icons/ArrowRightIcon';
import DownloadIcon from './icons/DownloadIcon';
import Link from 'next/link';

const namesToAnimate = ["AZIZUL", "HAKIM", "SIAM"];
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBeforeDelete = 2000;

const Banner = () => {
  const [nameIndex, setNameIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentName = namesToAnimate[nameIndex];
      if (isDeleting) {
        // Handle deleting
        if (displayText.length > 0) {
          setDisplayText(currentName.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setNameIndex((prevIndex) => (prevIndex + 1) % namesToAnimate.length);
        }
      } else {
        // Handle typing
        if (displayText.length < currentName.length) {
          setDisplayText(currentName.substring(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, nameIndex]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section 
      className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 pt-16 lg:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Content */}
      <div className="flex-1 lg:max-w-xl text-center lg:text-left">
        <motion.p variants={itemVariants} className="text-teal-600 dark:text-mint-green font-mono mb-2">Hello, I'm</motion.p>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white min-h-[6rem] md:min-h-[8rem]">
          {displayText}
          <span className="inline-block w-1.5 h-12 md:h-16 bg-teal-600 dark:bg-mint-green ml-2 animate-blink"></span>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-600 dark:text-slate mt-2">
          Frontend Web Developer & UI/UX Designer
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-6 text-slate-600 dark:text-light-slate max-w-lg mx-auto lg:mx-0">
          Crafting beautiful user interfaces with modern web technologies. I specialize in creating responsive, user-friendly interfaces that combine modern design principles with clean, maintainable code.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 dark:bg-mint-green text-white dark:text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity duration-300">
            <span>Get In Touch</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <a href="/SiamCV.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 border border-teal-600 dark:border-mint-green text-teal-600 dark:text-mint-green font-semibold rounded-md hover:bg-teal-600/10 dark:hover:bg-mint-green/10 transition-colors duration-300">
            <DownloadIcon className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>

      {/* Right Side: Code Editor */}
      <motion.div variants={itemVariants} className="flex-1 w-full max-w-2xl hidden lg:block">
        <div className="bg-slate-100 dark:bg-[#1e293b] rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700/50 transition-all duration-300 drop-shadow-glow-subtle-light dark:drop-shadow-glow-subtle-dark">
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono ml-2">Portfolio.jsx</p>
            </div>
            <div className="bg-teal-100 dark:bg-green-400/20 text-teal-700 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded-md">
              React + Next.js
            </div>
          </div>
          {/* Code Area */}
          <div className="p-4 text-sm font-mono text-slate-800 dark:text-slate-300 overflow-x-auto">
            <p>
              <span className="text-purple-600 dark:text-purple-400">import</span> React, {'{'} <span className="text-blue-600 dark:text-blue-400">useState</span>, <span className="text-blue-600 dark:text-blue-400">useEffect</span> {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-teal-600 dark:text-green-300">'react'</span>;
            </p>
            <p>
              <span className="text-purple-600 dark:text-purple-400">import</span> {'{'} <span className="text-blue-600 dark:text-blue-400">motion</span> {'}'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-teal-600 dark:text-green-300">'framer-motion'</span>;
            </p>
            <p>&nbsp;</p>
            <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-amber-600 dark:text-yellow-300">Portfolio</span> {'= () => {'}</p>
            <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">const</span> [theme, setTheme] {'='} <span className="text-blue-600 dark:text-blue-400">useState</span>(<span className="text-teal-600 dark:text-green-300">'dark'</span>);</p>
            <p>&nbsp;</p>
            <p className="pl-4"><span className="text-blue-600 dark:text-blue-400">useEffect</span>{'(() => {'}</p>
            <p className="pl-8">document.documentElement.classList.toggle(</p>
            <p className="pl-12"><span className="text-teal-600 dark:text-green-300">'dark'</span>, theme {'==='} <span className="text-teal-600 dark:text-green-300">'dark'</span></p>
            <p className="pl-8">{');'}</p>
            <p className="pl-4">{'}, [theme]);'}</p>
            <p>&nbsp;</p>
            <p className="pl-4"><span className="text-purple-600 dark:text-purple-400">return</span> (</p>
            <p className="pl-8">{'<'}motion.div</p>
            <p className="pl-12"><span className="text-blue-600 dark:text-blue-400">initial</span>{'={{'} <span className="text-amber-600 dark:text-yellow-300">opacity:</span> 0 {'}}'}</p>
            <p className="pl-12"><span className="text-blue-600 dark:text-blue-400">animate</span>{'={{'} <span className="text-amber-600 dark:text-yellow-300">opacity:</span> 1 {'}}'}</p>
            <p className="pl-12"><span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-teal-600 dark:text-green-300">"min-h-screen bg-slate-900 text-white"</span></p>
            <p className="pl-8">{'>'}</p>
            <p className="pl-12">{'<'}<span className="text-red-600 dark:text-red-400">h1</span> <span className="text-blue-600 dark:text-blue-400">className</span>=<span className="text-teal-600 dark:text-green-300">"text-4xl font-bold"</span>{'>'}</p>
            <p className="pl-16">Welcome to My Portfolio</p>
            <p className="pl-12">{'</'}<span className="text-red-600 dark:text-red-400">h1</span>{'>'}</p>
            <p className="pl-8">{'</'}motion.div{'>'}</p>
            <p className="pl-4">{');'}</p>
            <p>{'};'}</p>
            <p>&nbsp;</p>
            <p><span className="text-purple-600 dark:text-purple-400">export default</span> Portfolio;<span className="inline-block w-2 h-4 bg-slate-800 dark:bg-slate-300 animate-blink ml-1"></span></p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Banner;