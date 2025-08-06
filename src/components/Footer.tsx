import React from 'react';
import { Instagram, Facebook, MessageCircle, Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Acne Treatment',
    'Anti-Aging Solutions',
    'Botox & Fillers',
    'Laser Hair Removal',
    'Chemical Peels',
    'HydraFacial'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">Skin Studio</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              "The Science of Skin, The Art of Beauty" - Transform your skin with 
              Dr. A. Kathyayani's expert care in Visakhapatnam.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/skinstudio.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-pink-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-pink-300 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-pink-300">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-pink-300 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-pink-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Beach Road, MVP Colony<br />
                  Visakhapatnam, AP 530017
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-pink-300 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="mailto:info@skinstudio.com" className="text-gray-300 hover:text-pink-300 transition-colors text-sm">
                  info@skinstudio.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-gray-300">
                <strong className="text-pink-300">Office Hours:</strong><br />
                Mon-Fri: 9:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Instagram Preview Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-6 text-pink-300 text-center">Follow Our Journey</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={`https://images.pexels.com/photos/${5069430 + index}/pexels-photo-${5069430 + index}.jpeg?auto=compress&cs=tinysrgb&w=200`}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Skin Studio by Dr. A. Kathyayani. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-pink-500 fill-current" />
            <span>for beautiful skin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;