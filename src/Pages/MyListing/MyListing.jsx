import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

const MyListing = () => {
  const [products, setProducts] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`http://localhost:3000/products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(data);
        }
      });
  }, [user?.email]);

  console.log(products);

  const handleUpdate = (id) => {
    const updateOne = products.filter((product) => product._id == id);
    console.log(updateOne[0]);
  };

  if (loading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Pick-Up Date</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          className=""
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>{product.location}</td>
                <td>
                  {product.date}
                  <br />
                  
                </td>
                <td>{product.category}</td>
                <td>{product.price}$</td>
                <th >
                  <div className="flex gap-2">
                    <Link
                      to={`/update/${product._id}`}
                      className="btn btn-primary btn-xs md:btn-sm"
                    >
                      Update
                    </Link>
                    <Link className="btn btn-warning btn-xs md:btn-sm">Delete</Link>
                  </div>
                </th>
              </tr>
            ))}
        </tbody>

        <tbody>{/* row 1 */}</tbody>
      </table>
    </div>
  );
};

export default MyListing;
