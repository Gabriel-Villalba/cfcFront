import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import { LatLngExpression } from 'leaflet'

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '300px',
  maxWidth: '600px',
  margin: '0 auto'
};

const center: [number, number] = [-31.2535, -61.4867];

const HowToGet: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Cómo llegar</h2>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4 text-center">
          Nos encontramos en Avenida Williner 350, Rafaela, Santa Fe, Argentina
        </p>
        <MapContainer center={center} zoom={15} style={containerStyle}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              Aquí estamos.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default HowToGet;


// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { LatLngExpression } from 'leaflet';

// const containerStyle: React.CSSProperties = {
//   width: '100%',
//   height: '300px',
//   maxWidth: '600px',
//   margin: '0 auto'
// };

// const center: LatLngExpression = [-31.2535, -61.4867];

// const HowToGet: React.FC = () => {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Cómo llegar</h2>
//       <div className="max-w-2xl mx-auto">
//         <p className="mb-4 text-center">
//           Nos encontramos en Avenida Williner 350, Rafaela, Santa Fe, Argentina
//         </p>
//         <MapContainer center={center} zoom={15} style={containerStyle as React.CSSProperties}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={center}>
//             <Popup>
//               Aquí estamos.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default HowToGet;






// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// //import { LatLngExpression } from 'leaflet'

// const containerStyle: React.CSSProperties = {
//   width: '100%',
//   height: '300px',
//   maxWidth: '600px',
//   margin: '0 auto'
// };

// const center: [number, number] = [-31.2535, -61.4867];

// const HowToGet: React.FC = () => {
//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Cómo llegar</h2>
//       <div className="max-w-2xl mx-auto">
//         <p className="mb-4 text-center">
//           Nos encontramos en Avenida Williner 350, Rafaela, Santa Fe, Argentina
//         </p>
//         <MapContainer center={center} zoom={15} style={containerStyle}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={center}>
//             <Popup>
//               Aquí estamos.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default HowToGet;




