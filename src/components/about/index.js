import React from 'react';
import Foto from '../images/me.jpeg';

const About = () => {
    return (
        <div id="sobre" className="about-session">
            <section className="about-section">
                <p className="about-text">Tenho 23 anos e sou completamente louco por tecnologia! <br/>
                Estou há 1 ano de cabeça nos estudos e atualmente estudo desenvolvimento de software web fullstack na Trybe. <br/>
                Tenho conhecimentos avançados de Front-end mas minha paixão é sem dúvida o Back-end.
                </p>
                <img className="about-img" src={ Foto } alt="matheus tkaczyk ribeiro" />
            </section>
        </div>
    )
};

export default About;