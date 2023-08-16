import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { AiFillMail, AiFillPhone, AiFillInfoCircle } from "react-icons/ai";

const ContactMap = () => {
   const position = [22.37634937394888, 91.8192050679238]; // Latitude and Longitude of Hillview RA



   return (
      <div className='my-8  md:my-20 p-4 md:p-12 bg-slate-50 shadow-2xl md:w-[90%] md:flex justify-around mx-auto items-center '>

         <div className='mb-5 md:mb-0'>
            <p className='text-lg md:text-2xl font-bold mb-1'>GET IN TOUCH</p>
            <h1 className='text-xs md:text-sm  font-medium mb-4 md:mb-5'>Visit One Of Our Agency Locations Or Contact us Today </h1>
            <p className=' md:text-lg font-bold  mb-1'>Head office</p>
            <p className='flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600'><AiFillMail className='text-yellow-700'></AiFillMail> mdtanvir7462@gmail.com</p>
            <p className='flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600'><AiFillPhone className='text-green-500'></AiFillPhone> (+880)1998863753</p>
            <p className='flex items-center text-sm md:text-md gap-2 md:gap-4 font-semibold text-gray-600'> <AiFillInfoCircle className='text-blue-500'></AiFillInfoCircle> Monday To Saturday,9.00 am to 10.00 pm</p>
         </div>


        
            <div className='h-[300px] md:h-[400px] w-full md:w-[60%]' >
               <MapContainer center={position} zoom={15} style={{ width: '100%', height: '100%' }}>
                  <TileLayer
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                  />
                  <Marker position={position}>
                     <Popup>Hillview RA, Bayezid, Chittagong, Bangladesh</Popup>
                  </Marker>
               </MapContainer>
     
         </div>
      </div>
   );
};

export default ContactMap;