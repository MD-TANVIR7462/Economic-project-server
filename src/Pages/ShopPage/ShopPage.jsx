import React from 'react';
import ShopSlider from '../../Components/ShopPageComponents/ShopSLider/ShopSlider';
import ShopBenner from '../../Components/ShopPageComponents/Benner/ShopBenner';


const ShopPage = () => {
   return (
      <div className='my-0'>
         <ShopBenner></ShopBenner>
         <ShopSlider></ShopSlider>
     
      </div>
   );
};

export default ShopPage;