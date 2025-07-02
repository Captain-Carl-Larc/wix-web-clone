import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>

        <div className="md:flex md:space-x-12 items-center">
          {/* Image Column */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            {/* Placeholder Image - Replace with your actual photo */}
            <img
              src="https://via.placeholder.com/200/4a5568/a0aec0?text=Your+Photo"
              alt="Your Profile"
              className="rounded-full w-48 h-48 object-cover border-4 border-teal-500 shadow-lg"
            />
          </div>

          {/* Text Column */}
          <div className="md:w-2/3 text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
              Hello! I'm{" "}
              <span className="text-teal-300 font-semibold">Your Name</span>, a
              dedicated web developer with a strong focus on creating clean,
              efficient, and user-centric applications. My journey into web
              development began with a fascination for how digital experiences
              are crafted, and it quickly evolved into a passion for bringing
              ideas to life through code.
            </p>
            <p className="mb-6">
              I specialize in frontend technologies like{" "}
              <span className="text-teal-300 font-semibold">React</span> and use
              modern styling frameworks such as{" "}
              <span className="text-teal-300 font-semibold">Tailwind CSS</span>{" "}
              to build responsive and visually appealing interfaces. I enjoy
              tackling complex problems and am always eager to learn new
              technologies and improve my craft.
            </p>
            <p>
              Outside of coding, I enjoy [mention a hobby, e.g., hiking,
              reading, gaming, exploring new tech]. I believe in continuous
              learning and leveraging technology to make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
