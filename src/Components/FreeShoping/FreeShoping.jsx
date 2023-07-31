import Tilt from "react-parallax-tilt";
import { FaCarAlt, FaRegMoneyBillAlt, FaLifeRing, FaCcStripe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FreeShoping = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <div className='grid grid-cols-1 md:grid-cols-4 mb-20 w-[92%] mx-auto gap-4 md:justify-items-center' >
         <Tilt>
            <div className='mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start justify-center  md:gap-5 items-center ' data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true" >
               <p className='text-5xl text-[#ca1515] mb-3 '><FaCarAlt></FaCarAlt></p>
               <span>
                  <p className='font-semibold text-2xl  md:text-xl'>Free Shipping</p>
                  <p className='text-slate-500 text-xl md:text-base font-medium'>For all oder over $99</p>
               </span>
            </div>
         </Tilt>
         <Tilt>
            <div className='mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center justify-center ' data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true">
               <p className='text-5xl text-[#ca1515] mb-3 '><FaRegMoneyBillAlt></FaRegMoneyBillAlt></p>
               <span className=''>
                  <p className='font-semibold text-xl'>Money Back Guarantee</p>
                  <p className='text-slate-500 font-medium'>If good have Problems</p>
               </span>
            </div>
         </Tilt>
         <Tilt>
            <div className='mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center ' data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true">
               <p className='text-5xl text-[#ca1515] mb-3 '><FaLifeRing></FaLifeRing></p>
               <span>
                  <p className='font-semibold text-xl'>Online Support 24/7</p>
                  <p className='text-slate-500 font-medium'>Dedicated support</p>
               </span>
            </div>
         </Tilt>
         <Tilt>
            <div className='mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center  ' data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true">
               <p className='text-5xl text-[#ca1515] mb-3 '><FaCcStripe></FaCcStripe> </p>
               <span>
                  <p className='font-semibold text-xl'>Payment Secure</p>
                  <p className='text-slate-500 font-medium'>100% secure payment</p>
               </span>
            </div>
         </Tilt>
      </div>
   );
};

export default FreeShoping;