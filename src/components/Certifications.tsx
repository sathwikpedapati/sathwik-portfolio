import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Full-Stack Web Development",
      issuer: "Apna College",
      date: "2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
        
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-6"
            >
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                  <FaCertificate className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-gray-600">{cert.issuer}</p>
                  <span className="inline-block mt-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
