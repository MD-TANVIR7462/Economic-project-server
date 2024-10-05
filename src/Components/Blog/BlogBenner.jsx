import React from 'react';

const BlogBenner = () => {
   return (
      <div
      className=" bg-cover bg-center  text-white py-[6%] md:py-[7%] lg:py-[8%%] "
      style={{ backgroundImage: `url(${"https://i.ibb.co/GRfZWfy/b19.jpg"})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl text-white font-bold mb-2 md:mb-4">#Read More</h1>
          <p className="text-sm font-semibold  md:text-md mb-6 text-white">Read All Case Study About Our Product's</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default BlogBenner;