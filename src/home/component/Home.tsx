import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageDesktop from "../img/PAGINA_WAB_DESKTOP.png";
import imageMobile from "../img/PAGINA_WEB_MOBILE.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Botón presionado");
    navigate('/reuniones');
  };

  return (
    <div className="relative min-h-screen flex-grow flex items-center justify-center"  style={{
      height: '60vh', width:'100vw'
       }}>
      {/* Imagen para Desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imageDesktop})`,
        }}
      ></div>
      {/* Imagen para Móvil */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${imageMobile})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CFC Rafaela</h1>
        <p className="text-xl md:text-2xl lg:text-3xl">Una iglesia para toda la familia</p> */}
      </div>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-10 left-2 bg-blue-600 text-white p-4 rounded shadow hover:text-blue-200 max-w-md"
      >
        Reserva tu lugar
      </button>
    </div>
  );
};

export default Home;


