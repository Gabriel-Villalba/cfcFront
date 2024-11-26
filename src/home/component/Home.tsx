import image from "../../common/PLACA DE BIENVENIDA.png";
const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CFC Rafaela</h1>
        <p className="text-xl md:text-2xl lg:text-3xl">Una iglesia para toda la familia</p>
      </div>
    </div>
  );
};

export default Home;
