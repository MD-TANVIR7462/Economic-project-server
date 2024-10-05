import React from "react";

const ContactBenner = ({ name, subtitle, img }) => {
  return (
    <div
      className=" bg-cover bg-center  text-white py-[6%] md:py-[7%] lg:py-[8%%] "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl text-white font-bold mb-2 md:mb-4">
            {name}
          </h1>
          <p className="text-sm font-semibold  md:text-md mb-6 text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBenner;
