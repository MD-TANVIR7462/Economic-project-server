import React from 'react';
import CategoryMain from '../../Components/Cetegory/CategoryMain';

import SliderTab from '../../Components/SliderITEm/SliderTab';
import Benner from '../../Components/Benner/Benner';
import SummerOffer from '../../Components/Summeroffer/SummerOffer';
import FreeShoping from '../../Components/FreeShoping/FreeShoping';



const Homepage = () => {
  
   return (
      <>
  
         <Benner></Benner>
         <CategoryMain></CategoryMain>
         <SliderTab></SliderTab>
         <SummerOffer></SummerOffer>
         <FreeShoping></FreeShoping>
      </>
   );
};

export default Homepage;