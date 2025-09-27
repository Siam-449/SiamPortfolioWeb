import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-slate-700 dark:text-light-slate">{name}</h3>
        <p className="text-teal-600 dark:text-mint-green font-mono">{level}%</p>
      </div>
      <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-teal-500 to-green-400 dark:from-mint-green dark:to-teal-400 h-2.5 rounded-full"
          variants={barVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;