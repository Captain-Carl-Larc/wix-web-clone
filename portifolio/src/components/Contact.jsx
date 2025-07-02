import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a real application, you'd send this data to a backend service (e.g., Formspree, Netlify Forms, custom API)
    console.log("Form data submitted:", formData);
    alert("Message sent! (Check console for data)");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <section id="contact" className="bg-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition duration-300"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-teal-500 transition duration-300 resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Optional: Social Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition duration-300"
          >
            {/* LinkedIn Icon */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition duration-300"
          >
            {/* GitHub Icon */}
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.162 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.698-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.829.091-.645.356-1.087.649-1.334-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.391-1.996 1.029-2.705-.103-.255-.446-1.286.098-2.673 0 0 .84-.27 2.75 1.023A9.57 9.57 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.023 2.747-1.023.546 1.387.202 2.418.099 2.673.64.709 1.028 1.609 1.028 2.705 0 3.85-2.338 4.695-4.568 4.943.359.309.678.92.678 1.855 0 1.335-.012 2.41-.012 2.727 0 .268.18.577.688.48C21.137 20.15 24 16.417 24 12.017 24 6.484 19.522 2 14 2h-2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {/* Add more social links as needed (e.g., Twitter, etc.) */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
