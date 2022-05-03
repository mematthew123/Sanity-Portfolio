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
            className="inline-flex items-center py-6 px-3 mr-4 text-indigo-500 hover:text-blue-200 text-4xl font-bold cursive tracking-widest"
          >
Hello World
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-indigo-400 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-500 hover:text-blue-200"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-300 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-500 hover:text-blue-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-300 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-indigo-500 hover:text-blue-200"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex- -py-3 px-3 my-6">
        

        <SocialIcon
            url="https://github.com/mematthew123"
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />

          <SocialIcon
            url="https://twitter.com/mematthew123"
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
    
          <SocialIcon
            url="https://linkedin.com/in/mematthew123"
            className="mr-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 25, width: 25 }}
          />
        </div>
      </div>
    </header>
  );
}