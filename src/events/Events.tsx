import React from 'react';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fondoNavidad from "./img/fondoNavidad.png";

const Inscripciones: React.FC = () => {

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoNavidad})`, height: '80vh', width:'100vw' }}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="container mx-auto px-4">
          <div className="instructivo text-center my-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">¡Elegi la función e inscribite!</h1>
          </div>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://forms.gle/vSF6ggLbKqtAsQ7H7" target="_blank" className="block text-center">Función Sábado 14 - 20 hs</a>
            </div>
          </div>
          <br></br>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://forms.gle/nqct2d7qZUisicKq8" target="_blank" className="block text-center">Función Domingo 15 - 18 hs</a>
            </div>
          </div>
          <br></br>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://forms.gle/m9RGCiGwzchmoFjE8" target="_blank" className="block text-center">Función Domingo 15 - 20 hs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscripciones;
