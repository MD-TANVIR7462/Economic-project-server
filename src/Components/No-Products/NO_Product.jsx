import React from "react";
import { PackageSearch, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NO_Product = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(0); // Navigate to the current route
  };

  return (
    <div className="min-h-[50dvh] bg-gradient-to-b flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-3xl text-center">
        <PackageSearch className="mx-auto h-12 w-12 mb-4" />
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-xl text-gray-400 dark:text-gray-300 mb-8">
          We couldn't find the product you're looking for. It might be out of
          stock or no longer available.
        </p>
        <button
          onClick={handleContinueShopping}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default NO_Product;