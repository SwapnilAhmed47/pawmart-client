import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaPaw } from "react-icons/fa";
import ProductCard from "../../components/ProductCard";

const PetSupply = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);

  return (
    <div>
      <h3
        className="flex justify-center items-center gap-3 text-2xl md:text-3xl font-bold
  text-gray-800 mb-5 mt-10"
      >
        <FaPaw className="text-pink-500 text-2xl" />
        <span
          className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
    bg-clip-text text-transparent"
        >
          Pets & Supplies
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PetSupply;
