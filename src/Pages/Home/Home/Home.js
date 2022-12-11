import React from 'react';
import AboutME from '../AboutME/AboutME';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <Skills></Skills>
            <AboutME></AboutME>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;