import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Tilt from "react-parallax-tilt";

const SummerOffer = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <section className='my-10 md:my-20'>
         <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
      
            <img className='w-full' src="https://i.ibb.co/MNyw9m4/discount-jpg.webp" alt="" data-aos="zoom-in"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
            />
            <div className='py-20  flex flex-col  justify-center items-center bg-base-200  ' data-aos="zoom-in"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true">

               <p className='text-md font-bold text-slate-500'>DISCOUNT</p>
                <i className=' text-3xl md:text-4xl lg:text-6xl pb-2 md:pb-4'> <Tilt>Summer 2023 </Tilt></i>
               <p className='text-lg font-semibold '>SALE <span className=' pl-1 font-bold text-xl'>50%</span></p>

            </div>
         </div>
      </section>
   );
};


export default SummerOffer;
