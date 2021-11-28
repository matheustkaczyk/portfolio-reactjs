import React from 'react';
import react from '../../images/react.png';
import html from '../../images/html.png';
import css from '../../images/css-3.png';
import js from '../../images/js.png';
import redux from '../../images/redu.png';

const Skills = () => {
    return (
        <div id="competencias" className="skills-session">
            <div className="skills-section">
                <h2 className="skills-hero-text">Como posso ajudar?</h2>
                <div className="skills-images">
                    <div className="skills-front">
                        <img className="skills-item" src={ react } alt="react-icon"/>
                        <img className="skills-item" src={ html } alt="html-icon"/>
                        <img className="skills-item" src={ css } alt="css-icon"/>
                        <img className="skills-item" src={ js } alt="js-icon"/>
                        <img className="skills-item" src={ redux } alt="redux-icon"/>
                    </div>
                    <div className="skills=back">
                        <img className="skills-item" alt="node-icon"/>
                        <img className="skills-item" alt="express-icon"/>
                        <img className="skills-item" alt="mysql-icon"/>
                        <img className="skills-item" alt="mongodb-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
