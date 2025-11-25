import LayoutContainer from "../layout/LayoutContainer";
import Herosection1 from "../assets/herosection2.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 pt-20 pb-10">
      <LayoutContainer>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={Herosection1} alt="about" className="h-60 w-full object-cover rounded-xl" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4">VISION</h3>
              <p className="mb-6">
                Thrive to enable the users of digital ecosystem an enriching and delightful experience
              </p>
              <h3 className="text-lg font-semibold mb-4">Mission</h3>
              <p className="mb-6">
                Passionately support our clients to enable the digital ecosystem with effective, efficient software solutions with utmost Integrity, innovation & excellence that must inspire to reinvent ourselves and our partners.
              </p>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default About;