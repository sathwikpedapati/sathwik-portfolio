import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const Projects: React.FC = () => {
  const projects = [
    {
      title: "TalkEasy — Real-Time Chat App",
      date: "2025",
      image: "/chat.jpeg",
      description:
        "A real-time messaging platform with live chat, image sharing, authentication, and typing indicators.",
      features: [
        "Real-time Communication",
        "Image Sharing",
        "Secure authentication",
        "Online/offline user status",
        "Profile Customisation"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary","JWT"],
      github: "https://github.com/sathwikpedapati/Talk-Easy",
      demo: "https://talk-easy-zjl5.vercel.app/login",
    },
    {
      title: "Quiz Hub — Full-Stack Quiz Web App",
      date: "2025",
      image:  "/quiz.jpeg",
      description:
        "A fun and interactive quiz application that lets users test their knowledge with a smooth, playful experience.",
      features: [
        "10 multiple-choice trivia questions",
        "Score displayed as a percentage",
        "Restart quiz & logout functionality",
        "Clean, responsive UI"
      ],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/sathwikpedapati/Quiz-Hub",
      demo: "https://quiz-hub-eight.vercel.app/login",
    },
    {
      title: "MoneyTrack — Expense Tracker",
      date: "2025",
      image:  "/money.jpeg",
      description:
        "A personal expense tracking system with budgeting tools and visual spending analytics.",
      features: [
        "Charts & analytics dashboard",
        "Secure Login/Signup system",
        "Profile Customisation",
        "Incomes and Expenses Customisation",
      ],
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Passport.js", "Ant Design"],
      github: "https://github.com/sathwikpedapati/Budget-Buddy",
      demo: "https://budget-buddy-ashen.vercel.app/login",
    },
    {
      title: "Recipe Box — Recipe Sharing Web App",
      date: "2025",
      image:  "/recipe.jpeg",
      description:
        "A recipe sharing platform where users can upload, explore, and manage cooking recipes.",
      features: [
        "Cloudinary image uploads",
        "User authentication",
        "Food Recipe Ideas Customisation",
        "Add Favourites",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      github: "https://github.com/sathwikpedapati/Recipe-Heaven",
      demo: "https://recipe-heaven-five.vercel.app/",
    },
    {
      title: "AgriConnect — Agriculture Marketplace",
      date: "2025",
      image:  "/agri.jpg",
      description:
        "A multilingual agricultural marketplace connecting farmers, buyers, and admins in real time.",
      features: [
        "Role-based dashboards",
        "Multilingual (i18next)",
        "Product trading & bidding",
        "Real-time communication",
      ],
      tags: ["React", "Node.js", "MongoDB", "Ant Design", "Socket.io", "Cloudinary"],
      github: "https://github.com/sathwikpedapati/Agri-Connect",
      demo: "https://github.com/sathwikpedapati/Agriconnect-SampleImages",
    },
    {
      title: "Address Book — Address Management System",
      date: "2025",
      image: "/address.jpeg",
      description:
        "A full-stack address storing application with authentication and CRUD operations.",
      features: [
        "User authentication",
        "Add / Edit / Delete addresses",
        "Flash Messages for Instant Feedback",
        "Customise the details based on owners",
      ],
      tags: ["HTML", "CSS", "Bootstrap", "Node.js", "MongoDB", "Passport.js"],
      github: "https://github.com/sathwikpedapati/Address-Book",
      demo: "https://address-book-mv3s.onrender.com/alladdress",
    },
    {
      title: "NewsToday — Live News Platform",
      date: "2025",
      image:  "/news.jpeg",
      description:
        "A real-time news aggregation platform with categories, themes, and user profiles.",
      features: [
        "Live news fetching",
        "Category-based filters",
        "Dark and light theme",
        "User profiles",
      ],
      tags: ["React", "Node.js", "MongoDB", "Ant Design"],
      github: "https://github.com/sathwikpedapati/News",
      demo: "https://news-six-smoky.vercel.app/login",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was built to solve real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base md:text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-xs md:base text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-3 border-t mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 flex items-center gap-1 text-sm"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
