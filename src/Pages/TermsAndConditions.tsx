import { Link } from 'react-router-dom';
import LayoutContainer from '../layout/LayoutContainer';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <LayoutContainer>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Terms and Conditions</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: February 27, 2026</p>

          <div className="space-y-6 text-gray-700 leading-7">
            <p>
              These Terms and Conditions govern your access to and use of the AG Soft Solutions website and services.
              By using our site or engaging our services, you agree to these terms.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Services</h2>
              <p>
                We provide software development, consulting, and related digital services. Service scope, timelines, and
                deliverables may be defined in individual proposals, statements of work, or contracts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Client Responsibilities</h2>
              <p>
                You agree to provide accurate information, timely feedback, and required access or materials necessary for
                us to perform the services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Payments</h2>
              <p>
                Fees and payment terms are outlined in project agreements. Late payments may result in suspension of
                services until payment is received.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, ownership of deliverables transfers upon full payment. We retain
                rights to pre-existing materials, tools, and general know-how used to deliver services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Confidentiality</h2>
              <p>
                Both parties agree to keep confidential information private and to use it only for the purposes of the
                engagement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AG Soft Solutions is not liable for indirect, incidental, or
                consequential damages arising from use of our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Termination</h2>
              <p>
                Either party may terminate services according to the terms of the applicable agreement. Upon termination,
                outstanding fees for work performed remain due.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Changes to These Terms</h2>
              <p>
                We may update these Terms and Conditions periodically. Updates will be posted on this page with a revised
                effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact</h2>
              <p>
                For questions, contact us at{' '}
                <a href="mailto:info@agsoftsolutions.com" className="text-blue-600 hover:underline">
                  info@agsoftsolutions.com
                </a>
                .
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

export default TermsAndConditions;
