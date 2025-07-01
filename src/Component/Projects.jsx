import React from "react";

const Projects = () => {
  const projects = [
    
    {
      title: "Trinetras E-Commerce Platform",
      description:
        "Full-stack MERN e-commerce site with user/admin login, dashboard, inventory management, and email/SMS notifications. Built modular components in React, used React Router, and optimized builds with Vite.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary", "Nodemailer", "Twilio"],
      status: "Live Project",
      link: "https://trinetras.store",
      highlight: "Deployed to Vercel and delivered to a live client",
      color: "from-green-400 to-blue-500",
    },
    
    {
      title: "Frame Finance",
      description:
        "Top 10 finalist at Ingenious Hackathon 6.0 (Ahmedabad University). Developed agri-credit scoring dashboard for farmers using React + MongoDB. Built login, forms, visual dashboard; delivered MVP within 36 hours.",
      technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "Dashboard UI"],
      status: "Hackathon Winner",
      link: "",
      highlight: "Top 10 out of 100+ teams",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "TimezoneBuddy",
      description:
        "Full-stack web app for comparing and converting time across timezones with live updates and a meeting time calculator. Built real-time features, REST APIs, and responsive UI with theme toggle.",
      technologies: ["React.js", "FastAPI", "Material-UI", "Axios", "Pydantic", "pytz"],
      status: "Open Source Project",
      link: "https://github.com/Jenish10Xdev/Time-Zone",
      highlight: "Built end-to-end with real-time time conversion & scheduling",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "SpeakSpace",
      description:
        "Real-time chat + video calling app using React, WebRTC, and Socket.io. Implemented secure room-based chat architecture and video streaming between authenticated users. Styled with Tailwind CSS and deployed to Vercel.",
      technologies: ["React.js", "WebRTC", "Socket.io", "Node.js", "Tailwind CSS"],
      status: "Personal Project",
      link: "",
      highlight: "Real-time communication features",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world MERN stack applications and solutions I've built from concept to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/60 border border-gray-800 backdrop-blur-sm hover:bg-black/80 transition-all duration-500 group relative overflow-hidden rounded-xl p-6"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}
                  >
                  </div>
                  <span className="text-xs px-3 py-1 border border-gray-600 text-gray-300 bg-black/30 rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <p className="text-sm text-green-400 font-medium">
                    {project.highlight}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center px-3 py-1 text-xs bg-gray-800/50 text-gray-300 border border-gray-700 rounded-full hover:border-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
