import React from 'react';
import { motion } from 'framer-motion';
import DownloadIcon from './icons/DownloadIcon';

const ResumeHeader = () => {
  return (
    <motion.section
      className="w-full bg-mint-green/40 dark:bg-navy-dark py-20 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
          Resume & Experience
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate max-w-2xl mx-auto">
          A comprehensive overview of my professional journey, education, and notable projects.
        </p>
        <div className="mt-8">
          <a 
            href="/SiamCV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-600 dark:bg-mint-green text-white dark:text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Full CV</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeHeader;