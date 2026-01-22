import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    signInUser(email, password)
    .then(data =>{
      console.log(data)
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${data.user.email} ! `,
        confirmButtonColor: "#ec4899",
      });
    })
    .catch(err =>{
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: `${err}`,
        confirmButtonColor: "#ec4899",
      });
    })

    


    
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
          Welcome back! Login to care for your furry friends 🐶
        </p>

        {/* FORM START */}
        <form onSubmit={handleLogin}>

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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 text-white font-semibold rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition"
          >
            Login
          </button>

        </form>
        {/* FORM END */}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border rounded-xl shadow hover:shadow-md transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">
            Continue with Google
          </span>
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-pink-500 font-medium hover:underline">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
