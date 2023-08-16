import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { AiFillMail, AiFillPhone, AiFillInfoCircle } from "react-icons/ai";

const ContactMap = () => {
   const position = [22.37634937394888, 91.8192050679238]; // Latitude and Longitude of Hillview RA

   const mapStyle = {
      width: '50%',
      height: '400px',

   };


   return (
      <div className=' my-20 bg-slate-50 shadow-2xl w-[90%] flex justify-around mx-auto items-center '>

         <div>
            <p className='text-2xl font-bold mb-1'>GET IN TOUCH</p>
            <h1 className='text-sm font-medium mb-5'>Visit One Of Our Agency Locations Or Contact us Today </h1>
            <p className='text-lg font-bold  mb-1'>Head office</p>
            <p className='flex items-center  gap-4 font-semibold text-gray-600'><AiFillMail className='text-yellow-700'></AiFillMail> mdtanvir7462@gmail.com</p>
            <p className='flex items-center  gap-4 font-semibold text-gray-600'><AiFillPhone className='text-green-500'></AiFillPhone> (+880)1998863753</p>
            <p className='flex items-center  gap-4 font-semibold text-gray-600'> <AiFillInfoCircle className='text-blue-500'></AiFillInfoCircle> Monday To Saturday,9.00 am to 10 pm</p>
         </div>


        
            <div style={mapStyle}>
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