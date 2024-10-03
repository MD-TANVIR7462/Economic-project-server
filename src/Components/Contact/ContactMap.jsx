import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AiFillMail, AiFillPhone, AiFillInfoCircle } from "react-icons/ai";

const ContactMap = () => {
  const position = [22.37634937394888, 91.8192050679238]; // Latitude and Longitude of Hillview RA

  return (
    <div className="my-8  md:my-20 p-4 md:p-12 bg-base-200 shadow-2xl md:w-[90%] md:flex justify-around mx-auto items-center  ">
      <div className="mb-5 md:mb-0">
        <p className="text-lg md:text-2xl font-bold mb-1">GET IN TOUCH</p>
        <h1 className="text-xs md:text-sm  font-medium mb-4 md:mb-5">
          Visit One Of Our Agency Locations Or Contact us Today{" "}
        </h1>
        <p className=" md:text-lg font-bold  mb-1">Head office</p>
        <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600">
          <AiFillMail className="text-yellow-700"></AiFillMail>{" "}
          mdtanvir7462@gmail.com
        </p>
        <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600">
          <AiFillPhone className="text-green-500"></AiFillPhone>{" "}
          (+880)1998863753
        </p>
        <p className="flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600">
          {" "}
          <AiFillInfoCircle className="text-blue-500"></AiFillInfoCircle> Monday
          To Saturday,9.00 am to 10.00 pm
        </p>
      </div>

      <div className="h-[300px] md:h-[400px] w-full  md:w-[60%] z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.892942054237!2d91.82467993883522!3d22.361712225420437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8848da17af3%3A0xf53bba1f30c1534f!2sHillview%20Residential%20Area%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1727947730782!5m2!1sen!2sbd"
          width="600"
          height="450"
          className="w-full h-[300px] md:h-[411px]"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
