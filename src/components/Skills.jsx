import React from "react";
import { skillsData } from "../data/skills";

const Skills = () => {
  const skills = skillsData;

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:px-20 xl:px-0">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are some of technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {skills.map((item) => (
            <div
              key={item.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 hover:bg-gradient-to-r from-[#709dffcc] to-[#5752E5CC]"
            >
              <img
                className="w-16 mx-auto pt-3"
                src={item.image}
                alt={item.alt}
              />
              <p className="my-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
