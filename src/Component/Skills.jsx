import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "C", "C++", "Python", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML/CSS", "Vite", "WebRTC", "Socket.io"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Oracle SQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Cloudinary", "Hostinger", "Vercel", "Nodemailer", "Twilio"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Development Concepts",
      skills: ["Responsive UI", "Agile", "Component-driven architecture", "API integration", "Deployment"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300"
            >
              <h3
                className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-slate-700 text-gray-300 text-sm hover:bg-slate-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
