import { Element } from 'react-scroll';
import Navbar from '../components/Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
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

      <Footer />
    </div>
  );
};

export default LandingPage;
