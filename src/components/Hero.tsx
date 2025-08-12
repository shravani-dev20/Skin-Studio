import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const taglines = [
    "The Science of Skin",
    "The Art of Beauty",
    "Your Skin's Best Friend"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/skin2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-light italic">
            "{taglines[currentText]}"
          </h2>
        </div>

        {/* Arrow + Button */}
        <div className="flex items-center justify-center space-x-6 mt-80">
          {/* Arrow Circle */}
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">→</span>
          </div>

          {/* Book Button */}
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-pink-100 transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
