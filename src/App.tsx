import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Website Sections */}
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />

      {/* Floating Chatbot Button */}
      <div
        className="fixed bottom-5 right-5 z-50 cursor-pointer bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {/* Chat Icon (Simple SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.74-1.17L3 20l1.17-4.74A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>

      {/* Chatbot Iframe Popup */}
      {isChatOpen && (
        <div
          className="fixed bottom-16 right-5 w-80 h-[500px] bg-white border rounded-lg shadow-2xl z-50 overflow-hidden"
          style={{ maxWidth: '95vw', maxHeight: '80vh' }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/OMNMDTTIC6z80Gl_aAPdM"
            width="100%"
            height="100%"

            style={{ border: 'none' }}
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
