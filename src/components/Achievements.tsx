import React from 'react';
import { FaTrophy, FaLaptopCode } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <FaTrophy className="w-6 h-6 text-yellow-500" />,
      title: "CodeChef Gold Badge",
      description: "500+ problems solved"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-blue-500" />,
      title: "Full-Stack Applications",
      description: "Built 10+ full-stack apps"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-lg mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
