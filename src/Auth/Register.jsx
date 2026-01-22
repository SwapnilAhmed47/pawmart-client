import React, { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);

  const [pass, showPass] = useState();

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photo, email, password });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and include 1 uppercase & 1 lowercase letter.",
        confirmButtonColor: "#ec4899",
      });
      return;
    } else {
      createUser(email, password)
        .then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your account has been created!",
            confirmButtonColor: "#ec4899",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="text-3xl">🐾</span>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            PawMart
          </h1>
        </div>

        <p className="text-center text-gray-500 mb-6">
          Create an account and start caring for your furry friends 🐾
        </p>

        {/* FORM START */}
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name..."
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Profile Photo URL
            </label>
            <input
              name="photo"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="mb-4 ">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                name="password"
                type={pass ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="absolute top-9 right-5">
              <button
                className="cursor-pointer"
                onClick={() => showPass(!pass)}
              >
                {pass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 mt-2 text-white font-semibold rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>
        {/* FORM END */}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border rounded-xl shadow hover:shadow-md transition cursor-pointer"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link  to={'/login'} className="text-pink-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
