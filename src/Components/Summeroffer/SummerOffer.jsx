import React from 'react';

const SummerOffer = () => {
   return (
      <section className='mb-16'>
         <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
            <img className='w-full' src="https://i.ibb.co/MNyw9m4/discount-jpg.webp" alt="" />
            <div className='py-20  flex flex-col  justify-center items-center bg-[#f4f4f4]'>

              <p className='text-md font-bold text-slate-500'>DISCOUNT</p>
               <i className='text-red-600 text-4xl md:text-6xl pb-2 md:pb-4'>Summer 2023</i>
               <p className='text-lg font-semibold text-slate-500'>SALE <span className='text-red-600 pl-1 font-bold text-xl'>50%</span></p>
        
              <span className='mt-8'>
              <button className="btn w-32 text-sm md:text-md md:w-48 text-center btn-outline border-0 border-b-4 md:mt-4">Order Now</button>
              </span>
            </div>
         </div>
      </section>
   );
};


export default SummerOffer;
