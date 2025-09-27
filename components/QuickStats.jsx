import React from 'react';
import { motion } from 'framer-motion';
import StatsChartIcon from './icons/StatsChartIcon';

const statsData = [
    { label: 'Total Experience', value: '2+ Years' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Technologies Used', value: '15+' },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const QuickStats = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
                <StatsChartIcon className="w-8 h-8 text-teal-600 dark:text-mint-green" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Quick Stats</h2>
            </div>
            <div className="bg-slate-100/50 dark:bg-navy-medium/30 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50">
                <ul className="space-y-4">
                    {statsData.map((stat, index) => (
                        <li key={index} className="flex justify-between items-center text-slate-600 dark:text-slate">
                            <span>{stat.label}</span>
                            <span className="font-bold text-slate-800 dark:text-white">{stat.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default QuickStats;