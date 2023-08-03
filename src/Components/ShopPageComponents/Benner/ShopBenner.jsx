import React from 'react';

const ShopBenner = () => {
   return (
      <div
      className="relative bg-cover bg-center text-white py-20 md:py-52"
      style={{ backgroundImage: `url(${"https://i.ibb.co/8MT9p8J/hero4.png"})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Sale</h1>
          <p className="text-lg md:text-xl mb-6">Up to 50% Off</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 md:px-8 py-2 md:py-3 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default ShopBenner;