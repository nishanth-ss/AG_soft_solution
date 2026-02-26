import { Link } from 'react-router-dom';
import LayoutContainer from '../layout/LayoutContainer';
import Footer from '../components/Footer';

const DataDeletion = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <LayoutContainer>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Data Deletion</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: February 26, 2026</p>

          <div className="space-y-6 text-gray-700 leading-7">
            <p>
              If you would like AG Soft Solutions to delete your personal data, you can submit a request using the process
              below. We will verify your request and process it within a reasonable timeframe.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How to Request Deletion</h2>
              <p>
                Send an email to <a href="mailto:info@agsoftsolutions.com" className="text-blue-600 hover:underline">info@agsoftsolutions.com</a>
                {' '}with the subject line <span className="font-medium">Data Deletion Request</span>. Include details that help us identify your
                records, such as your name, email, and contact number.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Verification</h2>
              <p>
                To protect your privacy, we may ask you to verify your identity before deleting data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Delete</h2>
              <p>
                On successful verification, we will remove personal data associated with your request from our active systems,
                unless retention is required for legal, security, or compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Confirmation</h2>
              <p>
                After completion, we will send a confirmation email to the same contact used to submit the request.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link to="/" className="text-blue-600 hover:underline font-medium">Back to Home</Link>
          </div>
        </div>
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default DataDeletion;
