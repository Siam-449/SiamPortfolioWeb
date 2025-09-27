import React from 'react';

const StatsChartIcon = ({ className }) => {
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
      <path d="M18 20V10"></path>
      <path d="M12 20V4"></path>
      <path d="M6 20V14"></path>
    </svg>
  );
};

export default StatsChartIcon;