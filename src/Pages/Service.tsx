import { FaShoppingCart, FaMobileAlt, FaLaptopCode, FaSearch } from 'react-icons/fa';
import LayoutContainer from "../layout/LayoutContainer";

const services = [
  {
    title: 'eCommerce Platform',
    description1: 'Template Development',
    description2: 'New Deployment',
    description3: 'Maintenance',
    icon: <FaShoppingCart className="w-12 h-12 text-blue-600" />,
  },
  {
    title: 'Mobile Applications',
    description1: "Intuitive Design & Interface",
    description2: 'Superior User Experience',
    description3: 'Maintenance',
    icon: <FaMobileAlt className="w-12 h-12 text-green-600" />,
  },
  {
    title: 'Web Applications',
    description1: 'Website Designing & Development',
    description2: 'New Deployment',
    description3: 'Maintenance',
    icon: <FaLaptopCode className="w-12 h-12 text-purple-600" />,
  },
  {
    title: 'SEO & Digital Marketing',
    description1: 'Search Engine Optimization',
    description2: 'Social Media Marketing',
    description3: 'Content Marketing',
    icon: <FaSearch className="w-12 h-12 text-orange-600" />,
  }
];

const Service = () => {
  return (
    <section className="bg-white pt-10">
      <LayoutContainer>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6 p-4 bg-blue-50 rounded-full inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description1}</p>
              <p className="text-gray-600 text-sm">{service.description2}</p>
              <p className="text-gray-600 text-sm">{service.description3}</p>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Service;