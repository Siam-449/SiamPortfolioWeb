import Head from 'next/head';
import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import ProfessionalSkills from '../components/ProfessionalSkills.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
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
        <meta name="description" content="Portfolio of SIAM, a Frontend Web Developer and UI/UX Designer." />
        <link 
          rel="icon" 
          href={`data:image/svg+xml,${encodeURIComponent(faviconSvg)}`}
        />
      </Head>
      <div className="bg-white dark:bg-navy-dark min-h-screen font-sans text-slate-800 dark:text-light-slate flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <div className="container mx-auto px-4">
            <Banner />
            <ProfessionalSkills />
            <FeaturedProjects />
          </div>
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
}