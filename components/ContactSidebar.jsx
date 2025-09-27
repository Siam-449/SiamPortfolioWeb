import React from 'react';
import { motion } from 'framer-motion';
import ContactInformation from './ContactInformation';
import FollowMe from './FollowMe';
import Availability from './Availability';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
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

const ContactSidebar = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      <motion.div variants={itemVariants}><ContactInformation /></motion.div>
      <motion.div variants={itemVariants}><FollowMe /></motion.div>
      <motion.div variants={itemVariants}><Availability /></motion.div>
    </motion.div>
  );
};

export default ContactSidebar;