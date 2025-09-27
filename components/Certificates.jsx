import React from 'react';
import { motion } from 'framer-motion';
import AwardIcon from './icons/AwardIcon';
import ShieldIcon from './icons/ShieldIcon';
import CalendarIcon from './icons/CalendarIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const statsData = [
    {
        icon: AwardIcon,
        value: '1',
        label: 'Total Certificates',
        color: 'text-green-400'
    },
    {
        icon: ShieldIcon,
        value: '1',
        label: 'Verified Credential',
        color: 'text-blue-400'
    },
    {
        icon: CalendarIcon,
        value: '2025',
        label: 'Latest Certification',
        color: 'text-purple-400'
    },
    {
        icon: ExternalLinkIcon,
        value: '100%',
        label: 'Completion Rate',
        color: 'text-yellow-400'
    }
];

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

const StatCard = ({ icon: Icon, value, label, color }) => (
    <motion.div
        variants={itemVariants}
        className="bg-slate-100/50 dark:bg-navy-medium/30 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 text-center flex flex-col items-center justify-center gap-4"
    >
        <Icon className={`w-10 h-10 ${color}`} />
        <div>
            <p className="text-4xl font-bold text-slate-800 dark:text-white">{value}</p>
            <p className="mt-1 text-slate-600 dark:text-slate">{label}</p>
        </div>
    </motion.div>
);


const Certificates = () => {
    return (
        <motion.section
            className="w-full py-20 lg:py-28"
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
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white">
                        Certificates & Achievements
                    </h1>
                    <p className="mt-4 text-slate-600 dark:text-slate max-w-3xl mx-auto">
                       Professional certifications and achievements that demonstrate my expertise and commitment to continuous learning in web development.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                   {statsData.map(item => (
                       <StatCard key={item.label} {...item} />
                   ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Certificates;