import React from 'react';

const SheardBenner = ({name,subtitle,img}) => {
   return (
      <div
      className="relative bg-cover bg-center  py-16  md:py-20  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl font-bold  md:mb-4 uppercase">{name}</h1>
          <p className="text-lg md:text-2xl font-semibold mb-6 text-white"># <span>{subtitle}</span></p>
         
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default SheardBenner;