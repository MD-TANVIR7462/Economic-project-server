import React from 'react';

const DetailsBenner = ({ name, category }) => {
 
  return (
    <div
      className="relative bg-cover bg-center  py-[6%]    "
      style={{ backgroundImage: `url(${"https://i.ibb.co/ByRXQff/banner-1-1.jpg"})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold  md:mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-900 animate-gradient-x ">{name}</h1>
          <p className="text-lg md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x text-center ">For <span>{category}</span></p>

        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
  );
};

export default DetailsBenner;