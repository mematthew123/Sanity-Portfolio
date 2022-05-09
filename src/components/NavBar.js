import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between flex-column bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink to="/" className="font-bold text-xl tracking-tight">
          Matthew Rhoads
        </NavLink>
      </div>
      <div className="flex flex-wrap items-left">
        <NavLink

          to="/project"
          className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-gray-400 mr-4"
        > 

          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-gray-400 mr-4"
        >
          About
        </NavLink>
        <NavLink
          to="/post"
          className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-gray-400 mr-4"
        >
          Blog
        </NavLink>
      </div>  
    </nav>
  );
}
