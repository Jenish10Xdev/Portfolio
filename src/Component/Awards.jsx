import React from "react";

const Awards = () => {
  const awards = [
    {
      title: "Top 10 Finalist – Ingenious Hackathon 6.0",
      organization: "Ahmedabad University",
      date: "Apr 2025",
      description: "Frame Finance: Agri-credit web app built using MERN stack",
      icon: "🥇",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Certificate of Appreciation – TIC-TECH-TOE '25",
      organization: "IEEE SB DAIICT",
      date: "Apr 2025",
      description: "Recognized for teamwork in coding and design event",
      icon: "🏅",
      color: "from-blue-400 to-purple-500",
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Awards &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Achievements and recognition for my work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center"
            >
              <div className="text-6xl mb-4">{award.icon}</div>

              <h3
                className={`text-xl font-bold bg-gradient-to-r ${award.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
              >
                {award.title}
              </h3>

              <span className="inline-block mt-2 mb-4 px-3 py-1 text-sm border border-blue-500 text-blue-400 rounded-full">
                {award.date}
              </span>

              <p className="text-gray-300 font-medium">{award.organization}</p>

              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
