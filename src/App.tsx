
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navBar/components/Navbar';
import Home from './home/component/Home';
import Events from './events/Events';
//import Contact from './chatBots/component/Contact';
import Meetings from './meetings/components/Meetings';
//import Offering from './offering/components/Offering';
//import HowToGet from './components/HowToGet';
//import LifeGroup from './lifeGroup/components/LifeGroup';
import Footer from './footer/component/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Events />} />
            {/* <Route path="/contacto" element={<Contact />} /> */}
            <Route path="/reuniones" element={<Meetings />} />
            {/* <Route path="/ofrenda" element={<Offering />} />
            <Route path="/quiero-gv" element={<LifeGroup />} /> */}
            {/* <Route path="/como-llegar" element={<HowToGet />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;