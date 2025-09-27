import React from 'react';
import { motion } from 'framer-motion';

// Import skill icons
import ReactIcon from './icons/skills/ReactIcon';
import NextjsIcon from './icons/skills/NextjsIcon';
import JavaScriptIcon from './icons/skills/JavaScriptIcon';
import TypeScriptIcon from './icons/skills/TypeScriptIcon';
import TailwindIcon from './icons/skills/TailwindIcon';
import ExpressIcon from './icons/skills/ExpressIcon';
import MongoDBIcon from './icons/skills/MongoDBIcon';
import GitIcon from './icons/skills/GitIcon';
import FigmaIcon from './icons/skills/FigmaIcon';

const allSkills = [
    { name: 'React', icon: ReactIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'JavaScript (ES6+)', icon: JavaScriptIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'HTML5 & CSS3', icon: () => <div className="font-bold text-2xl text-slate-600 dark:text-slate">#</div> },
    { name: 'Express.js', icon: ExpressIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'Git & GitHub', icon: GitIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Vercel', icon: NextjsIcon },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const SkillCard = ({ name, icon: Icon }) => (
  <motion.div
    variants={itemVariants}
    className="bg-slate-100/80 dark:bg-navy-medium/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-mint-green/10"
  >
    <div className="w-16 h-16 flex items-center justify-center text-teal-600 dark:text-mint-green">
      <Icon className="w-full h-full" />
    </div>
    <h3 className="font-semibold text-slate-700 dark:text-light-slate">{name}</h3>
  </motion.div>
);

const SkillsGrid = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {allSkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsGrid;