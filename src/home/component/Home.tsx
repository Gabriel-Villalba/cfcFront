import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imageDesktop from "../img/fondoDesktop.png";
import imageMobile from "../img/fondoMobil.jpeg";

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 80); // Desplaza la página a la parte superior al cargar el componente
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/eventos');
  };

  return (
    <div className="relative flex-grow flex items-center justify-center mt-0" style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageDesktop})`, width: '100%', height: '100%', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      ></div>
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imageMobile})`, width: '100%', height: '100%', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      ></div>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-10 left-2 bg-blue-600 text-white p-4 rounded shadow hover:text-blue-200 max-w-md"
        style={{
          backgroundColor: '#2563EB', // bg-blue-600
          opacity: '1',               // full opacity
          color: 'white',             // text-white
          padding: '1rem',            // p-4
          borderRadius: '0.45rem',    // rounded
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)', // shadow
          width: '95%',               // w-full
          maxWidth: '28rem',          // max-w-md
          transition: 'background-color 0.3s ease', 
          fontSize: '1.25rem',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E40AF'}  // hover:bg-blue-700
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}  // reset on mouse leave
      >
        Reserva tu lugar
      </button>
    </div>
  );
};

export default Home;
