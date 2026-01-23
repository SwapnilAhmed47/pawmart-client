import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const {user} = use(AuthContext)  
  const product = useLoaderData();
  const {
    name,
    category,
    ownerEmail,
    description,
    price,
    location,
    image,
  } = product;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left: Image */}
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{name}</h2>

          <p className="text-gray-600">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-600">
            <strong>Owner's Email:</strong> {}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-lg font-semibold">
            {price ? `$${price}` : <span className="text-green-600">Free for Adoption 🐾</span>}
          </p>
          <p className="text-gray-700">{description}</p>

          {/* Adopt / Order Button */}
          <button
            className="cursor-pointer mt-4 px-6 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 
                       text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            {category.toLowerCase() === "pets" ? "Adopt Now" : "Order Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
