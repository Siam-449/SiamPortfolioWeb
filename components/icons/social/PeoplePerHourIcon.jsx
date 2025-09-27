import React from 'react';

const PeoplePerHourIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M20.2 6.2c-1.3-1.3-3.1-2.2-5.2-2.2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7c2.1 0 3.9-.9 5.2-2.2 1.3-1.3 2.2-3.1 2.2-5.2s-.9-3.9-2.2-5.2zm-1.6 9c-.9.9-2.1 1.4-3.6 1.4H8V6h7c1.5 0 2.7.5 3.6 1.4s1.4 2.1 1.4 3.6-.5 2.7-1.4 3.6zM13 10h-2v6h2v-2h1c1.1 0 2-.9 2-2s-.9-2-2-2h-1v-2z"/>
        </svg>
    );
};

export default PeoplePerHourIcon;