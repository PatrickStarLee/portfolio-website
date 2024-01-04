import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

const Navabar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    {
      /* for Navbar: className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300" */
    },
    (
      <div className="Navbar">
        {/* menu */}
        {/* className="hidden md:flex" */}
        <ul className="Menu">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contacts</li>
        </ul>

        {/* hamburger */}
        {/* className="md:hidden pr-2.5" */}
        <button onClick={handleClick} className="Hamburger">
          <FaBars />
        </button>

        {/* mobile menu */}
        {/* Mobile1: hidden */}
        {/* Mobile2: absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center */}
        <ul className={!nav ? "Mobile1" : "Mobile2"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contacts</li>
        </ul>
      </div>
    )
  );
};

export default Navabar;
