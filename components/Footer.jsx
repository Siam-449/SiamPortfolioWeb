import React from 'react';
import Link from 'next/link';
import GithubIcon from './icons/social/GithubIcon';
import LinkedinIcon from './icons/social/LinkedinIcon';
import XIcon from './icons/social/XIcon';
import MailIcon from './icons/MailIcon';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Siam-449', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/azizul-hakim-siam-29533a348/', icon: LinkedinIcon },
  { name: 'X', href: 'https://x.com/Siam46884', icon: XIcon },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-navy-dark text-slate-600 dark:text-slate">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-teal-600 dark:text-mint-green font-mono mb-2">
              <Link href="/">AZIZUL HAKIM SIAM</Link>
            </h3>
            <p className="max-w-md mb-2">
              Crafting beautiful user interfaces with modern web technologies
            </p>
            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-teal-600 dark:hover:text-mint-green transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
                <li>
                  <Link href="/certificates" className="hover:text-teal-600 dark:hover:text-mint-green transition-colors duration-300">
                    Certificates
                  </Link>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:azizulhakimsiam986@gmail.com" className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-mint-green transition-colors duration-300">
                  <MailIcon className="w-5 h-5" />
                  <span className="truncate">azizulhakimsiam986@gmail.com</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="hover:text-teal-600 dark:hover:text-mint-green transition-colors duration-300"
                    >
                      <link.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p className="font-mono text-center">
            &copy; {new Date().getFullYear()} AZIZUL HAKIM SIAM. All rights reserved.
          </p>
          <p className="text-center">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
