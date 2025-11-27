import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import LayoutContainer from '../layout/LayoutContainer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl text-black font-bold py-10">Contact Us</h1>
        </div>
      </div>

      <LayoutContainer>
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-12 relative z-10 px-4">
          {/* Phone Card */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+91-88844 46599</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:info@agsoftsolutions.com" className="text-blue-600 hover:underline">
              info@agsoftsolutions.com
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Flat #601 Gayathiri Arcade Plot 669</p>
            <p className="text-gray-600">Gokul Plots VR colony kukatpally</p>
            <p className="text-gray-600">Hydrebad 500085</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="border p-4 rounded-full hover:bg-blue-700 hover:text-white transition-colors">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Full Width Map */}
        <div className="mt-16">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps?q=Flat%20%23601%20Gayathiri%20Arcade%20Plot%20669%2C%20Gokul%20Plots%20VR%20Colony%2C%20Kukatpally%2C%20Hyderabad%20500085&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps?q=Flat%20%23601%20Gayathiri%20Arcade%20Plot%20669%2C%20Gokul%20Plots%20VR%20Colony%2C%20Kukatpally%2C%20Hyderabad%20500085&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Our Location – Hyderabad"
            ></iframe> */}
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Contact;