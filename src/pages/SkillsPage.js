import React from 'react';
import Navigation from '../components/Navigation';
import SkillsFullContent from '../components/SkillsFullContent';
import Footer from '../components/Footer';

const SkillsPage = () => {
    return (
        <>
            <Navigation />
            <SkillsFullContent />
            <div className="footer-spacing">&nbsp;</div>
            <Footer />
        </>
    )
}

export default SkillsPage;
