import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 28,
      treatment: "Acne Treatment",
      rating: 5,
      text: "Dr. Kathyayani completely transformed my skin! After struggling with acne for years, her personalized treatment plan gave me the clear, confident skin I always dreamed of. The entire experience was professional and comfortable.",
      image: "https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Ravi Kumar",
      age: 35,
      treatment: "Laser Hair Removal",
      rating: 5,
      text: "Outstanding results! The laser hair removal treatment was virtually painless and incredibly effective. Dr. Kathyayani and her team made me feel at ease throughout the entire process. Highly recommend!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Anitha Reddy",
      age: 42,
      treatment: "Anti-Aging Treatment",
      rating: 5,
      text: "The anti-aging treatments have taken years off my appearance! Dr. Kathyayani's expertise with Botox and fillers is exceptional. I look natural and refreshed, not overdone. The best investment I've made for myself.",
      image: "https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Manjula Devi",
      age: 31,
      treatment: "HydraFacial",
      rating: 5,
      text: "My skin has never looked better! The HydraFacial treatments at Skin Studio are amazing. Dr. Kathyayani customizes each session perfectly. My skin is glowing and feels so healthy and hydrated.",
      image: "https://images.pexels.com/photos/3985357/pexels-photo-3985357.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Srinivas Rao",
      age: 39,
      treatment: "Chemical Peel",
      rating: 5,
      text: "Excellent service and remarkable results! The chemical peel treatment removed years of sun damage and pigmentation. Dr. Kathyayani explained everything clearly and the recovery was smooth. Very satisfied!",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-600 to-rose-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Real stories from real patients who have experienced the transformative power of our treatments.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Quote className="w-12 h-12 text-pink-400 mb-6 mx-auto" />
            
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].treatment}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;