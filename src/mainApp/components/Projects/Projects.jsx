import React from "react";

const projects = [
  {
    title: "Paathshala",
    description:
      "A full-stack learning platform with dual login (student/instructor), Razorpay integration, and dynamic course modules.",
    tech: ["React", "Tailwind", "Express", "Razorpay"],
    live: "https://paathshala.vercel.app/",
    github: "https://github.com/AbhishekSaroch/Paathshala",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app using Socket.io and Node.js. Includes user auth, one-to-one chat, and responsive UI.",
    tech: ["React", "Socket.io", "Node.js", "Tailwind"],
    live: "https://chat-application-gilt.vercel.app/",
    github: "https://github.com/AbhishekSaroch/Chat-App",
  },
  {
    title: "BlogsApp",
    description:
      "A dynamic blog platform with login/signup, blog CRUD, and tag-based filtering using MERN stack.",
    tech: ["Javascript", "React JS", "Tailwind CSS", "Context API"],
    live: "#",
    github: "https://github.com/AbhishekSaroch/BlogsApp",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto mt-5">
        <div className="text-center">
            <h2 className="text-3xl font-bold text-yellow-300 mb-10 border-b border-yellow-500 inline-block">
          Projects
        </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-grabbing">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-yellow-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-sm px-2 py-1 rounded-md text-yellow-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
