import React from "react";

// You would typically import actual SVG icons or use a library like react-icons
// For simplicity, using text or basic placeholder icons here.

const skills = [
  { name: "React", icon: "⚛️" }, // Or use a React icon SVG component
  { name: "JavaScript", icon: "JS" },
  { name: "Tailwind CSS", icon: "🌬️" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Node.js", icon: "Ⓝ" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🌳" },
  { name: "Responsive Design", icon: "📱" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="text-5xl text-teal-400 mb-4">
                {/* Replace with actual icon component or SVG */}
                {skill.icon}
              </div>
              <p className="text-xl font-semibold text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
