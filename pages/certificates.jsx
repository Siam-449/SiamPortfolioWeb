import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Certificates from '../components/Certificates';
import CallToAction from '../components/CallToAction';
import CertificatesList from '../components/CertificatesList';
import LearningCommitment from '../components/LearningCommitment';

const CertificatesPage = () => {
    const faviconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="20" fill="#0d1224"></rect>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="60" font-family="monospace" fill="#64ffda" font-weight="bold">S</text>
    </svg>
  `;

  return (
    <>
      <Head>
        <title>SIAM - Certificates</title>
        <meta name="description" content="Certificates and achievements of SIAM, a Frontend Web Developer and UI/UX Designer." />
        <link 
          rel="icon" 
          href={`data:image/svg+xml,${encodeURIComponent(faviconSvg)}`}
        />
      </Head>
      <div className="bg-white dark:bg-navy-dark min-h-screen font-sans text-slate-800 dark:text-light-slate flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Certificates />
          <CertificatesList />
          <LearningCommitment />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificatesPage;