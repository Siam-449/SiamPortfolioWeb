import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GithubIcon from './icons/social/GithubIcon';
import LinkedinIcon from './icons/social/LinkedinIcon';
import XIcon from './icons/social/XIcon';
import FacebookIcon from './icons/social/FacebookIcon';
import InstagramIcon from './icons/social/InstagramIcon';
import ThreadsIcon from './icons/social/ThreadsIcon';
import FiverrIcon from './icons/social/FiverrIcon';
import UpworkIcon from './icons/social/UpworkIcon';
import PeoplePerHourIcon from './icons/social/PeoplePerHourIcon';
import FreelancerIcon from './icons/social/FreelancerIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import ChevronUpIcon from './icons/ChevronUpIcon';

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Siam-449', icon: GithubIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/azizul-hakim-siam-29533a348/', icon: LinkedinIcon },
    { name: 'X', href: 'https://x.com/Siam46884', icon: XIcon },
    { name: 'Facebook', href: 'https://www.facebook.com/siam.siam.46', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/i_am__siam_', icon: InstagramIcon },
    { name: 'Threads', href: 'https://www.threads.com/@i_am__siam_', icon: ThreadsIcon },
    { name: 'Fiverr', href: 'https://www.fiverr.com/frontendbysiam?public_mode=true', icon: FiverrIcon },
    { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~01bc7c05df2e30ab2c?mp_source=share', icon: UpworkIcon },
    { name: 'PeoplePerHour', href: 'https://www.peopleperhour.com/freelancer/technology-programming/azizul_hakim-siam-front-end-web-developer-react-next-zyjzvnma', icon: PeoplePerHourIcon },
    { name: 'Freelancer', href: 'https://www.freelancer.com/u/Frontendbysiam', icon: FreelancerIcon },
];

const SocialLink = ({ name, href, icon: Icon }) => (
    <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 bg-slate-100/50 dark:bg-navy-medium/30 rounded-lg border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-mint-green/50 transition-colors duration-300"
    >
        <Icon className="w-6 h-6 text-slate-500 dark:text-slate" />
        <span className="font-semibold text-slate-700 dark:text-light-slate">{name}</span>
    </a>
);

const FollowMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const initialLinks = socialLinks.slice(0, 4);
    const additionalLinks = socialLinks.slice(4);

    return (
        <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Follow Me</h2>
            <div className="grid grid-cols-2 gap-4">
                {initialLinks.map(link => <SocialLink key={link.name} {...link} />)}
            </div>
            
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key="additional-links"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            {additionalLinks.map(link => <SocialLink key={link.name} {...link} />)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="mt-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-center gap-2 p-3 text-sm font-semibold text-slate-600 dark:text-slate bg-slate-100/50 dark:bg-navy-medium/30 rounded-lg border border-slate-200 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-mint-green/50 hover:text-teal-600 dark:hover:text-mint-green transition-all duration-300"
                    aria-expanded={isExpanded}
                >
                    <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                    {isExpanded ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                </button>
            </div>
        </div>
    );
};

export default FollowMe;