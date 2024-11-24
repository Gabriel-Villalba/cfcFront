import React from 'react';
//import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// interface Event {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
// }

// const events: Event[] = [
//   {
//     id: 1,
//     title: "ResTart",
//     image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description: "Un fin de semana lleno de diversión y crecimiento espiritual para jóvenes."
//   },
//   {
//     id: 2,
//     title: "Conferencia Matrimonios",
//     image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description: "Aprende cómo fortalecer los lazos familiares con nuestros expertos invitados."
//   },
//   {
//     id: 3,
//     title: "Noche de preas",
//     image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description: "Una noche de adoración y música con artistas cristianos reconocidos."
//   }
// ];

const Inscripciones: React.FC = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <div className="container mx-auto py-8 px-4">


    <div className="container mx-auto px-4">
      {/* <!-- <div className="titulo text-center my-4">
          <img className="w-full max-w-lg mx-auto" src="/assets/logoCfc.jpg" alt="Agotado">
      </div> --> */}
      <div className="instructivo text-center my-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">INSCRIBITE!!!</h2>
      </div>
      <div className="funciones flex flex-col items-center gap-4 my-4">
          {/* <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://forms.gle/b7koKaojcy2o6C339" target="_blank" className="block text-center">Peña de Valientes</a>
          </div>
          <div className="containerLink bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 w-full max-w-md">
              <a href="https://forms.gle/tbXyj4y4zVkieudb9" target="_blank" className="block text-center">Conferencia de matrimonios</a>
          </div> */}
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
  );
};

export default Inscripciones;