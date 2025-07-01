import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Currently pursuing B.Tech in Computer Engineering at Institute of Advanced Research, Gandhinagar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">🎓 Education</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Institution:</strong> Institute of Advanced Research, Gandhinagar</p>
                  <p><strong>Degree:</strong> B.Tech in Computer Engineering</p>
                  <p><strong>Batch:</strong> 2023 – 2027</p>
                  <p><strong>Current Year:</strong> Completed 2nd year</p>
                  <p><strong>SGPA:</strong> 8.17</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">💼 Current Status</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Availability:</strong> 10–20 hours/week</p>
                  <p><strong>Open to:</strong> Remote internships, freelance ReactJS projects, UI contribution roles</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">🚀 About My Work</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm a freelance full-stack web developer with hands-on experience building fast, scalable applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Tailwind CSS, Vite, and JWT-based auth.
                  </p>

                  <p>My recent freelance project was a production-grade e-commerce platform with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Role-based authentication (JWT)</li>
                    <li>Admin dashboard for product, inventory, and order management</li>
                    <li>Cloudinary image uploads, real-time cart logic, and COD support</li>
                    <li>Nodemailer & Twilio integrations for notifications</li>
                  </ul>

                  <p>
                    I also led a team at Ingenious Hackathon 6.0, where we built Frame Finance – a web app helping farmers track and improve their credit scores. Our project was selected among the Top 10 Finalists out of 100+ teams.
                  </p>
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
