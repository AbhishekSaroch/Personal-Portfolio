import React from "react";

const skills = [
  { name: "HTML", level: 95, color: "bg-orange-400", icon: "src/mainApp/assets/html.svg" },
  { name: "CSS", level: 90, color: "bg-blue-400", icon: "src/mainApp/assets/css.svg" },
  { name: "JavaScript", level: 85, color: "bg-yellow-300", icon: "src/mainApp/assets/javascript.svg" },
  { name: "React", level: 80, color: "bg-cyan-400", icon: "src/mainApp/assets/react.svg" },
  { name: "Tailwind", level: 75, color: "bg-teal-400", icon: "src/mainApp/assets/tailwind.svg" },
  { name: "Git", level: 70, color: "bg-red-400", icon: "src/mainApp/assets/git.svg" },
  { name: "GitHub", level: 65, color: "bg-gray-300", icon: "src/mainApp/assets/github.svg" },
  { name: "Node JS", level: 80, color: "bg-aqua-400", icon: "src/mainApp/assets/nodejs.svg" },
  { name: "Express JS", level: 80, color: "bg-pink-400", icon: "src/mainApp/assets/expressjs.svg" },
  { name: "SQL", level: 80, color: "bg-purple-400", icon: "src/mainApp/assets/sql.svg" },
  { name: "Python", level: 80, color: "bg-gray-400", icon: "src/mainApp/assets/python.svg" },
  { name: "Mongo DB", level: 80, color: "bg-red-600", icon: "src/mainApp/assets/mongodb.svg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-14 px-4 sm:px-10 lg:px-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 border-b-2 border-yellow-500 inline-block pb-1">
          My Skills
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Tools & technologies I’m experienced with
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto p-2">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group bg-[#ffffff] hover:shadow-yellow-500/20 hover:shadow-2xl p-6 rounded-2xl border border-gray-800 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-center gap-4 mb-4 ">
              <div className="bg-white"><img src={skill.icon} alt={skill.name} className="h-10 w-10" /></div>
              <h3 className="text-xl font-semibold text-black">{skill.name}</h3>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-400 mt-1">
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
