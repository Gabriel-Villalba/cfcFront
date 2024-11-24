import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">CFC Rafaela</h3>
            <p>Una iglesia para toda la familia</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contáctanos</h4>
            <p>Avenida Williner 350, Rafaela, Santa Fe</p>
            <p>Email: cfcoficinarafaela@gmail.com</p>
            <p>Teléfono: (3492) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
              {/* <a href="https://www.instagram.com/cfcrafaela/?hl=es" className="hover:text-pink-400"><Instagram size={20} /></a> */}
              <a href="https://www.instagram.com/cfcrafaela/?hl=es" target="_blank" className="hover:text-pink-400"> <Instagram size={20} /></a>

              <a href="https://www.youtube.com/results?search_query=cfc+rafaela" target="_blank" className="hover:text-red-600"><Youtube size={20} /></a>
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