import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center py-16 lg:py-24"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white">
          Get In Touch
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
      </div>
    </motion.section>
  );
};

export default GetInTouch;