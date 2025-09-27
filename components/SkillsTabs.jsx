import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillProficiencyCard from './SkillProficiencyCard';
import CodeIcon from './icons/CodeIcon';
import ToolsIcon from './icons/ToolsIcon';
import DesignIcon from './icons/DesignIcon';

const skillsData = {
    frontend: [
        { name: 'HTML5', proficiency: 95, level: 'Expert', color: '#E44D26' },
        { name: 'CSS3', proficiency: 90, level: 'Expert', color: '#1572B6' },
        { name: 'Tailwind CSS', proficiency: 95, level: 'Expert', color: '#38B2AC' },
        { name: 'React', proficiency: 92, level: 'Expert', color: '#61DAFB' },
        { name: 'Next.js', proficiency: 88, level: 'Advanced', color: '#000000' },
        { name: 'JavaScript', proficiency: 90, level: 'Expert', color: '#F7DF1E' },
    ],
    tools: [
        { name: 'Git & GitHub', proficiency: 90, level: 'Expert', color: '#181717' },
        { name: 'Vite', proficiency: 85, level: 'Advanced', color: '#646CFF' },
        { name: 'npm', proficiency: 95, level: 'Expert', color: '#CB3837' },
    ],
    design: [
        { name: 'Figma', proficiency: 90, level: 'Expert', color: '#F24E1E' },
        { name: 'Responsive Design', proficiency: 98, level: 'Expert', color: '#6F2CF4' },
        { name: 'UI/UX Principles', proficiency: 92, level: 'Expert', color: '#0ACF83' },
    ]
};

const tabs = [
    { id: 'frontend', label: 'Frontend', icon: CodeIcon },
    { id: 'tools', label: 'Tools & Workflow', icon: ToolsIcon },
    { id: 'design', label: 'Design & UX', icon: DesignIcon },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const SkillsTabs = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <section className="w-full pb-20 lg:pb-28">
            <div className="flex justify-center items-center mb-12 border-b border-slate-200 dark:border-slate-700/50">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-2 px-4 py-3 sm:px-6 font-semibold transition-colors duration-300 ${
                            activeTab === tab.id
                                ? 'text-teal-600 dark:text-mint-green'
                                : 'text-slate-500 dark:text-slate hover:text-slate-800 dark:hover:text-light-slate'
                        }`}
                        aria-selected={activeTab === tab.id}
                        role="tab"
                    >
                        <tab.icon className="w-5 h-5" />
                        <span className="hidden sm:inline">{tab.label}</span>
                        {activeTab === tab.id && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 dark:bg-mint-green"
                                layoutId="underline"
                            />
                        )}
                    </button>
                ))}
            </div>

            <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {skillsData[activeTab].map(skill => (
                    <motion.div variants={itemVariants} key={skill.name}>
                        <SkillProficiencyCard {...skill} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsTabs;