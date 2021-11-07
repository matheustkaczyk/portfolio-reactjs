import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <nav className="header-flex">
            <div className="links-div">
                <a href="#inicio" className="link-item">Início</a>
                <a href="#sobre" className="link-item">Sobre</a>
                <a href="#competencias" className="link-item">Competências</a>
                <a href="#contato" className="link-item">Contato</a>
                <Link className="link-item">Projetos</Link>
            </div>
            {/* <div className="icons-header">
                <a className="icon-ref" href="https://www.linkedin.com/in/matheustkaczykribeiro">
                    <img
                        className="icon-item" 
                        src={ linkedin }
                        alt="icone linkedin"
                    />
                </a>
                <a className="icon-ref" href="https://github.com/matheustkaczyk">
                    <img
                        className="icon-item" 
                        src={ github }
                        alt="icone github"
                    />
                </a>
            </div> */}
        </nav>
    );
}

export default HeaderComponent;
