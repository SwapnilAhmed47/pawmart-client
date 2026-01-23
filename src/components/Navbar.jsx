import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Signed Out",
          text: "You have successfully logged out.",
          confirmButtonColor: "#ec4899",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: err,
        confirmButtonColor: "#ec4899",
      });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/pets-supply"}>Pets &amp; Supplies</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={'/add-listing'}>Add Listing</NavLink>
          </li>
          <li>
            <NavLink to={'/my-listing'}>My Listings</NavLink>
          </li>
          <li>
            <NavLink>My Orders</NavLink>
          </li>
        </>
      )}
    </>
  );

  if(loading){

    return <div className="flex justify-center item-center">
      <div className="skeleton h-18 w-full"></div>
    </div>
  }

  //
  return (
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-pink-100 via-fuchsia-50 to-purple-100 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-circle lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="flex items-center md:text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent space-x-2 cursor-pointer">
          🐾PawMart
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex gap-2">
            <span className="">
              <img
                className="rounded-full h-12"
                src={
                  user.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt=""
              />
            </span>
            <button onClick={handleSignOut} className="btn btn-lg
    text-white font-semibold
    rounded-xl
    bg-gradient-to-r from-red-400 via-pink-500 to-purple-500
    hover:from-red-500 hover:via-pink-600 hover:to-purple-600
    transition-all duration-300">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <a
              className="rounded-xl
     btn btn-lg text-white border-0
    bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500
    hover:from-pink-500 hover:via-fuchsia-600 hover:to-purple-600
    transition-all duration-300
  "
            >
              Login
            </a>

            <a
              className="rounded-xl
    btn btn-lg text-white border-0
    bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500
    hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-600
    transition-all duration-300
  "
            >
              Register
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
