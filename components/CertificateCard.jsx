import React from 'react';
import { motion } from 'framer-motion';
import RibbonIcon from './icons/RibbonIcon';
import CalendarIcon from './icons/CalendarIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import DownloadIcon from './icons/DownloadIcon';

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

const CertificateCard = ({ title, issuer, year, description, id, onViewClick, downloadUrl }) => {
  return (
    <motion.div 
        variants={itemVariants}
        className="bg-slate-100/50 dark:bg-navy-medium p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-mint-green/20"
    >
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white pr-4">{title}</h3>
            <RibbonIcon className="w-8 h-8 text-teal-500 dark:text-mint-green flex-shrink-0" />
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm">
            <p className="font-semibold text-teal-600 dark:text-mint-green">{issuer}</p>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate">
                <CalendarIcon className="w-4 h-4" />
                <span>{year}</span>
            </div>
        </div>

        <p className="text-slate-600 dark:text-light-slate text-sm mb-6 flex-grow">{description}</p>

        <div className="mb-6">
            <span className="inline-block bg-teal-500/10 dark:bg-mint-green/10 text-teal-700 dark:text-mint-green text-xs font-mono px-3 py-1.5 rounded-full">
                ID: {id}
            </span>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-4">
            <button
                onClick={onViewClick}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold border border-teal-600 dark:border-mint-green text-teal-600 dark:text-mint-green rounded-md hover:bg-teal-600/10 dark:hover:bg-mint-green/10 transition-colors duration-300"
            >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>View</span>
            </button>
            <a 
                href={downloadUrl} 
                download 
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold border border-slate-400 dark:border-slate text-slate-600 dark:text-slate rounded-md hover:bg-slate-400/10 dark:hover:bg-slate/10 transition-colors duration-300"
            >
                <DownloadIcon className="w-4 h-4" />
                <span>Download</span>
            </a>
        </div>
    </motion.div>
  );
};

export default CertificateCard;