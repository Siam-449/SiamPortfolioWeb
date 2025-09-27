import React from 'react';

const Availability = () => {
    return (
        <div>
            <div className="p-6 bg-slate-100/50 dark:bg-navy-medium/30 rounded-lg border border-slate-200 dark:border-slate-700/50">
                <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 rounded-full mb-4">
                    Availability
                </div>
                <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="font-semibold text-green-600 dark:text-green-400">Available for new projects</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate">
                    I typically respond to messages within 24 hours. For urgent matters, please mention it in your subject line.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 text-sm text-slate-500 dark:text-slate space-y-1">
                    <p><span className="font-semibold text-slate-600 dark:text-light-slate">Response Time:</span> Within 24 hours</p>
                    <p><span className="font-semibold text-slate-600 dark:text-light-slate">Timezone:</span> GMT+6 (Dhaka)</p>
                </div>
            </div>
        </div>
    );
};

export default Availability;