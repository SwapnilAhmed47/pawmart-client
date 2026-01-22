import React from "react";

const Navbar = () => {
  //
  return (
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-pink-100 via-fuchsia-50 to-purple-100 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* link */}
          </ul>
        </div>
        <a className="flex items-center md:text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent space-x-2 cursor-pointer">
          🐾PawMart
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* links */}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a
          className="
     btn btn-sm md:btn-lg text-white border-0
    bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500
    hover:from-pink-500 hover:via-fuchsia-600 hover:to-purple-600
    transition-all duration-300
  "
        >
          Login
        </a>

        <a
          className="
    btn btn-sm md:btn-lg text-white border-0
    bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500
    hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-600
    transition-all duration-300
  "
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
