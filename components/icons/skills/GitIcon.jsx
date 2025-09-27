import React from 'react';

const GitIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18.5 14.5L12 21l-6.5-6.5" />
      <path d="M12 3v18" />
      <path d="M3 10h18" />
      <path d="M3 3h18v7H3z" />
    </svg>
  );
};

export default GitIcon;
