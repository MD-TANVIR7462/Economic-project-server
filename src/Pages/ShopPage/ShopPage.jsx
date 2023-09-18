import React from 'react';
import ShopSlider from '../../Components/ShopPageComponents/ShopSLider/ShopSlider';
import ShopBenner from '../../Components/ShopPageComponents/Benner/ShopBenner';
import UseTitle from '../../Components/Hooks/UseTitle';


const ShopPage = () => {
   return (
      <div className='my-0'>
         {UseTitle("SHOP")}
         <ShopBenner></ShopBenner>
         <ShopSlider></ShopSlider>
     
      </div>
   );
};

export default ShopPage;