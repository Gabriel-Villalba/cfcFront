import React from 'react';
import imageDesktop from "../img/PLACA DE BIENVENIDA.png";
import imageMobil from "../img/PLACA DE BIENVENIDA.png";
import '../../public/fonts/fonts.css';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Imagen de escritorio */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hidden md:block"
        style={{
          backgroundImage: `url(${imageDesktop})`,
        }}
      ></div>
      {/* Imagen para móviles */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
        style={{
          backgroundImage: `url(${imageMobil})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 nunito">
          CFC Rafaela
        </h1>
        <p className="text-xl md:text-2xl font-bold lg:text-3xl nunito">
          Una iglesia para toda la familia
        </p>
      </div>
    </div>
  );
};

export default Home;
