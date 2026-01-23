import React from "react";

const AddListing = () => {
  return (
    <div>
      <div class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 class="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Add New Listing
        </h2>

        <form class="flex flex-col gap-4">
          {/* <!-- Product/Pet Name --> */}
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">
              Product / Pet Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
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
              required
              class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Category</option>
              <option value="pets">Pet</option>
              <option value="food">Food</option>
              <option value="accessories">Accessories</option>
              <option value="care">Care Products</option>
            </select>
          </div>

          {/* <!-- Price --> */}
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter price or 0 for pet"
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
              type="text"
              placeholder="Enter location"
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
              placeholder="Enter description"
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
              type="url"
              placeholder="https://example.com/photo.jpg"
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
              type="date"
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
              type="email"
              value="user@example.com"
              readonly
              class="w-full px-4 py-2 border rounded-xl bg-gray-100 focus:outline-none"
            />
          </div>

          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full py-3 mt-4 text-white font-semibold rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:opacity-90 transition"
          >
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
