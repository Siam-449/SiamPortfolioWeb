import React, { useState } from 'react';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import EyeIcon from './icons/EyeIcon';
import EyeOffIcon from './icons/EyeOffIcon';

const contactItems = [
    { icon: MailIcon, label: 'Email', value: 'azizulhakim986@gmail.com', href: 'mailto:azizulhakim986@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', value: '+880 1708-636449', href: 'tel:+8801708636449' },
    { icon: LocationIcon, label: 'Location', value: 'Dhaka, Bangladesh' },
];

const InfoCard = ({ icon: Icon, label, value, href, children, onClick }) => {
    const commonClasses = "block p-4 bg-slate-100/50 dark:bg-navy-medium/30 rounded-lg border border-slate-200 dark:border-slate-700/50 transition-colors duration-300";
    const hoverClasses = "hover:border-teal-500/50 dark:hover:border-mint-green/50";
    
    const content = (
        <div className="flex items-center gap-4">
            <Icon className="w-6 h-6 text-teal-600 dark:text-mint-green flex-shrink-0" />
            <div className="flex-grow">
                <p className="text-sm text-slate-500 dark:text-slate">{label}</p>
                <p className="font-semibold text-slate-700 dark:text-light-slate">{value}</p>
            </div>
            {children}
        </div>
    );
    
    if (href && href !== '#') {
        return <a href={href} className={`${commonClasses} ${hoverClasses}`}>{content}</a>;
    }
    
    if (onClick) {
        return <div onClick={onClick} className={`${commonClasses} ${hoverClasses} cursor-pointer`}>{content}</div>;
    }
    
    return <div className={commonClasses}>{content}</div>;
};

const ContactInformation = () => {
    const [isPhoneVisible, setIsPhoneVisible] = useState(false);
    
    const togglePhoneVisibility = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPhoneVisible(prev => !prev);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
                {contactItems.map(item => {
                    if (item.label === 'Phone') {
                        const fullPhoneNumber = item.value;
                        const maskedPhoneNumber = '+880 XXXX-XXXXXX';
                        return (
                            <InfoCard 
                                key={item.label}
                                icon={item.icon}
                                label={item.label}
                                value={isPhoneVisible ? fullPhoneNumber : maskedPhoneNumber}
                                href={isPhoneVisible ? item.href : '#'}
                                onClick={!isPhoneVisible ? togglePhoneVisibility : undefined}
                            >
                                <button 
                                    onClick={togglePhoneVisibility} 
                                    className="text-slate-500 dark:text-slate hover:text-teal-600 dark:hover:text-mint-green transition-colors duration-300 z-10"
                                    aria-label={isPhoneVisible ? "Hide phone number" : "Show phone number"}
                                >
                                    {isPhoneVisible ? <EyeIcon className="w-6 h-6" /> : <EyeOffIcon className="w-6 h-6" />}
                                </button>
                            </InfoCard>
                        );
                    }
                    return <InfoCard key={item.label} {...item} />;
                })}
            </div>
        </div>
    );
};

export default ContactInformation;