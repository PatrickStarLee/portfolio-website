import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "../index.css";
//import { Link } from "react-scroll";

const Navabar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="hidden">Logo</div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-pink-600  duration-300">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <a href="/skills">Skills</a>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <a href="/work">Work</a>
        </li>
        <li className="hover:text-pink-600 duration-300">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* hamburger */}
      <button onClick={handleClick} className="md:hidden pr-2.5 z-10">
        {!nav ? (
          <FaBars className="hover:text-pink-600 duration-300" />
        ) : (
          <FaTimes className="hover:text-pink-600 duration-300" />
        )}
      </button>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl text-gray-300 hover:text-pink-600 duration-300">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl text-gray-300 hover:text-pink-600 duration-300">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl text-gray-300 hover:text-pink-600 duration-300">
          <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl text-gray-300 hover:text-pink-600 duration-300">
          <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl text-gray-300 hover:text-pink-600 duration-300">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* social icons lg breakpoint*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/patrickwlee/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/PatrickStarLee"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6b62e6]">
            <a
              href="https://docs.google.com/document/d/1to4Abw_eKsFhxtvaa-DVUfUlUeyzxgwybt09gtV39ws/edit?usp=sharing"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navabar;
