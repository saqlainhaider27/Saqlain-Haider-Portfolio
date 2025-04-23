import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Education from './Components/Education/Education.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
            <Navbar />
            <section id="home">
                <Header />
            </section>
            <section id="education">
                <Education />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Portfolio />
            </section>
            <Footer />
        </div>
    );
};

export default App;
