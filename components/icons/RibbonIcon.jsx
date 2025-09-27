import React from 'react';

const RibbonIcon = ({ className }) => {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M9 14l3-2 3 2v5l-3 2-3-2v-5z" />
    </svg>
  );
};

export default RibbonIcon;