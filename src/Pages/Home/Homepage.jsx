import React from "react";
import CategoryMain from "../../Components/Cetegory/CategoryMain";
import SliderTab from "../../Components/SliderITEm/SliderTab";
import Banner2 from "../../Components/Benner/Banner2";
import SummerOffer from "../../Components/Summeroffer/SummerOffer";
import FreeShoping from "../../Components/FreeShoping/FreeShoping";
import UseTitle from "../../Components/Hooks/UseTitle";
import TestimonialsSection from "../../Components/Gelery/TestimonialsSection";


const Homepage = () => {
  return (
    <>
      {UseTitle("HOME")}
      {/* <Benner></Benner> */}
      <Banner2></Banner2>
      <CategoryMain></CategoryMain>
      <SliderTab></SliderTab>
      <TestimonialsSection></TestimonialsSection>
      <SummerOffer></SummerOffer>
      <FreeShoping></FreeShoping>
    </>
  );
};

export default Homepage;
