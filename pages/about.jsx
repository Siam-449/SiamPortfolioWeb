import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyStory from '../components/MyStory';
import KeyStrengths from '../components/KeyStrengths';
import Testimonials from '../components/Testimonials';
import FunFacts from '../components/FunFacts';
import { motion } from 'framer-motion';

const AboutPage = () => {
    const faviconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#0d1224"></rect>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="60" font-family="monospace" fill="#64ffda" font-weight="bold">S</text>
    </svg>
  `;

  return (
    <>
      <Head>
        <title>SIAM</title>
        <meta name="description" content="About SIAM, a Frontend Web Developer and UI/UX Designer." />
        <link 
          rel="icon" 
          href={`data:image/svg+xml,${encodeURIComponent(faviconSvg)}`}
        />
      </Head>
      <div className="bg-white dark:bg-navy-dark min-h-screen font-sans text-slate-800 dark:text-light-slate flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center py-16 lg:py-24"
          >
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white">
                About Me
              </h1>
              <p className="mt-4 text-slate-600 dark:text-slate max-w-2xl mx-auto">
                Get to know more about my journey, experience, and passion for creating innovative web solutions.
              </p>
            </div>
          </motion.section>

          <div className="container mx-auto px-4">
            <MyStory />
            <KeyStrengths />
            <Testimonials />
            <FunFacts />
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;