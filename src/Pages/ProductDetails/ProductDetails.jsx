import React, { use, useContext, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email)
  const product = useLoaderData();
  console.log(product)
  const {_id, name, category, email,  description, price, location, image } =
    product;

  const modelRef = useRef(null);

  const handleModalOpen = () => {
    modelRef.current.showModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
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
            <strong>Owner's Email:</strong> {email}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-lg font-semibold">
            {price ? (
              `$${price}`
            ) : (
              <span className="text-green-600">Free for Adoption 🐾</span>
            )}
          </p>
          <p className="text-gray-700">{description}</p>

          {/* Adopt / Order Button */}
          <button
            onClick={handleModalOpen}
            className="cursor-pointer mt-4 px-6 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 
                       text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            {category.toLowerCase() === "pets" ? "Adopt Now" : "Order Now"}
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog ref={modelRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <div className="modal-action">
                <form className="dialog bg-white p-6 rounded-2xl shadow-md space-y-4 w-full">
                  {/* Buyer Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Buyer Name
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      readOnly
                      defaultValue={user?.displayName}
                      className="w-full px-4 py-2 border rounded-xl bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      defaultValue={user?.email}
                      className="w-full px-4 py-2 border rounded-xl bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Product / Listing ID */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Product / Listing ID
                    </label>
                    <input
                      type="text"
                      name="productId"
                      readOnly
                      defaultValue={_id}
                      className="w-full px-4 py-2 border rounded-xl bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Product / Listing Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Product / Listing Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      readOnly
                      defaultValue={name}
                      className="w-full px-4 py-2 border rounded-xl bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      defaultValue={category==="Pets"?1:""}
                      readOnly={category==="Pets"}
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      readOnly
                      defaultValue={price}
                      className="w-full px-4 py-2 border rounded-xl bg-gray-100 cursor-not-allowed"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter delivery / pickup address"
                      required
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>

                  {/* Pick Up Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Pick Up Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Any special instructions..."
                      className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-white font-semibold
      bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500
      hover:opacity-90 transition"
                  >
                    Confirm Order / Adoption
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
