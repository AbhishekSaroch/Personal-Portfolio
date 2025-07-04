import React from "react";
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import git from "../../assets/git.svg"
import github from "../../assets/github.svg"
import nodejs from "../../assets/nodejs.svg"
import expressjs from "../../assets/expressjs.svg"
import sql from "../../assets/sql.svg"
import python from "../../assets/python.svg"
import mongodb from "../../assets/mongodb.svg"
const skills = [
  { name: "HTML", level: 95, color: "bg-orange-400", icon: html },
  { name: "CSS", level: 90, color: "bg-blue-400", icon: css },
  { name: "JavaScript", level: 85, color: "bg-yellow-300", icon: javascript },
  { name: "React", level: 80, color: "bg-cyan-400", icon: react},
  { name: "Tailwind", level: 75, color: "bg-teal-400", icon: tailwind},
  { name: "Git", level: 70, color: "bg-red-400", icon: git },
  { name: "GitHub", level: 65, color: "bg-gray-300", icon: github },
  { name: "Node JS", level: 80, color: "bg-aqua-400", icon: nodejs },
  { name: "Express JS", level: 80, color: "bg-pink-400", icon: expressjs },
  { name: "SQL", level: 80, color: "bg-purple-400", icon: sql },
  { name: "Python", level: 80, color: "bg-gray-400", icon: python },
  { name: "Mongo DB", level: 80, color: "bg-red-600", icon: mongodb },
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
