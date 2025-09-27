import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from './icons/CloseIcon';

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } }
};

const CertificateModal = ({ isOpen, onClose, imageUrl }) => {
    
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscape);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);


    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    aria-labelledby="certificate-modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white dark:bg-navy-medium rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700/50 flex justify-between items-center">
                            <h3 id="certificate-modal-title" className="text-lg font-bold text-slate-800 dark:text-white">Certificate Preview</h3>
                             <button onClick={onClose} className="text-slate-500 dark:text-slate hover:text-red-500 dark:hover:text-red-400 transition-colors" aria-label="Close modal">
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-4 flex-grow overflow-auto">
                           <img 
                                src={imageUrl} 
                                alt="Certificate Preview" 
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CertificateModal;
