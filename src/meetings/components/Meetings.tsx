
import { Clock } from 'lucide-react';
import img from "../img/fondo.png"
const Meetings: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestras Reuniones</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <Clock className="mr-2" />
            <p className="text-lg md:text-xl">Miércoles 20:00 hs</p>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2" />
            <p className="text-lg md:text-xl">Domingos 10:00 hs y 20:00 hs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;