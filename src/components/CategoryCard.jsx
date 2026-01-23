import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";
import { FaPaw } from "react-icons/fa";

const CategoryCard = () => {
  const products = useLoaderData();
  
  return (
    <div className="mt-10">
      <h3 className="flex justify-center items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-5">
        <FaPaw className="text-pink-500" />
        {`${products[0].category} : ${products.length}`}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
