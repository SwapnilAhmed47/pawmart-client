import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard";

const CategoryCard = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
