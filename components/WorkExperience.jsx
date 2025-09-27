import React from 'react';
import { motion } from 'framer-motion';
import BriefcaseIcon from './icons/BriefcaseIcon';
import LocationIcon from './icons/LocationIcon';

const workData = [
    {
        title: 'Frontend Developer',
        company: 'Creative IT Institute',
        location: 'Dhaka, Bangladesh',
        date: '2024 - 2025',
        description: 'Started developing static websites and learning modern JavaScript and CSS frameworks. Gained experience in HTML, CSS, JavaScript, React development and Next.js.',
        achievements: [
            'Completed 20+ static website projects',
            'Learned React and modern frontend development practices',
            'Contributed to team code review processes',
            'Converted FIGMA designs to responsive HTML/CSS'
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkExperience = () => {
    return (
        <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <BriefcaseIcon className="w-8 h-8 text-teal-600 dark:text-mint-green" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Work Experience</h2>
            </motion.div>
            <div className="space-y-8">
                {workData.map((job, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="bg-slate-100/50 dark:bg-navy-medium/30 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50"
                    >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{job.title}</h3>
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate">{job.date}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate mb-3">
                            <span className="font-semibold text-teal-600 dark:text-mint-green">{job.company}</span>
                            <span className="flex items-center gap-1"><LocationIcon className="w-4 h-4" /> {job.location}</span>
                        </div>
                        <p className="text-slate-600 dark:text-light-slate mb-4">{job.description}</p>
                        <div>
                            <h4 className="font-semibold text-slate-700 dark:text-white mb-2">Key Achievements:</h4>
                            <ul className="space-y-1 text-slate-600 dark:text-slate list-inside">
                                {job.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-teal-500 dark:text-mint-green mr-2 mt-1 flex-shrink-0">&#8226;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WorkExperience;