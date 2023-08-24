import React from 'react';

const DetailsBenner = ({ name, category }) => {
 
  return (
    <div
      className="relative bg-cover bg-center  pt-32 pb-20 md:py-48  "
      style={{ backgroundImage: `url(${"https://i.ibb.co/ByRXQff/banner-1-1.jpg"})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold  md:mb-4 uppercase text-[#168a73]">{name}</h1>
          <p className="text-lg md:text-3xl font-semibold mb-6 text-black">For <span>{category}</span></p>

        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
  );
};

export default DetailsBenner;