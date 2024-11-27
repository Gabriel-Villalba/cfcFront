import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../../common/cfcLogo-removebg-preview.png";
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar bg-blue-600 text-white sticky top-0 p-4 z-50 shadow-nav absolute w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2 w-10 h-10" />
          <span className="font-bold text-xl">CFC Rafaela</span>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Inicio</Link>
          <Link to="/eventos" className="hover:text-blue-200">Eventos</Link>
          {/* <Link to="/contacto" className="hover:text-blue-200">Contacto</Link> */}
          <Link to="/reuniones" className="hover:text-blue-200">Reuniones</Link>
          {/* <Link to="/ofrenda" className="hover:text-blue-200">Ofrenda</Link>
          <Link to="/quiero-gv" className="hover:text-blue-200">Quiero GV</Link>
          <Link to="/como-llegar" className="hover:text-blue-200">Cómo llegar</Link> */}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-2 mt-4">
            <Link to="/" className="hover:text-blue-200" onClick={handleLinkClick}>Inicio</Link>
            <Link to="/eventos" className="hover:text-blue-200" onClick={handleLinkClick}>Eventos</Link>
            {/* <Link to="/contacto" className="hover:text-blue-200" onClick={handleLinkClick}>Contacto</Link> */}
            <Link to="/reuniones" className="hover:text-blue-200" onClick={handleLinkClick}>Reuniones</Link>
            {/* <Link to="/ofrenda" className="hover:text-blue-200" onClick={handleLinkClick}>Ofrenda</Link>
            <Link to="/quiero-gv" className="hover:text-medium-blue" onClick={handleLinkClick}>Quiero GV</Link>
            <Link to="/como-llegar" className="hover:text-blue-200" onClick={handleLinkClick}>Cómo llegar</Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Church, Menu, X } from 'lucide-react';
// import './Navbar.css'; 
// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };
//element.scrollTop
//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => {
//   //     window.removeEventListener('scroll', handleScroll);
//   //   };
//   // }, []);

//   return (
//     <nav className={`navbar bg-blue-600 text-white p-4 ${isSticky ? 'sticky' : ''}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center">
//           <Church className="mr-2" />
//           <span className="font-bold text-xl">CFC Rafaela</span>
//         </Link>
//         <div className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:text-blue-200">Inicio</Link>
//           <Link to="/eventos" className="hover:text-blue-200">Eventos</Link>
//           <Link to="/contacto" className="hover:text-blue-200">Contacto</Link>
//           <Link to="/reuniones" className="hover:text-blue-200">Reuniones</Link>
//           <Link to="/ofrenda" className="hover:text-blue-200">Ofrenda</Link>
//           <Link to="/quiero-gv" className="hover:text-blue-200">Quiero GV</Link>
//           <Link to="/como-llegar" className="hover:text-blue-200">Cómo llegar</Link>
//         </div>
//         <button
//           className="md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col items-center space-y-2 mt-4">
//             <Link to="/" className="hover:text-blue-200">Inicio</Link>
//             <Link to="/eventos" className="hover:text-blue-200">Eventos</Link>
//             <Link to="/contacto" className="hover:text-blue-200">Contacto</Link>
//             <Link to="/reuniones" className="hover:text-blue-200">Reuniones</Link>
//             <Link to="/ofrenda" className="hover:text-blue-200">Ofrenda</Link>
//             <Link to="/quiero-gv" className="hover:text-medium-blue">Quiero GV</Link>
//             <Link to="/como-llegar" className="hover:text-blue-200">Cómo llegar</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





//*css 
