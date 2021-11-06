import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className="header-flex">
            <div className="links-div">
                <a href="#inicio" className="link-item">Início</a>
                <a href="#sobre" className="link-item">Sobre</a>
                <a href="formacao" className="link-item">Formação</a>
                <a href="competencias" className="link-item">Competências</a>
                <a href="contato" className="link-item">Contato</a>
                <Link className="link-item">Projetos</Link>
            </div>
            {/* <div className="icons-header">
                <a className="icon-ref" href="https://www.linkedin.com/in/matheustkaczykribeiro">
                    <img
                        className="icon-item" 
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                        alt="icone linkedin"
                    />
                </a>
                <a className="icon-ref" href="https://github.com/matheustkaczyk">
                    <img
                        className="icon-item" 
                        src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175377.png?token=exp=1636212231~hmac=3f69d4ab3097b7767ca8c85ea988af48"
                        alt="icone github"
                    />
                </a>
            </div> */}
        </div>
    );
}

export default HeaderComponent;
