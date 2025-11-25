import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Element name="home" className="section">
        <Home />
      </Element>
      
      <Element name="about" className="section">
        <About />
      </Element>
      
      <Element name="services" className="section">
        <Service />
      </Element>
      
      <Element name="contact" className="section">
        <Contact />
      </Element>
      <Footer/>
    </div>
  );
}

export default App;