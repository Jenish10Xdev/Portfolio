import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
              Jenish Shah
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6">
            Freelance Full-Stack Developer | ReactJS Developer | MERN Stack
          </p>

          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
            "I don't just write code — I solve real-world problems with full-stack precision."
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Jenish10Xdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent hover:bg-blue-700 text-white border-0 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jenish-shah-986028345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent hover:bg-blue-700 text-white border-0 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>

            <a
              href="https://twitter.com/Jenish10XDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-transparent hover:bg-blue-700 text-white border-0 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Twitter
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <button
              onClick={scrollToContact}
              className="bg-transparent text-white hover:bg-blue-700 hover:text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
            >
              Get In Touch
            </button>
            <a
              href="/JenishShah_CV.pdf"
              download
              className="bg-transparent text-white hover:bg-blue-700 hover:text-white px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30 flex items-center justify-center"
              style={{ textDecoration: 'none' }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
