import React from 'react';
import { motion } from 'framer-motion';
import TrendingUpIcon from './icons/TrendingUpIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const learningTopics = [
    'TypeScript',
    'Framer Motion',
    'GSAP',
    'Vue.js',
    'Sass/SCSS',
    'PWA'
];

const ContinuousLearning = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
        Continuous Learning
      </motion.h2>
      
      <motion.div 
        variants={itemVariants}
        className="bg-slate-100/50 dark:bg-navy-medium/30 p-8 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 text-center"
      >
        <TrendingUpIcon className="w-12 h-12 text-teal-600 dark:text-mint-green mx-auto mb-4" />
        <p className="max-w-3xl mx-auto text-slate-600 dark:text-light-slate mb-8">
          Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. I regularly update my skills through online courses, documentation, and hands-on projects to ensure I can deliver cutting-edge solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
            {learningTopics.map(topic => (
                <span key={topic} className="text-xs font-mono px-3 py-1.5 border border-teal-600/50 dark:border-mint-green/50 text-teal-700 dark:text-mint-green rounded-full bg-teal-500/10 dark:bg-mint-green/10">
                    Currently Learning: {topic}
                </span>
            ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContinuousLearning;