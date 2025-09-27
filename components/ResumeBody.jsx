import React from 'react';
import { motion } from 'framer-motion';
import WorkExperience from './WorkExperience';
import Education from './Education';
import FeaturedProjectsSidebar from './FeaturedProjectsSidebar';
import QuickStats from './QuickStats';

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

const ResumeBody = () => {
    return (
        <motion.section
            className="w-full container mx-auto px-4 py-20 lg:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-12">
                    <WorkExperience />
                    <Education />
                </div>

                {/* Right Column (Sidebar) */}
                <div className="lg:col-span-1 space-y-8">
                    <FeaturedProjectsSidebar />
                    <QuickStats />
                </div>
            </div>
        </motion.section>
    );
};

export default ResumeBody;