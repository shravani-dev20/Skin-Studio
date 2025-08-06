import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

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
    "Acne & Pigmentation Treatment",
    "Anti-Aging Solutions",
    "Botox & Fillers",
    "Laser Hair Removal",
    "Chemical Peels",
    "Hair Restoration",
    "HydraFacial & Skin Rejuvenation"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="booking" ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to begin your skin transformation journey? Schedule a personalized consultation 
            with Dr. Kathyayani to discuss your goals and create a customized treatment plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 mr-2 text-pink-500" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 mr-2 text-pink-500" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2 text-pink-500" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 mr-2 text-pink-500" />
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 mr-2 text-pink-500" />
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 mr-2 text-pink-500" />
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your skin concerns or any specific questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-pink-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Book Consultation
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for choosing Skin Studio. We'll contact you within 24 hours to confirm your appointment.
                  </p>
                  <div className="text-sm text-gray-500">
                    Check your email for booking confirmation details.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Info */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Skin Studio?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Personalized treatment plans tailored to your unique skin needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                    <span>State-of-the-art equipment and latest aesthetic technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Internationally trained dermatologist with proven expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Comfortable, safe, and hygienic treatment environment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Consultation Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Skin Analysis</h5>
                      <p className="text-sm text-gray-600">Comprehensive assessment of your skin condition and concerns</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Treatment Plan</h5>
                      <p className="text-sm text-gray-600">Customized treatment recommendations based on your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Begin Journey</h5>
                      <p className="text-sm text-gray-600">Start your transformation with expert guidance and care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;