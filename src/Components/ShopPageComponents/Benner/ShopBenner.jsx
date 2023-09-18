import React from 'react';

const ShopBenner = () => {
   return (
      <div
      className="relative bg-cover bg-center text-white pt-32 pb-20 md:py-52"
      style={{ backgroundImage: `url(${"https://i.ibb.co/8MT9p8J/hero4.png"})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl text-[#168a73] font-bold mb-2 md:mb-4">Summer Sale</h1>
          <p className="text-md font-semibold  md:text-xl mb-6 text-black">Up to 50% Off</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default ShopBenner;