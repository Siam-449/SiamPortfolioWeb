import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';

const certificatesData = [
  {
    title: 'Frontend Web Development Certification',
    issuer: 'Creative IT Institute',
    year: '2025',
    description: 'Received certification in frontend development with hands-on training in building responsive and interactive web applications using React, Next.js, and Tailwind CSS.',
    id: 'xxxxxxxxx',
    downloadUrl: '/images/siamCertificate.png',
    imageUrl: '/images/siamCertificate.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const CertificatesList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertImage, setSelectedCertImage] = useState('');

    const openModal = (imageUrl) => {
        setSelectedCertImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertImage('');
    };

    return (
        <>
            <motion.section
                className="w-full pb-20 lg:pb-28"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="container mx-auto px-4">
                     <motion.div 
                        variants={containerVariants}
                        className="grid grid-cols-1 gap-8 max-w-lg mx-auto"
                    >
                       {certificatesData.map((cert, index) => (
                           <CertificateCard 
                            key={index} 
                            {...cert} 
                            onViewClick={() => openModal(cert.imageUrl)}
                            />
                       ))}
                    </motion.div>
                </div>
            </motion.section>
            <CertificateModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                imageUrl={selectedCertImage} 
            />
        </>
    );
};

export default CertificatesList;