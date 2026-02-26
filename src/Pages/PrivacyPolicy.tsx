import { Link } from 'react-router-dom';
import LayoutContainer from '../layout/LayoutContainer';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <LayoutContainer>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: February 26, 2026</p>

          <div className="space-y-6 text-gray-700 leading-7">
            <p>
              AG Soft Solutions respects your privacy and is committed to protecting any personal information you share with us.
              This policy explains what we collect, why we collect it, and how we use and protect it.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Information We Collect</h2>
              <p>
                We may collect information such as your name, email address, phone number, company details, and any message
                you submit through our contact forms or communication channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How We Use Information</h2>
              <p>
                We use collected information to respond to inquiries, provide requested services, improve user experience,
                and maintain secure and reliable operations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Sharing</h2>
              <p>
                We do not sell personal information. We may share data only with trusted service providers supporting our
                operations, or when required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Data Security</h2>
              <p>
                We implement reasonable administrative and technical safeguards to protect your information against
                unauthorized access, misuse, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your personal information at any time. Please contact us
                at <a href="mailto:info@agsoftsolutions.com" className="text-blue-600 hover:underline">info@agsoftsolutions.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised
                effective date.
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

export default PrivacyPolicy;
