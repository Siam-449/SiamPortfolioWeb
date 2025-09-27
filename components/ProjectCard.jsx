import React from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import CodeIcon from './icons/CodeIcon';

const ProjectCard = ({ title, description, tags, liveDemoUrl, codeUrl, imageUrl }) => {
  return (
    <div className="group bg-slate-100 dark:bg-slate-800/50 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700/50 w-full h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-mint-green/20">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-light-slate text-sm flex-grow mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-teal-100 dark:bg-mint-green/10 text-teal-700 dark:text-mint-green text-xs font-mono px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm border border-teal-600 dark:border-mint-green text-teal-600 dark:text-mint-green rounded-md hover:bg-teal-600/10 dark:hover:bg-mint-green/10 transition-colors duration-300">
            <ExternalLinkIcon className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm border border-slate-400 dark:border-slate text-slate-600 dark:text-slate rounded-md hover:bg-slate-400/10 dark:hover:bg-slate/10 transition-colors duration-300">
            <CodeIcon className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;