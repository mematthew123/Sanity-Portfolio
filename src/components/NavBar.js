import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-0 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <nav className="flex">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 px-3 text-teal-700 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
            >
              Hello
            </NavLink>

            <NavLink
              to="/post"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-800"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-800"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-500 hover:text-gray-800"
            >
              About
            </NavLink>


          </nav>
        </div>
      </div>
    </div>
  );
}
