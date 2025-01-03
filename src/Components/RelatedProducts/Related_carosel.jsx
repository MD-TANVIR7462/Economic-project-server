import React from 'react';
import Slider from '../SliderITEm/Slider';

const Related_carosel = ({products}) => {
  return (
    <div className='my-[2.5%]'>
      <Slider item={products} />
    </div>
  );
};

export default Related_carosel;