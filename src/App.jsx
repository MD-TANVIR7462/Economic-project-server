import React from 'react';
import Benner from './Components/Benner/Benner';
import NAvbar from './Components/NavBar/NAvbar';
import CategoryMain from './Components/Cetegory/CategoryMain';
import Slider from './Components/SliderITEm/Slider';



const App = () => {
  return (
    <div>
      <NAvbar></NAvbar>
      <Benner></Benner>
      <CategoryMain></CategoryMain>
      <Slider></Slider>
      
    
      
    </div>
  );
};

export default App;