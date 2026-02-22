import React, { useState, useEffect } from 'react';
import './Heder.css';
import miLogo from '../../imagenes/logo.jpeg';

const Header = () => {
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 50) {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);
    }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <header className={isScrolled ? 'header glass active' : 'header'}>
    <div className="logo">
        {/* 2 esta es la VARIABLE IMPORTADA EN EL SRC */}
        <img src={miLogo} alt="Logo de la tienda" />
    </div>
    <nav>
        <ul>
        <li><a href="#inicio" className="nav-btn">Inicio</a></li>
        <li><a href="#compra" className="nav-btn btn-destacado">Compra</a></li>
        <li><a href="#favoritos" className="nav-btn">Favoritos</a></li>
        <li><a href="#contacto" className="nav-btn">Contáctanos</a></li>
        </ul>
    </nav>
    </header>
);
};

export default Header;