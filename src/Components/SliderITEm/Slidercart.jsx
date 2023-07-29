import React from 'react';
import { FaRegEye,FaCartPlus } from 'react-icons/fa';

const Slidercart = () => {
   return (
      <div className='mb-3 md:mb-0  '>
         <div

            className="relative  bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700"
         >
            <div className="group">
               <img
                  src="https://i.ibb.co/yRj0LXk/240-F-206745551-j-K5q-HRKl-T9o9-BCh-Tm1t09-K3-O5e-I4bwc-B.jpg"
                  alt=""
                  className="w-full  h-auto object-cover opacity-100 scale-100 group-hover:scale-105 transition-transform group-hover:opacity-100 duration-1000"
               />

               <div className="pb-6 absolute bottom-0  left-0 right-0  transform translate-y-full group-hover:translate-y-0 transition-all duration-1000">
                  
               <span className='flex justify-center items-center gap-5'>
               <button className="btn  pt-2 px-4 pb-1 text-2xl hover:text-blue-700 hover:scale-105 transition-all duration-500 "><FaRegEye></FaRegEye></button>
               <button className="btn  pt-2 px-4 pb-1 text-2xl hover:text-red-700 hover:scale-105 transition-all duration-500 "><FaCartPlus></FaCartPlus></button>
             
               </span>

               </div>
            </div>
         </div>
         <div className='flex justify-between pt-4 '>
           <span>
           <p className='text-xl text-[#999]'>Name</p>
            <p className='text-xl text-black'>Price</p>
           </span>
           <p>Rating</p>
         </div>
      </div>

   );
};

export default Slidercart;