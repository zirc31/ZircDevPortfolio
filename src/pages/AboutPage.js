import React from 'react';
import Navigation from '../components/Navigation';
import AboutFullContent from '../components/AboutFullContent';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
        <Navigation />
        <AboutFullContent />
        <div className="footer-spacing">&nbsp;</div>
        <Footer />
    </>
  )
}

export default AboutPage;
