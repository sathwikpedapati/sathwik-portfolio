import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Revidd — Visakhapatnam, India",
      duration: "Jan 2026 – May 2026",
      responsibilities: [
        "Developed and enhanced Android application features by translating functional requirements into clean, user-friendly interfaces.",
        "Built backend services using Java and MongoDB to ensure reliable data storage and application functionality.",
        "Integrated frontend and backend components to enable seamless data flow and responsive system performance.",
        "Communicated technical progress effectively within the team and maintained essential project documentation."
      ],
      tech: "Android Studio, Java, MongoDB"
    },
    {
      role: "Full Stack Developer Intern",
      company: "Cerevyn Solutions — Hyderabad, India",
      duration: "Dec 2025 – Jan 2026",
      responsibilities: [
        "Contributed to the development of an enterprise-level Sales and Dealer Management System for monitoring and reporting.",
        "Designed and implemented analytical dashboards including Target vs Achievement, Outstanding Payments, and Product-wise Sales to support data-driven decision-making.",
        "Collaborated with stakeholders to gather requirements, clarify expectations, and propose practical technical solutions.",
        "Worked with cross-functional teams to deliver scalable, maintainable, and quality-focused solutions within project timelines."
      ],
      tech: "React.js, Node.js, Supabase, Python"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white md:px-10 lg:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4">
                  <FaChalkboardTeacher className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {exp.duration}
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-medium">Technologies:</span> {exp.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
