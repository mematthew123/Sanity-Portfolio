import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (


      <div className="navbar bg-black text-white">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl " href= "/">Hello</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost w-auto">
      < NavLink className="about-link hover:bg-gray-600 mr-3" to="/about">about</NavLink>
      < NavLink className="about-link hover:bg-gray-600 mr-3" to="/post">Blog</NavLink>
      < NavLink className="about-link hover:bg-gray-600 mr-3" to="/project">Projects</NavLink>

    </button>
  </div>
</div>

      
      
  );
}