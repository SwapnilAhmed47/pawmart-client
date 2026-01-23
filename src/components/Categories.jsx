import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router";

const Categories = () => {
  const category = ["pets", "food", "accessories", "care"];
  const [products, setProducts] = useState();
  console.log(products);
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {category.map((cat, i) => (
        <Link
          key={i}
          to={`/categories/${cat}`}
          className="
      text-center
    px-10 py-5
    text-xl font-bold text-white
    rounded-2xl
    bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300
    shadow-lg
    hover:from-pink-500 hover:via-fuchsia-600 hover:to-purple-600
    hover:shadow-xl
    transition-all duration-300 ease-out
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-pink-300
  "
        >
          {cat === "pets"
            ? "Pets"
            : cat === "food"
              ? "Food"
              : cat === "accessories"
                ? "Accessories"
                : cat === "care"
                  ? "Care"
                  : ""}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
