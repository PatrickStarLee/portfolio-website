import React from "react";
import Cplusplus from "../assets/c++.png";
import Python from "../assets/python.png";
import Angular from "../assets/angular.png";
import ReactImg from "../assets/react.png";
import Github from "../assets/github.png";
import PostgreSQL from "../assets/postgresql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are some of technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img className="w-20 mx-auto pt-3" src={Cplusplus} alt="C++ icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img className="w-20 mx-auto pt-3" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img className="w-20 mx-auto pt-3" src={Angular} alt="Angular icon" />
            <p className="my-4">Angular</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img className="w-20 mx-auto pt-3" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img className="w-20 mx-auto pt-3" src={Github} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-600">
            <img
              className="w-20 mx-auto pt-3"
              src={PostgreSQL}
              alt="PostgreSQL icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
