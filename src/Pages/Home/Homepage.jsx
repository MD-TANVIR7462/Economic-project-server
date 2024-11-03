import React from "react";
import CategoryMain from "../../Components/Cetegory/CategoryMain";
import SliderTab from "../../Components/SliderITEm/SliderTab";
import SummerOffer from "../../Components/Summeroffer/SummerOffer";
import FreeShoping from "../../Components/FreeShoping/FreeShoping";
import UseTitle from "../../Components/Hooks/UseTitle";
import TestimonialsSection from "../../Components/Gelery/TestimonialsSection";
import PromotionalSection from "../../Components/LandingSection/Landing";
import NewBanner_2 from "../../Components/Benner/New_Banner/newBanner2";


const Homepage = () => {
  return (
    <>
      {UseTitle("HOME")}
      <NewBanner_2/>
      <CategoryMain></CategoryMain>
      <PromotionalSection/>
      <SliderTab></SliderTab>
      <TestimonialsSection></TestimonialsSection>
      <SummerOffer></SummerOffer>
      <FreeShoping></FreeShoping>
    </>
  );
};

export default Homepage;
