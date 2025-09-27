import React from 'react';

const ThreadsIcon = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M14.73,1.9h-5.46C3.96,1.9,1.9,3.96,1.9,9.27v5.46c0,5.31,2.06,7.37,7.37,7.37h5.46c5.31,0,7.37-2.06,7.37-7.37V9.27 C22.1,3.96,20.04,1.9,14.73,1.9z M12,16.16c-2.3,0-4.16-1.87-4.16-4.16c0-2.3,1.87-4.16,4.16-4.16s4.16,1.87,4.16,4.16 C16.16,14.3,14.3,16.16,12,16.16z" />
    </svg>
  );
};

export default ThreadsIcon;