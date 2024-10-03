import React from 'react';

const ContactBenner = ({name,subtitle,img,}) => {
   return (
      <div
      className=" bg-cover bg-center  text-white py-[7%] md:py-[10%]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl text-white font-bold mb-2 md:mb-4">{name}</h1>
          <p className="text-sm font-semibold  md:text-md mb-6 text-white">{subtitle}</p>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default ContactBenner;