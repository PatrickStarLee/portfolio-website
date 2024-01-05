import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Patrick, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-[#8892b0] max-w-[700px] text-sm sm:text-base">
            <p>
              I am pursuing my Master's degree in Computer Science and
              Engineering at Santa Clara University, where I have gained skills
              in C++, GitHub, React.js, and more. I have applied these skills in
              several projects and internships, such as winning first place at
              Hack 4 Humanity 2022 by creating a web application for users to
              find COVID-19 appointments.
            </p>
            <br></br>
            <p>
              I am actively seeking full-time positions in the software
              engineering field, where I can leverage my skills, experience, and
              enthusiasm to create innovative and impactful solutions. I am
              eager to join a diverse and collaborative team that values
              problem-solving, creativity, and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
