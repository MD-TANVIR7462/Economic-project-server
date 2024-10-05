import React from 'react';
import { Link } from 'react-router-dom';

const PromotionalSection = () => {
  return (
    <div className="py-16">
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-4xl text-gray-100 font-bold md:text-5xl">
              Buy now and benefit up to <span className="text-blue-500">30% off</span>
            </h1>
            <p className="text-lg text-gray-100">
              Be part of millions of people around the world using tailus in modern User Interfaces.
            </p>
            <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
              <button
                type="button"
                title="Start buying"
                className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
              >
                <span className="block text-white font-semibold"><Link to={'/shop/man'}>Start buying</Link></span>
              </button>
              <button
                type="button"
                title="More about"
                className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max"
              >
                <span className="block text-gray-600 font-semibold"><Link to={'/blog'}>Blogs</Link></span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 row-span-4">
              <img
                src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp"
                className="rounded-full"
                width="640"
                height="960"
                alt="shoes"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="640"
                alt="shoe"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-3">
              <img
                src="https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp"
                className="w-full h-full object-cover object-top rounded-xl"
                width="640"
                height="427"
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
