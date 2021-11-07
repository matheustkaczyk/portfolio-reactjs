import React from 'react';
import HeaderComponent from '../../components/header';
import Main from '../../components/main';
import About from '../../components/about';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import '../../app.css';

const MainPage = () => {
    return (
        <div>
            <HeaderComponent />
            <Main />
            <About />
            <Skills />
            <Contact />
        </div>
    )
}

export default MainPage;
