import React from 'react';
import { motion } from 'framer-motion';
import CoffeeIcon from './icons/CoffeeIcon';
import GamepadIcon from './icons/GamepadIcon';
import MovieIcon from './icons/MovieIcon';
import CameraIcon from './icons/CameraIcon';

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

const funFactsData = [
  {
    icon: CoffeeIcon,
    text: 'I am a coffee enthusiast and can make a mean cup of pour-over coffee.',
  },
  {
    icon: GamepadIcon,
    text: 'In my free time, I enjoy playing strategy and role-playing video games.',
  },
  {
    icon: MovieIcon,
    text: 'I am an avid fan of action movies, always excited for thrilling adventures on screen.',
  },
  {
    icon: CameraIcon,
    text: 'I have a passion for landscape photography and enjoy capturing nature\'s beauty.',
  },
];

const FunFacts = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
        Fun Facts
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {funFactsData.map((fact, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-slate-100/80 dark:bg-navy-medium/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-mint-green/10"
          >
            <fact.icon className="w-12 h-12 text-teal-600 dark:text-mint-green mb-2" />
            <p className="text-slate-600 dark:text-light-slate">{fact.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FunFacts;