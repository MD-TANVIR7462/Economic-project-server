import React from "react";
import { PackageSearch, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
const NO_Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl text-center">
        <PackageSearch className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Product Not Found
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          We couldn't find the product you're looking for. It might be out of
          stock or no longer available.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full sm:w-96">
            <input
              type="search"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <PackageSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <button className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Suggested Product {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief product description goes here.
                  </p>
                  <button className="w-full py-2 bg-transparent border border-gray-300 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          to={"/"}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default NO_Product;
