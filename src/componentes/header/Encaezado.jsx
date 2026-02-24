import React, { useState, useEffect } from 'react';
import './Encaezado.css';

// Importa tus imágenes
import img1 from '../../assets/imagenes/chicasola.jpeg';
import img2 from '../../assets/imagenes/chicaacompanada.jpeg'; 

const Main = () => {
const slides = [
    {
    id: 1,
    image: img1,
    title: "Tu esencia mecerece un autfit a la altura",
    description: "Descubre lo nuevo de Laupa",
    buttonText: "Saber más"
    },
    {
    id: 2,
    image: img2,
    title: "Lo quieres, lo encargamos, lo estrenas",
    description: "Laupa trae tu outfit favorito, aseguralo con la mitad del precio",
    buttonText: "Apartalo ahora"
    }
];

const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica para que pase solo cada 5 segundos
useEffect(() => {
    const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval); // Limpieza para evitar errores de memoria
}, [slides.length]);

const { image, title, description, buttonText } = slides[currentIndex];

return (
    <main className="carousel-container">
    <div className="slide" style={{ backgroundImage: `url(${image})` }}>
        <div className="slide-content">
        <h1>{title}</h1>
        <p>{description}</p>
        {buttonText === "Apartalo ahora" ? (
          <a
            href="https://wa.me/+584247599299"
            target="_blank"
            rel="noopener noreferrer"
            className="slide-btn"
          >
            {buttonText}
          </a>
        ) : (
          <button className="slide-btn">{buttonText}</button>
        )}
        </div>
    </div>
    </main>
    );
};

export default Main;