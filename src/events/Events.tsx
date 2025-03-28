import React, { useEffect, useState } from 'react';
import fondoEventosCel from './img/fondoEventosCel.png';
import megaRestartCel from './img/placa megarestartCel.png';
import bautismosCel from './img/PAGINABautismoCel.png';
/*import vigiliaCel from './img/placa VigiliaCel.png';*/
import EscVidaCel from './img/placaEvCel.png';
//import nocheRestartCel from './img/nocheRestartCel.png';

import fondoEventosDesktop from './img/fondoEventosCel.png';
import megaRestartDesktop from './img/placa megarestartPc.png';
import bautismosDesktop from './img/PLACASBautismoPc 25 (1).png';
/*import vigiliaDesktop from './img/placaVigiliaPc.png';*/
import EscVidaDesktop from './img/placaEvPc.png';
//import nocheRestartDesktop from './img/nocheRestartPc.png';

const images = [
  {
    mobile: megaRestartCel,
    desktop: megaRestartDesktop,
    alt: 'Mega Restart',
    link: 'https://forms.gle/7BF2kyNSh9pj7pVa9',
    linkText: '¡Quiero ser parte!',
  },
  {
    mobile: bautismosCel,
    desktop: bautismosDesktop,
    alt: 'Bautismos',
    link: 'https://forms.gle/u2rr8nTpmfTqBGrR7',
    linkText: '¡Quiero ser parte!',
  },
  /*{
    mobile: vigiliaCel,
    desktop: vigiliaDesktop,
    alt: 'Vigilia',
    link: 'https://forms.gle/i16FgDt16uUQZ9q88',
    linkText: '¡Quiero ser parte!',
  },*/
  {
    mobile: EscVidaCel,
    desktop: EscVidaDesktop,
    alt: 'Escuela de Vida',
    link: 'https://forms.gle/EZFkgWwqT2DPFV487',
    linkText: '¡Quiero ser parte!',
  },
  // {
  //   mobile: nocheRestartCel,
  //   desktop: nocheRestartDesktop,
  //   alt: 'Noche Restart',
  //   link: 'https://forms.gle/opSehbbUjjgPdibP8',
  //   linkText: '¡Quiero ser parte!',
  // },
];

const Inscripciones: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      handleNext();
    } else if (endX - startX > 50) {
      handlePrev();
    }
  };

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${isMobile ? fondoEventosCel : fondoEventosDesktop})`, height: '80vh', width: '100vw' }}
    >
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-center text-4xl font-bold text-white mb-8">Actividades CFC</h1>
       
        <div
          className="carousel-container"
          style={{
            overflow: 'hidden',
            height: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto', // Centra horizontalmente el contenedor del carrusel
            maxWidth: '100%', // Limita el ancho máximo del contenedor
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                display: index === currentIndex ? 'block' : 'none',
                transition: 'transform 0.5s ease',
                position: 'relative',
                textAlign: 'center', // Centra las imágenes horizontalmente
                width: '100%',
              }}
            >
              <img src={isMobile ? image.mobile : image.desktop} alt={image.alt} className="carousel-image" style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain' }} />
              <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 mb-4 mx-auto" style={{ width: '80%' }}>
                <a href={image.link} className="block text-center w-full">{image.linkText}</a>
              </div>
            </div>
          ))}
          <button onClick={handlePrev} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}>❮</button>
          <button onClick={handleNext} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}>❯</button>
        </div>
      </div>
    </div>
  );
};

export default Inscripciones;














// import React, { useEffect } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import fondoNavidad from "./img/fondoNavidad.png";

// const Events: React.FC = () => {

//   useEffect(() => {
//     window.scrollTo(0,0); // Desplaza la página a la parte superior al cargar el componente
//   }, []);

//   return (
//     <div
//       className="relative bg-cover bg-center"
//       style={{ backgroundImage: `url(${fondoNavidad})`, height: '80vh', width: '100vw' }}
//     >
//       <div className="container mx-auto py-8 px-4">
//         <div className="container mx-auto px-4">
//           <div className="instructivo text-center my-4">
//             <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">¡Elegí la función e inscribite!</h1>
//           </div>
//           <div className="funciones flex flex-col items-center gap-4 my-4">
//             <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
//               <a href="https://forms.gle/vSF6ggLbKqtAsQ7H7" target="_blank" className="block text-center">Función Sábado 14 - 20 hs</a>
//             </div>
//           </div>
//           <br></br>
//           <div className="funciones flex flex-col items-center gap-4 my-4">
//             <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
//               <a href="https://forms.gle/nqct2d7qZUisicKq8" target="_blank" className="block text-center">Función Domingo 15 - 18 hs</a>
//             </div>
//           </div>
//           <br></br>
//           <div className="funciones flex flex-col items-center gap-4 my-4">
//             <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
//               <a href="https://forms.gle/m9RGCiGwzchmoFjE8" target="_blank" className="block text-center">Función Domingo 15 - 20 hs</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;
