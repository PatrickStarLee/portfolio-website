import React from "react";
import { projectData } from "../data/projects.js";

const Work = () => {
  const projects = projectData;

  return (
    <div name="work" className="w-full h-full text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-24 pb-5">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent works/projects.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 group-hover:duration-700">
                <div className="text-2xl text-center font-bold text-white tracking-wider">
                  {item.name}
                </div>
                <div className="pt-8 text-center">
                  <a href={item.github}>
                    <button className={!item.hideGit ? "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500" : "hidden"}>
                      GitHub
                    </button>
                  </a>
                  <a href={item.demo}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
