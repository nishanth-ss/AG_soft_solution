import { useEffect, useState } from 'react';
import LayoutContainer from "../layout/LayoutContainer";
import Herosection1 from "../assets/herosection1.jpg"
import Herosection2 from "../assets/herosection2.jpg"
import Herosection3 from "../assets/herosection3.jpg"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const data = [
        {
            image: Herosection1,
            title: "Welcome to AG Soft Solutions",
            description: "A leading Start-up Company into Software Consulting & Services"
        },
        {
            image: Herosection2,
            title: `We "Believe" & "Committed" to`,
            description: "Quality, Customer's satisfaction, Value generation & Employee engagement"
        },
        {
            image: Herosection3,
            title: "Passionately deliver the best!",
            description: "Continuous Improvement & Focused attention to address our clients' needs are our key business drivers"
        },
    ];

    // Auto-advance slides
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, 2000);

        return () => clearInterval(timer);
    }, [isPaused, data.length]);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top coordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    };

    // Get the current slide data
    const current = data[currentSlide];

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-1000"
            style={{
                backgroundImage: `url(${current.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <LayoutContainer>
                <div className="relative z-10 text-center px-4 py-20 text-white">
                    <div className="mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
                            {data[currentSlide].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto animate-fadeIn">
                            {data[currentSlide].description}
                        </p>
                    </div>

                    {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
                        >
                            Our Services
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
                        >
                            Contact Us
                        </Link>
                    </div> */}
                </div>
            </LayoutContainer>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/10 text-xl min-w-12 min-h-12 text-white rounded-full z-20 hover:bg-black/30 transition-all flex items-center justify-center"
                aria-label="Previous slide"
            >
                <FaChevronLeft className="w-5 h-5" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-black/10 text-white min-w-12 min-h-12 rounded-full z-20 hover:bg-black/30 transition-all flex items-center justify-center"
                aria-label="Next slide"
            >
                <FaChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Back to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
                    aria-label="Back to top"
                >
                    <FaChevronUp className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default Home;