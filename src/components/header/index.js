import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className="header-flex">
            <div className="links-div">
                <Link to="/" className="link-item">Início</Link>
                <Link className="link-item">Sobre</Link>
                <Link className="link-item">Formação</Link>
                <Link className="link-item">Competências</Link>
                <Link className="link-item">Projetos</Link>
            </div>
        </div>
    );
}

export default HeaderComponent;
