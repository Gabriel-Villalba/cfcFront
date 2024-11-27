import React from 'react';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fondoNavidad from "./img/fondoNavidad.png";

const Inscripciones: React.FC = () => {

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoNavidad})`, height: '70vh', width:'100vw' }}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="container mx-auto px-4">
          <div className="instructivo text-center my-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">INSCRIBITE!!!</h1>
          </div>
          <div className="funciones flex flex-col items-center gap-4 my-4">
            <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdF9Sg9MlGLbUdCQhhJciq52jdpExT1rYIsKdRzN6xOBxIfMg/viewform" target="_blank" className="block text-center">Bautismos</a>
            </div>
          </div>
        </div>
        {/* <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 md:h-64 object-cover" />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto">
                    Inscribite
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Inscripciones;
