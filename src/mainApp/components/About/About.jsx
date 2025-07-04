import React from "react";
import aboutimage from "../../assets/aboutimage.jpg"
const About = () => {
  return (
    <div className="text-white mt-25 w-full  flex flex-col  md:flex-row sm:gap-0 gap-10 py-2 sm:py-5 ">
      <div className="md:w-2/3 w-full max-w-3xl text-justify px-4">
        <div className="text-center">
          <h2 className="text-2xl  font-bold text-yellow-300 mb-6 border-b border-yellow-500 inline-block">
            About Me
          </h2>
        </div>
        <div className="text-sm sm:text-base text-gray-400 mt-5 p-2 sm:ml-10">
          <div>
            Hi<span>👋</span>, I’m Abhishek Sharma — a frontend developer
            passionate about building clean, responsive, and user-friendly web
            interfaces. With a background in Electronics and Communication
            Engineering, I transitioned into web development out of a love for
            creativity blended with logic.
          </div>
          <div>
            I specialize in React.js, JavaScript, Tailwind CSS, and HTML/CSS. My
            strength lies in turning ideas into fully functional, pixel-perfect
            components while keeping performance and accessibility in mind. I
            believe in writing clean, maintainable code and creating experiences
            that are as intuitive as they are engaging.
          </div>
          <div>
            Currently, I work as an SDE-1 at Prodsmiths, where I’ve contributed
            to real-world projects including a legal case management dashboard.
            From implementing reusable components to handling complex state
            logic and API integrations — I’ve learned to take ownership and
            build with confidence.
          </div>
          <div>
            Outside of work, I’m always trying to level up. Whether it's
            sharpening JavaScript fundamentals, exploring DevOps tools, or
            experimenting with side projects — I’m driven by curiosity and
            growth. I value consistency, simplicity, and design that respects
            the user.
          </div>
          <div>
            My goal is to join teams that build meaningful products — and to
            keep pushing myself to become a well-rounded developer who can
            contribute both in code and in culture.
          </div>
        </div>
      </div>
      <div className=" sm:w-1/3 m-auto cursor-grab">
        <img
          src={aboutimage}
          height={400}
          width={400}
          className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default About;
