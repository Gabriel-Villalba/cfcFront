
const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("https://static.wixstatic.com/media/e77a33_d8ce2ed7ddbb4d22920bb90f1dd83f7b~mv2.jpg/v1/fill/w_960,h_640,al_c,q_85,enc_auto/e77a33_d8ce2ed7ddbb4d22920bb90f1dd83f7b~mv2.jpg")`,
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
