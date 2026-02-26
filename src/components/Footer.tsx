import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-5 mt-5 bg-gray-300">
      <div className="px-4">
        <h6 className="text-center text-gray-600">
          Copyright @{year}. All rights reserved | Powered By AG Soft Solutions
        </h6>
        <div className="mt-2 flex justify-center gap-6 text-sm">
          <Link to="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/data-deletion" className="text-gray-700 hover:text-blue-600 transition-colors">
            Data Deletion
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
