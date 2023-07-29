import React from 'react';
import CategoryMain from '../../Components/Cetegory/CategoryMain';
import NAvbar from '../../Components/NavBar/NAvbar';
import SliderTab from '../../Components/SliderITEm/SliderTab';
import Benner from '../../Components/Benner/Benner';

const Homepage = () => {
   return (
      <>
         <NAvbar></NAvbar>
         <Benner></Benner>
        <CategoryMain></CategoryMain>
        <SliderTab></SliderTab> 
      </>
   );
};

export default Homepage;