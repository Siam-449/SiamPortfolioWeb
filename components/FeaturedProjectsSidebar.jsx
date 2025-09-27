import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectIcon from './icons/ProjectIcon';

// Re-using the same data from the main featured projects component
const projectsData = [
    {
        title: 'Educational Website Frontend',
        description: 'Modern educational website frontend built with Next.js and Tailwind CSS. Features include user authentication UI, and responsive design with smooth animations.',
        tags: ['Next.js', 'Tailwind CSS', 'React'],
        liveDemoUrl: 'https://escolaagency-website.netlify.app/',
        codeUrl: 'https://github.com/Siam-449/Escola-Exam-Project',
        imageUrl: '/images/educationalWebsiteFrontend.png',
    },
    {
        title: 'Agency Website Frontend',
        description: 'Interactive agency website with real-time UI updates, and team collaboration interface built with Html, Modern CSS and Bootstrap5.',
        tags: ['HTML5', 'CSS3', 'Bootstrap5'],
        liveDemoUrl: 'https://www-silicon.netlify.app/',
        codeUrl: 'https://github.com/Siam-449/Silicon',
        imageUrl: '/images/agencyWebsite.png',
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const FeaturedProjectsSidebar = () => {
    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                 <ProjectIcon className="w-8 h-8 text-teal-600 dark:text-mint-green" />
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Featured Projects</h2>
            </motion.div>
            <div className="space-y-8">
                {projectsData.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FeaturedProjectsSidebar;