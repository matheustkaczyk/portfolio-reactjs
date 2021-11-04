import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <>
            <div className="links-div">
                <Link to="/" className="link-item">Início</Link>
                <Link className="link-item">Sobre</Link>
                <Link className="link-item">Formação</Link>
                <Link className="link-item">Competências</Link>
                <Link className="link-item">Projetos</Link>
            </div>
            <div className="hero-div" >
                <div className="info-div">
                    <h1 className="hero-title"> Matheus Tkaczyk Ribeiro </h1>
                    <h2 className="hero-subtitle">Desenvolvedor Web Jr.</h2>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;
