import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Zap, Droplets, Scissors, Paintbrush, Armchair as Hair, Star, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: "Acne & Pigmentation Treatment",
      description: "Advanced treatments for clear, even-toned skin using cutting-edge technology and personalized care.",
      features: ["Chemical peels", "Laser therapy", "Customized skincare"],
      popular: true
    },
    {
      icon: Star,
      title: "Anti-Aging Solutions",
      description: "Comprehensive anti-aging treatments to restore youthful radiance and skin vitality.",
      features: ["Wrinkle reduction", "Skin tightening", "Collagen boosting"],
      popular: false
    },
    {
      icon: Zap,
      title: "Botox & Fillers",
      description: "Expertly administered injectables for natural-looking results and enhanced facial harmony.",
      features: ["Botox injections", "Dermal fillers", "Lip enhancement"],
      popular: true
    },
    {
      icon: Scissors,
      title: "Laser Hair Removal",
      description: "Permanent hair reduction with state-of-the-art laser technology for smooth, hair-free skin.",
      features: ["All skin types", "Minimal discomfort", "Long-lasting results"],
      popular: false
    },
    {
      icon: Paintbrush,
      title: "Chemical Peels",
      description: "Professional-grade peels to reveal fresh, glowing skin by removing damaged outer layers.",
      features: ["Multiple peel types", "Customized depth", "Minimal downtime"],
      popular: false
    },
    {
      icon: Hair,
      title: "Hair Restoration",
      description: "Advanced hair restoration treatments to combat hair loss and promote healthy hair growth.",
      features: ["PRP therapy", "Hair transplant", "Scalp treatments"],
      popular: false
    },
    {
      icon: Droplets,
      title: "HydraFacial & Skin Rejuvenation",
      description: "Deep cleansing and hydrating facial treatments for instantly refreshed and glowing skin.",
      features: ["Deep hydration", "Instant glow", "No downtime"],
      popular: true
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of dermatological and aesthetic treatments, 
            each designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-pink-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="group/btn w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;