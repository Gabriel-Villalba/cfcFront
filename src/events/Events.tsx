import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fondoNavidad from "./img/fondoNavidad.png";

const Events: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página a la parte superior al cargar el componente
  }, []);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoNavidad})`, height: '80vh', width: '100vw' }}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="container mx-auto px-4">
          <div className="instructivo text-center my-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">¡Elegí la función e inscribite!</h1>
          </div>
           <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              {/* <a href="https://forms.gle/vSF6ggLbKqtAsQ7H7" target="_blank" className="block text-center">Función Sábado 14 - 20 hs</a> */}
              <button onClick={handleButtonClick} className="block text-center w-full">Función Sábado 14 - 20 hs</button>
            </div>
          </div> 
          <br></br>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
             <a href="https://forms.gle/nqct2d7qZUisicKq8" target="_blank" className="block text-center">Función Domingo 15 - 18 hs</a>
             {/*<button onClick={handleButtonClick} className="block text-center w-full">Función Domingo 15 - 18 hs</button> */}
            </div>
          </div>
          <br></br>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
            <a href="https://forms.gle/m9RGCiGwzchmoFjE8" target="_blank" className="block text-center">Función Domingo 15 - 20 hs</a>
              {/* <button onClick={handleButtonClick} className="block text-center w-full">Función Domingo 15 - 20 hs</button> */}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 fixed inset-0"></div>
          <div 
            className="bg-cover bg-center p-8 rounded shadow-lg z-50" 
            style={{ backgroundImage: `url(${fondoNavidad})` }}
          >
            <h2 className="text-xl text-center font-bold mb-4 text-white">¡Función completa!</h2>
            <p className="text-white">¡Reserva lugar en la siguiente función!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;



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
