import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const CallToAction = () => {
  return (
    <motion.section
      className="w-full bg-mint-green/40 dark:bg-navy-medium py-20 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
          Ready to Work Together?
        </h2>
        <p className="mt-4 text-slate-600 dark:text-light-slate max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal-600 dark:bg-mint-green text-white dark:text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity duration-300">
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
