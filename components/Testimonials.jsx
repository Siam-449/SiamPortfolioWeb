import React from 'react';
import { motion } from 'framer-motion';
import QuoteIcon from './icons/QuoteIcon';

const testimonialsData = [
    {
        quote: "Siam's attention to detail transformed our UI. A true professional who delivers quality work on time.",
        name: "Jane Doe",
        title: "Project Manager, TechCorp",
        image: "https://placehold.co/64x64/1e293b/64ffda?text=JD"
    },
    {
        quote: "I was impressed by Siam's dedication to clean code. He's a problem-solver who cares about user experience.",
        name: "John Smith",
        title: "Lead Engineer, Innovate LLC",
        image: "https://placehold.co/64x64/1e293b/64ffda?text=JS"
    },
    {
        quote: "Siam has a unique talent for blending design and development. He brought our concepts to life with precision.",
        name: "Emily White",
        title: "CEO, Creative Solutions",
        image: "https://placehold.co/64x64/1e293b/64ffda?text=EW"
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const TestimonialCard = ({ quote, name, title, image }) => (
    <motion.div 
        variants={itemVariants}
        className="bg-slate-100/80 dark:bg-navy-medium/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700/50 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-mint-green/10"
    >
        <QuoteIcon className="w-8 h-8 text-slate-300 dark:text-slate-700 mb-4" />
        <p className="text-slate-600 dark:text-light-slate italic mb-4 flex-grow">"{quote}"</p>
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
            <img src={image} alt={name} width={48} height={48} className="rounded-full object-cover" />
            <div>
                <h4 className="font-bold text-slate-800 dark:text-white">{name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate">{title}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => {
    return (
        <motion.section 
            className="w-full pb-20 lg:pb-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white mb-12">
                What People Say
            </motion.h2>
            
            <motion.div 
                variants={containerVariants}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {testimonialsData.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Testimonials;