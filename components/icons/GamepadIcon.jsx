import React from 'react';

const GamepadIcon = ({ className }) => {
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
      <line x1="6" y1="12" x2="10" y2="12"></line>
      <line x1="8" y1="10" x2="8" y2="14"></line>
      <line x1="15" y1="13" x2="15.01" y2="13"></line>
      <line x1="18" y1="11" x2="18.01" y2="11"></line>
      <path d="M17.32 5H6.68a4 4 0 0 0-3.97 3.59c-.25 1.5.05 3.5.64 5.41A4 4 0 0 0 7.2 19h9.6a4 4 0 0 0 3.92-4.99c.6-1.9.9-3.9.65-5.41A4 4 0 0 0 17.32 5z"></path>
    </svg>
  );
};

export default GamepadIcon;