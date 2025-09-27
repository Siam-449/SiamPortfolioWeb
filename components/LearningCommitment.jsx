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

const stats = [
    { value: '50+', label: 'Hours of Training', color: 'text-mint-green' },
    { value: '10+', label: 'Courses Completed', color: 'text-blue-400' },
    { value: '3', label: 'Specializations', color: 'text-purple-400' },
];

const LearningCommitment = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
        <div className="container mx-auto px-4">
            <motion.div 
                variants={itemVariants}
                className="bg-slate-100/50 dark:bg-navy-medium max-w-4xl mx-auto p-8 lg:p-12 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
                    Continuous Learning
                </h2>
                <p className="text-slate-600 dark:text-light-slate max-w-3xl mx-auto mb-10">
                    I believe in continuous learning and staying updated with the latest technologies and best practices. These certifications represent my commitment to professional development and expertise in modern web development.
                </p>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <p className={`text-4xl md:text-5xl font-bold ${stat.color}`}>{stat.value}</p>
                            <p className="mt-2 text-slate-500 dark:text-slate">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  );
};

export default LearningCommitment;