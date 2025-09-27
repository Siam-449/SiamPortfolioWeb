import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const MyStory = () => {
  return (
    <motion.section
      className="w-full pb-20 lg:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Image */}
        <motion.div variants={itemVariants} className="relative aspect-[4/3] md:aspect-video lg:aspect-[708/384] w-full">
          <div className="relative w-full h-full rounded-lg shadow-lg border border-slate-200 dark:border-slate-700/50 overflow-hidden drop-shadow-glow-light dark:drop-shadow-glow-dark transition-all duration-300">
            <Image
              src="/images/Siam.jpeg"
              alt="A photo of Siam"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            My Story
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-light-slate">
            <p>
                Passionate frontend developer with 2+ years of experience in creating responsive web applications using React, Next.js, and modern CSS frameworks. I specialize in building user-centric interfaces that combine clean code with intuitive design.
            </p>
            <p>
                My journey in web development began during my College years, where I discovered my passion for creating beautiful and interactive user interfaces.
            </p>
            <p>
                When I'm not coding, you can find me exploring new CSS techniques, learning about the latest frontend frameworks, or contributing to open-source projects. I believe in staying updated with modern design trends and continuously improving my craft to create pixel-perfect, performant web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyStory;