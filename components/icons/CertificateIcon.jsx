import React from 'react';

const CertificateIcon = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M13 19l-4-4 1.5-1.5M13 19l7-7-1.5-1.5M13 19l-7.5-7.5L3 14"/>
      <path d="M12 22s-4-3-4-8 4-8 4-8 4 3 4 8-4 8-4 8z"/>
    </svg>
  );
};

export default CertificateIcon;