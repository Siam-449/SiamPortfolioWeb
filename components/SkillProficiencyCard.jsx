import React from 'react';
import { motion } from 'framer-motion';
import CircularProgress from './CircularProgress';

const getLevelClasses = (level) => {
    switch (level.toLowerCase()) {
        case 'expert':
            return 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300';
        case 'advanced':
            return 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400';
        default:
            return 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300';
    }
};

const SkillProficiencyCard = ({ name, proficiency, level, color }) => {
    
    const barVariants = {
        hidden: { width: 0 },
        visible: {
            width: `${proficiency}%`,
            transition: { duration: 1, ease: 'easeOut', delay: 0.2 }
        }
    };

    return (
        <div className="bg-slate-100/50 dark:bg-navy-medium/30 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-mint-green/10">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                    <h3 className="font-bold text-lg text-slate-800 dark:text-white">{name}</h3>
                </div>
                <div className="text-right">
                    <div className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${getLevelClasses(level)}`}>
                        {level}
                    </div>
                    <p className="font-mono text-slate-700 dark:text-light-slate mt-1">{proficiency}%</p>
                </div>
            </div>

            <div className="flex-grow flex flex-col justify-between gap-6">
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate mb-1">Proficiency</p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                         <motion.div
                            className="h-full rounded-full bg-teal-500 dark:bg-mint-green"
                            variants={barVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        />
                    </div>
                </div>

                <div className="self-center">
                    <CircularProgress percentage={proficiency} />
                </div>
            </div>
        </div>
    );
};

export default SkillProficiencyCard;