import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-white backdrop-opacity-50 backdrop-invert bg-indigo/600 ">
    <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex-wrap items-center py-6 px-3 mr-4 text-orange-500 hover:text-blue-200 text-4xl font-bold cursive tracking-widest"
          >
            Hello World
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-blue-300 bg-transparent"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-500 hover:text-blue-200"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-300 bg-transparent"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-500 hover:text-blue-200"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-300 bg-transparent"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-500 hover:text-blue-200"
          >
            About
          </NavLink>

          <NavLink
            to="/merch"
            activeClassName="text-blue-300 bg-transparent"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-orange-500 hover:text-blue-200"
          >
            Merch
          </NavLink>
        </nav>
       
      </div>
    </header>
  );
}
