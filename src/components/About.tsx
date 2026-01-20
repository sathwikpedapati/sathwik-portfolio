import React from 'react';
import profilePlaceholder from '../assets/profile-placeholder.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/2">
            <div className="max-w-md mx-auto">
              <div className="w-80 h-80 mx-auto md:mx-0 rounded-[50%] border-4 border-blue-100 overflow-hidden">
                <img 
                  src={profilePlaceholder} 
                  alt="Sathwik Pedapati" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* About Text & Skills */}
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Full Stack Developer and AI enthusiast with experience in building real-time, scalable, and secure applications.
              Strong analytical and debugging skills, combined with a commitment to continuous learning and delivering 
              high-quality, production-ready solutions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              
              <div className="space-y-4">
                {/* Languages */}
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Python', 'Java', 'C'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Frontend */}
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Ant Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Backend & Databases */}
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Backend & Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Tools & Other */}
                <div>
                  <h4 className="text-md font-medium text-gray-800 mb-2">Tools & Other</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
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

export default About;
