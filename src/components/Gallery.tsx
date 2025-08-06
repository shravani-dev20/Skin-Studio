import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Acne Treatment Results",
      description: "3-month transformation with customized treatment plan"
    },
    {
      before: "https://images.pexels.com/photos/5069433/pexels-photo-5069433.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Anti-Aging Treatment",
      description: "6-month skin rejuvenation program results"
    },
    {
      before: "https://images.pexels.com/photos/4841444/pexels-photo-4841444.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Pigmentation Treatment",
      description: "Dark spot removal and skin brightening"
    },
    {
      before: "https://images.pexels.com/photos/5069429/pexels-photo-5069429.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Skin Texture Improvement",
      description: "Chemical peel and laser resurfacing results"
    },
    {
      before: "https://images.pexels.com/photos/5069430/pexels-photo-5069430.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/5069455/pexels-photo-5069455.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Wrinkle Reduction",
      description: "Botox and filler treatment outcomes"
    },
    {
      before: "https://images.pexels.com/photos/4841443/pexels-photo-4841443.jpeg?auto=compress&cs=tinysrgb&w=500",
      after: "https://images.pexels.com/photos/7319071/pexels-photo-7319071.jpeg?auto=compress&cs=tinysrgb&w=500",
      title: "Skin Hydration Therapy",
      description: "HydraFacial and moisturizing treatment results"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? beforeAfterImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === beforeAfterImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the transformative power of our treatments through real patient results.
            Each image tells a story of renewed confidence and radiant skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((image, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.before}
                        alt="Before"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-gray-900/70 text-white px-2 py-1 rounded text-xs font-semibold">
                        Before
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={image.after}
                        alt="After"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-pink-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        After
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={beforeAfterImages[selectedImage].before}
                      alt="Before"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/70 text-white px-3 py-2 rounded font-semibold">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={beforeAfterImages[selectedImage].after}
                      alt="After"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-2 rounded font-semibold">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {beforeAfterImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">{beforeAfterImages[selectedImage].description}</p>
                </div>
              </div>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;