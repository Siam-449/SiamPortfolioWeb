import React from 'react';
import { motion } from 'framer-motion';

const CircularProgress = ({ percentage }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const circleVariants = {
        hidden: { strokeDashoffset: circumference },
        visible: {
            strokeDashoffset: offset,
            transition: { duration: 1.5, ease: 'easeOut', delay: 0.3 }
        }
    };

    return (
        <div className="relative w-24 h-24">
            <svg className="w-full h-full" viewBox="0 0 80 80">
                <circle
                    className="stroke-slate-200 dark:stroke-slate-700"
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="40"
                    cy="40"
                />
                <motion.circle
                    className="stroke-teal-500 dark:stroke-mint-green"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="40"
                    cy="40"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                    strokeDasharray={circumference}
                    variants={circleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-mono text-slate-700 dark:text-light-slate">
                    {percentage}%
                </span>
            </div>
        </div>
    );
};

export default CircularProgress;
