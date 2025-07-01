import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:jenish10xdev@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);

    alert("✅ Your email client should open with the message ready to send.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Jenish10Xdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jenish-shah-986028345"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
            >
              LinkedIn
            </a>

            <a
              href="https://twitter.com/Jenish10XDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-transparent hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-black/60 border border-gray-800 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-white flex items-center mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white block">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white block">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white block">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell me about your project, collaboration idea, or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-transparent text-white hover:bg-blue-700 hover:text-white py-3 rounded-full font-semibold transition duration-300 transform hover:scale-105 shadow-lg border border-white border-opacity-30"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-black/60 border border-gray-800 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
            <p className="text-gray-400 text-lg mb-6">
              Open to Software Engineering Internships | Freelance Projects | Collaborations
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-full flex items-center justify-center" style={{ width: 32, height: 32 }}>
                  <span role="img" aria-label="Email" className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href="mailto:jenish10xdev@gmail.com" className="text-gray-300 hover:text-blue-400">
                    jenish10xdev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-full flex items-center justify-center" style={{ width: 32, height: 32 }}>
                  <span role="img" aria-label="Phone" className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a href="tel:+918128905687" className="text-gray-300 hover:text-green-400">
                    +91 8128905687
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-full flex items-center justify-center" style={{ width: 32, height: 32 }}>
                  <span role="img" aria-label="Location" className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Career Goals</h3>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-blue-500 pl-4 mb-4">
                "To build scalable and intuitive full-stack web applications and grow into a high-impact software engineer with strong product sense and real-world development skills."
              </blockquote>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Currently Open To:</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Remote internships</li>
                  <li>React-based UI/UX projects</li>
                  <li>Early-stage projects</li>
                  <li>Part-time freelance work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
