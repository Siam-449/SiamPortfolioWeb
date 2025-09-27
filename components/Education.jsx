import React from 'react';
import { motion } from 'framer-motion';
import GraduationCapIcon from './icons/GraduationCapIcon';
import LocationIcon from './icons/LocationIcon';

const educationData = [
    {
        degree: 'Bachelor of Business Administration',
        institution: 'Bangladesh University of Business and Technology',
        location: 'Dhaka, Bangladesh',
        date: '2026-Present',
        description: 'Specialized in business administration and management principles. Currently gaining knowledge in finance, marketing, and organizational behavior with a focus on practical business applications.',
        cgpa: 'CGPA: Running/4.00'
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Dhaka Commerce College',
        location: 'Dhaka, Bangladesh',
        date: '2022-2023',
        description: 'Focused on the commerce curriculum, including Accounting, Finance, and Business Organization, which built a strong foundation in business and analytical skills for my future studies in BBA.',
        cgpa: 'GPA: 4.08/5.00'
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Bcic School & College',
        location: 'Dhaka, Bangladesh',
        date: '2020-2021',
        description: 'Completed my secondary education with a focus on commerce subjects, developing a strong interest in business, finance, and management.',
        cgpa: 'GPA: 4.39/5.00'
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Education = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
                <GraduationCapIcon className="w-8 h-8 text-teal-600 dark:text-mint-green" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Education</h2>
            </div>
            <div className="space-y-8">
                {educationData.map((edu, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="bg-slate-100/50 dark:bg-navy-medium/30 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50"
                    >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{edu.degree}</h3>
                            <p className="text-sm font-semibold text-slate-500 dark:text-slate">{edu.date}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate mb-3">
                            <span className="font-semibold text-teal-600 dark:text-mint-green">{edu.institution}</span>
                            <span className="flex items-center gap-1"><LocationIcon className="w-4 h-4" /> {edu.location}</span>
                        </div>
                        <p className="text-slate-600 dark:text-light-slate mb-3">{edu.description}</p>
                        {edu.cgpa && <p className="font-semibold text-teal-600 dark:text-mint-green">{edu.cgpa}</p>}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Education;