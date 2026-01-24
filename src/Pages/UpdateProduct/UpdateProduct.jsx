import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleUpdateListing = (e) => {
    console.log("hello")
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const price = Number(e.target.price.value);
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const date = e.target.date.value;
    const email = e.target.email.value;

    const productData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    fetch(`http://localhost:3000/products/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Product Updated",
            text: "Your product/pet has been successfully Updated!",
            confirmButtonColor: "#ec4899",
          });
        }
      });
  };

  return (
    <div>
      <div>
        <div class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
          <h2 class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Update Existing Listing
          </h2>

          <form onSubmit={handleUpdateListing} class="flex flex-col gap-4">
            {/* <!-- Product/Pet Name --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Product / Pet Name
              </label>
              <input
                name="name"
                type="text"
                defaultValue={data.name}
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* <!-- Category --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Category
              </label>
              <select
                defaultValue={data?.category}
                name="category"
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="" disabled>
                  {"Select Category"}
                </option>
                <option value="Pets">Pets</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care">Care Products</option>
              </select>
            </div>

            {/* <!-- Price --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Price ($)
              </label>
              <input
                name="price"
                type="number"
                defaultValue={data?.price}
                min="0"
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* <!-- Location --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Location
              </label>
              <input
                name="location"
                type="text"
                defaultValue={data?.location}
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* <!-- Description --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={data?.description}
                rows="4"
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            {/* <!-- Image URL --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Image URL
              </label>
              <input
                name="image"
                type="url"
                defaultValue={data?.image}
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* <!-- Date / Pick Up --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Pick Up Date
              </label>
              <input
                name="date"
                type="date"
                defaultValue={data.date}
                required
                class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* <!-- Email (readonly) --> */}
            <div>
              <label class="block text-sm font-medium text-gray-600 mb-1">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                readOnly
                defaultValue={user?.email}
                class="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none"
              />
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              class="w-full py-3 mt-4 text-white font-semibold rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:opacity-90 transition"
            >
              Update Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
