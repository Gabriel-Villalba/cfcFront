import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarker, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <footer className="bg-black text-white py-8"
>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 md:text-lg text-sm">CFC Rafaela</h3>
            <p className="md:text-base text-xs">Una iglesia para toda la familia</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 md:text-lg text-sm">Contáctanos</h4>
            <p>
              <a href="mailto:cfcoficinarafaela@gmail.com" className="hover:text-blue-400">
                <FaEnvelope className="inline-block" size={30} />
              </a>
            </p>
            <p>
              {isMobile ? (
                <a href="https://wa.me/3492704952" target="_blank" className="hover:text-green-500">
                  <FaWhatsapp className="inline-block" size={30} />
                </a>
              ) : (
                <a href="https://web.whatsapp.com/send?phone=3492704952" target="_blank" className="hover:text-green-500">
                  <FaWhatsapp className="inline-block" size={30} />
                </a>
              )}
            </p>
            <p><FaMapMarker className="inline-block" size={30} /> Av. Williner 350, Rafaela</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2 md:text-lg text-sm">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-400"><FaFacebook size={30} /></a>
              <a href="https://www.instagram.com/cfcrafaela/?hl=es" target="_blank" className="hover:text-pink-400"><FaInstagram size={30} /></a>
              <a href="https://www.youtube.com/results?search_query=cfc+rafaela" target="_blank" className="hover:text-red-600"><FaYoutube size={30} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 CFC Rafaela. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
