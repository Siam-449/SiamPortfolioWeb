import React from 'react';
import { motion } from 'framer-motion';

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

const summaryData = [
    { count: '6+', label: 'Frontend Technologies', color: 'text-teal-500 dark:text-mint-green' },
    { count: '3+', label: 'Development Tools', color: 'text-blue-500 dark:text-blue-400' },
    { count: '3+', label: 'Design Skills', color: 'text-purple-500 dark:text-purple-400' },
];

const SummaryCard = ({ count, label, color }) => (
    <motion.div variants={itemVariants} className="bg-slate-100/80 dark:bg-navy-medium/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 text-center">
        <p className={`text-4xl font-bold ${color}`}>{count}</p>
        <p className="mt-2 text-slate-600 dark:text-slate">{label}</p>
    </motion.div>
);


const SkillsSummary = () => {
    return (
        <motion.section
            className="w-full py-16 lg:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white">
                        My Skills & Expertise
                    </h1>
                    <p className="mt-4 text-slate-600 dark:text-slate max-w-3xl mx-auto">
                        A comprehensive overview of my technical skills, proficiency levels, and areas of expertise in modern web development technologies.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                   {summaryData.map(item => (
                       <SummaryCard key={item.label} {...item} />
                   ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default SkillsSummary;