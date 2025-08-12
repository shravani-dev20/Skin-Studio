import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
    { day: "Monday - Sunday", hours: "10:00 AM - 10:00 PM" },
  //   { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  //   { day: "Sunday", hours: "Closed" }
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
                    Girijan Bhavan, MVP Double Rd, MVP Sector 7, Sector 5, MVP Colony, Visakhapatnam, Andhra Pradesh 530017
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
                        +91 748788 2451
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
            <div className="mapdiv h-full relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-pink-200 shadow-lg min-h-[600px]">
              { <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60803.85516342168!2d83.2945946!3d17.7332826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431d5a517929%3A0xff65b0af26ac0307!2sSkin%20Studio%20by%20Dr.Kathyayani%20-%20Best%20Skin%2C%20Hair%20%26%20Cosmetology%20Centre!5e0!3m2!1sen!2sin!4v1754472457329!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe> }
              
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;