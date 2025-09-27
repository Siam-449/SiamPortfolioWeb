import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SendIcon from './icons/SendIcon';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending...' });
        
        const googleFormData = new FormData();
        googleFormData.append('entry.1735126295', formData.name);
        googleFormData.append('entry.1821592978', formData.email);
        googleFormData.append('entry.306274844', formData.subject);
        googleFormData.append('entry.756112659', formData.message);

        const googleFormActionUrl = "https://docs.google.com/forms/d/1c9K2ZZZ5ednaPj3rQRaeNvi8-rz1uXh4V_9YMzQz5Hc/formResponse";

        try {
            await fetch(googleFormActionUrl, {
                method: 'POST',
                body: googleFormData,
                mode: 'no-cors'
            });

            setStatus({ type: 'success', message: 'Message sent successfully! Thank you.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });

            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-slate-100/80 dark:bg-navy-medium/50 p-8 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700/50 h-full"
        >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-light-slate mb-2">Name</label>
                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white dark:bg-navy-dark border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-mint-green focus:border-teal-500 dark:focus:border-mint-green outline-none transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-light-slate mb-2">Email</label>
                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white dark:bg-navy-dark border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-mint-green focus:border-teal-500 dark:focus:border-mint-green outline-none transition-all"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-light-slate mb-2">Subject</label>
                    <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white dark:bg-navy-dark border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-mint-green focus:border-teal-500 dark:focus:border-mint-green outline-none transition-all"
                        placeholder="What's this about?"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-light-slate mb-2">Message</label>
                    <textarea name="message" id="message" required rows="5" value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-white dark:bg-navy-dark border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-teal-500 dark:focus:ring-mint-green focus:border-teal-500 dark:focus:border-mint-green outline-none transition-all resize-vertical"
                        placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                </div>
                <div>
                    <button type="submit" disabled={status.type === 'loading'}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 dark:bg-mint-green text-white dark:text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status.type === 'loading' ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white dark:border-navy-dark border-t-transparent rounded-full animate-spin"></span>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <SendIcon className="w-5 h-5" />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                    <div className="text-sm mt-4 text-center h-5">
                        {status.type === 'success' && <p className="text-green-600 dark:text-green-400">{status.message}</p>}
                        {status.type === 'error' && <p className="text-red-600 dark:text-red-400">{status.message}</p>}
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;