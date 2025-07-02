import React from "react";

const projects = [
  {
    image: "https://via.placeholder.com/400x250/2d3748/a0aec0?text=Project+1",
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce platform with product listings, cart management, and user authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "#", // Replace with actual link
    githubLink: "#", // Replace with actual link
  },
  {
    image: "https://via.placeholder.com/400x250/2d3748/a0aec0?text=Project+2",
    title: "Task Management App",
    description:
      "A responsive task manager application allowing users to create, update, and delete tasks.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    image: "https://via.placeholder.com/400x250/2d3748/a0aec0?text=Project+3",
    title: "Personal Blog",
    description:
      "A minimalist blog platform with a clean UI for publishing articles and managing content.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    image: "https://via.placeholder.com/400x250/2d3748/a0aec0?text=Project+4",
    title: "Weather Dashboard",
    description:
      "Displays current weather conditions and forecasts using a third-party API.",
    technologies: ["React", "API Integration", "CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition transform hover:scale-105 duration-300 ease-in-out border border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-teal-700 text-teal-100 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out text-center text-lg font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition duration-300 ease-in-out text-center text-lg font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
