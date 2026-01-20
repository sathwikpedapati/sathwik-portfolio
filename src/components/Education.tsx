import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "GMR Institute of Technology",
      duration: "2022 – 2026",
      score: "8.83 CGPA"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      duration: "2020 – 2022",
      score: "91.9%"
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya Techno School",
      duration: "2019 – 2020",
      score: "96.6%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 md:px-10 lg:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 -translate-x-1/2"></div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex items-center md:block">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 relative">
                      <FaGraduationCap className="w-4 h-4" />
                    </div>
                    <div className={`ml-4 md:ml-0 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-blue-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.duration}</p>
                      <p className="text-gray-700 font-medium mt-1">{edu.score}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
