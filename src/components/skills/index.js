import React from 'react';
import react from '../images/react.png';
import html from '../images/html.png';
import css from '../images/css-3.png';
import js from '../images/js.jpeg';
import redux from '../images/redux.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mysql from '../images/mysql.png';
import mongo from '../images/mongodb.png';

const Skills = () => {
    return (
        <div id="competencias" className="skills-session">
            <h2 className="skills-hero-text">Como posso ajudar?</h2>
            <div className="skills-section">
                <div className="skills-area">
                    <div className="skills">
                        <img className="skills-item" src={ react } alt="react-icon"/>
                        <img className="skills-item" src={ html } alt="html-icon"/>
                        <img className="skills-item" src={ css } alt="css-icon"/>
                        <img className="skills-item" src={ js } alt="js-icon"/>
                        <img className="skills-item" src={ redux } alt="redux-icon"/>
                    </div>
                
                </div>
                <div className="skills-area">
                    <div className="skills">
                        <img className="skills-item" src={ node } alt="node-icon"/>
                        <img className="skills-item" src={ express } alt="express-icon"/>
                        <img className="skills-item" src={ mysql } alt="mysql-icon"/>
                        <img className="skills-item" src={ mongo } alt="mongodb-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
