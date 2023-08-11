import React from 'react';
import { useState } from 'react';
import Slidercart from '../SliderITEm/Slidercart';
import { useEffect } from 'react';

const Related = ({ sub, id }) => {
   // console.log(sub);
   const [finalSub, setFinalSub] = useState([])
   const[text,setText] = useState("")
   useEffect(() => {
      if (sub.length>4 ) {
         const filteredSub = sub.filter(single => single._id !== id);
         setText("Related Product's")
         setFinalSub(filteredSub.slice(0, 4));
        

      }

      else if (sub.length > 1 && sub.length <= 4) {
         const filteredSub2 = sub.filter(signle => signle._id !== id);
         setText("Related Product's")
         setFinalSub(filteredSub2);
   

      }
      else {
         setFinalSub([]);
         setText("NO Related Product's")
      }
   }, [sub, id]);

   // console.log(finalSub);
   return (
      <div className='my-16'>
         <h1 className='text-center text-2xl md:text-3xl font-bold mt-8 mb-6 md:mb-12 '>{text}</h1>
         <div className='flex flex-col md:flex-row  justify-center gap-2 md:gap-16 w-[90%] mx-auto ' >
            {
                finalSub.map(product => <Slidercart product={product} key={product._id}></Slidercart>) 
            }
         </div>

      </div>
   );
};

export default Related;