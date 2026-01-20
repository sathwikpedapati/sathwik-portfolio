import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone 
} from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <div className="text-center">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hey, I'm Sathwik Pedapati <span className="wave">👋</span>
          </h1>

          {/* Sub heading */}
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            "I build fast, scalable and user-friendly web applications with real-time features and clean UI."
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/1VdVzA64TLVZro3dZ01DPsGfhNIagL-Vv/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg 
                         font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <FaFileDownload /> View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg 
                         font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </a>

          </div>

          {/* Location & Contact */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">

            {/* Location */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>Chodavaram, Anakapalle</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>sathwikpedapati02@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+91 81438 33945</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
