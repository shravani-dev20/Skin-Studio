import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
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

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Clinic</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Visakhapatnam, our modern clinic provides a comfortable 
            and welcoming environment for all your dermatological and aesthetic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                    Door No 1-68-21, Near Mahatma Gandhi Cancer Hospital, Opposite MVP Jewellers, MVP Colony-530017
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+07487882451" className="hover:text-pink-600 transition-colors">
                        +91 0748788 2451
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@skinstudio.com" className="hover:text-pink-600 transition-colors">
                        info@skinstudio.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm">
                  <strong>Emergency consultations:</strong> Available by appointment. 
                  Please call ahead for urgent skin concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[600px]">
              <div className="h-full">
                {/* Map placeholder - in a real application, you would use Google Maps API or similar */}
                <div className="h-full bg-gray-200 relative flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Find Us Here</h4>
                    <p className="text-gray-600 mb-4">
                      123 Beach Road, MVP Colony<br />
                      Visakhapatnam, Andhra Pradesh 530017
                    </p>
                    <a
                      href="https://maps.google.com/?q=Visakhapatnam+MVP+Colony"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors duration-300"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </section>
  );
};

export default Contact;