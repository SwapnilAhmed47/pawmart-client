import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../../components/ProductCard";
import Categories from "../../components/Categories";
import Banner from "../../components/Banner";
import { FaListAlt } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

const Home = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className="mt-15">
        <h3
          className="flex justify-center items-center gap-2 text-2xl md:text-3xl font-extrabold
  bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
  bg-clip-text text-transparent text-center my-5"
        >
          <FaListAlt className="text-pink-500" />
          Categories
        </h3>
        <Categories></Categories>
      </div>
      <div className="mt-15">
        <h3
          className="flex justify-center items-center gap-2 text-2xl md:text-3xl font-extrabold
  bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
  bg-clip-text text-transparent my-5"
        >
          <FaPaw className="text-pink-500" />
          Recent Listings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                products.map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
