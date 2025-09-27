import React from 'react';
import { motion } from 'framer-motion';
import LocationIcon from './icons/LocationIcon';
import CalendarIcon from './icons/CalendarIcon';
import AwardIcon from './icons/AwardIcon';

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

const strengths = [
    'Clean Code Architecture',
    'Responsive Design',
    'Performance Optimization',
    'User Experience Focus',
    'Cross-browser Compatibility',
    'Modern CSS Techniques',
];

const InfoCard = ({ icon: Icon, title, text }) => (
    <motion.div variants={itemVariants} className="bg-slate-100/80 dark:bg-navy-medium/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 flex items-start gap-4">
        <Icon className="w-8 h-8 text-teal-600 dark:text-mint-green mt-1 flex-shrink-0"/>
        <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">{title}</h3>
            <p className="text-slate-600 dark:text-slate">{text}</p>
        </div>
    </motion.div>
);

const KeyStrengths = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Side: Info Cards */}
        <motion.div variants={containerVariants} className="lg:col-span-5 space-y-8">
           <InfoCard icon={LocationIcon} title="Location" text="Dhaka, Bangladesh" />
           <InfoCard icon={CalendarIcon} title="Experience" text="2+ Years" />
        </motion.div>

        {/* Right Side: Key Strengths */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
            Key Strengths
          </h2>
          <motion.ul 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 dark:text-light-slate"
          >
            {strengths.map((strength) => (
                <motion.li key={strength} variants={itemVariants} className="flex items-center gap-3 bg-slate-100/80 dark:bg-navy-medium/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/50">
                    <AwardIcon className="w-5 h-5 text-teal-600 dark:text-mint-green flex-shrink-0" />
                    <span>{strength}</span>
                </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyStrengths;