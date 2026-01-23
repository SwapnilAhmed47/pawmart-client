import React, { use } from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const ProductCard = ({ product }) => {
  const { loading } = use(AuthContext);
  const { _id, name, image, category, price, location } = product;

  if (loading) {
    return (
      <div className="card shadow-md rounded-2xl">
        <div className="card bg-white shadow-md rounded-2xl overflow-hidden animate-pulse">
          {/* Image */}
          <div className="relative">
            <div className="skeleton h-56 w-full"></div>
            <div className="absolute top-3 left-3 skeleton h-6 w-20 rounded-full"></div>
          </div>

          {/* Body */}
          <div className="p-5 space-y-3">
            <div className="skeleton h-5 w-3/4"></div>
            <div className="skeleton h-4 w-1/2"></div>
            <div className="skeleton h-5 w-1/3"></div>
            <div className="skeleton h-10 w-full rounded-xl mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="card bg-white shadow-md hover:shadow-xl transition rounded-2xl overflow-hidden">
        {/* Image */}
        <figure className="relative">
          <img src={image} alt={name} className="h-56 w-full object-cover" />

          {/* Category badge */}
          <span
            className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full
          bg-gradient-to-r from-orange-400 to-pink-500 text-white"
          >
            {category}
          </span>
        </figure>

        {/* Body */}
        <div className="card-body p-5">
          {/* Name */}
          <h2 className="card-title text-lg font-bold flex items-center gap-2">
            <FaPaw className="text-pink-500" />
            {name}
          </h2>

          {/* Location */}
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-orange-500" />
            {location}
          </p>

          {/* Price */}
          <p className="mt-2 font-semibold text-lg">
            {price ? (
              <span className="text-purple-600">${price}</span>
            ) : (
              <span className="text-green-600">Free for Adoption 🐶</span>
            )}
          </p>

          {/* Button */}
          <div className="card-actions mt-4">
            <Link
              to={`/products/${_id}`}
              className="w-full text-center py-2 rounded-xl text-white font-semibold
              bg-gradient-to-r from-orange-300 via-pink-500 to-purple-400
              hover:opacity-90 transition"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
