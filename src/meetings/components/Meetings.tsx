
import { Clock } from 'lucide-react';

const Meetings: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
            <p className="text-lg md:text-xl">Domingo 10:00 hs</p>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2" />
            <p className="text-lg md:text-xl">Domingo 20:00 hs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;