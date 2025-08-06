import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
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

  const achievements = [
    { icon: Award, title: "MD Dermatology", desc: "Specialized medical degree" },
    { icon: Users, title: "International Fellow", desc: "Aesthetic & Anti-Aging Medicine" },
    { icon: Clock, title: "5+ Years", desc: "Clinical experience" },
    { icon: CheckCircle, title: "500+ Patients", desc: "Successfully treated" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Dr. A. Kathyayani</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in achieving healthy, radiant skin through science-backed treatments and personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Doctor's Image */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Dr. A. Kathyayani"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">MD</div>
                  <div className="text-xs text-gray-600">Dermatology</div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor's Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Skin's Best Friend
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Dr. A. Kathyayani brings a unique blend of medical expertise and aesthetic artistry to 
                every treatment. With her MD in Dermatology and International Fellowship in Aesthetic 
                and Anti-Aging Medicine, she combines the latest scientific advances with a deep 
                understanding of individual skin needs.
              </p>
              <p>
                Based in the beautiful coastal city of Visakhapatnam, Dr. Kathyayani has built a 
                reputation for delivering exceptional results while prioritizing patient comfort and safety. 
                Her patient-centered approach ensures that every treatment plan is tailored to your 
                unique skin goals and lifestyle.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <achievement.icon className="w-8 h-8 text-pink-600 mb-2" />
                  <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                  <div className="text-xs text-gray-600">{achievement.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;