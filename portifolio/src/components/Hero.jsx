import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-center px-4"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
          Hi, I'm <span className="text-teal-400">Your Name</span>,
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
          A passionate{" "}
          <span className="font-semibold text-teal-300">Web Developer</span>{" "}
          building modern, responsive, and user-friendly web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block px-10 py-4 bg-teal-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
