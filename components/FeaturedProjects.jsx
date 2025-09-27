import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

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

const FeaturedProjects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full pt-12 pb-20 lg:pt-16 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-800 dark:text-white">
        Featured Projects
      </motion.h2>
      <motion.p variants={itemVariants} className="mt-4 text-center text-slate-600 dark:text-slate max-w-2xl mx-auto">
        A showcase of my recent work and technical expertise
      </motion.p>

      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-12 text-center">
        <Link href="/resume" className="inline-block px-6 py-3 bg-teal-600 dark:bg-mint-green text-white dark:text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity duration-300">
          View All Projects
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedProjects;