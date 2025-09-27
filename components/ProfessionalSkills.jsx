import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import Link from 'next/link';

const skillsData = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ProfessionalSkills = () => {
  return (
    <motion.section 
      id="skills"
      className="w-full py-20 lg:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white">
        Core Skills
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-4 text-center text-slate-600 dark:text-slate max-w-2xl mx-auto">
        Specialized in modern web technologies with focus on user experience and performance
      </motion.p>

      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {skillsData.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <SkillBar name={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 text-center">
        <Link href="/skills" className="inline-block px-6 py-3 bg-teal-600/10 dark:bg-mint-green/10 text-teal-600 dark:text-mint-green font-semibold rounded-md hover:bg-teal-600/20 dark:hover:bg-mint-green/20 transition-colors duration-300">
          View All Skills
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default ProfessionalSkills;