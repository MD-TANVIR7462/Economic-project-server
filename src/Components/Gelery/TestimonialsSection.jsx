import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import SwipeableViews from "react-swipeable-views";

const testimonialsData = [
  {
    id: 1,
    name: "TANVIR",
    position: "Fashion Blogger",
    text: "Exceptional clothing quality and on-time delivery, making every purchase a delightful experience.",
    image: "https://i.ibb.co/2W6vGF4/IMG-8114-2-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Fashion Designer",
    text: "Top-notch customer service and trendy clothing choices, making shopping here a pleasure.",
    image:
      "https://i.ibb.co/YdbCBYS/240-F-224951162-K8-Nv05-Esedg-Udzw-Uprujo-FX8sy-Cojs-Cu.jpg",
  },
  {
    id: 3,
    name: "David Johnson",
    position: "Happy Customer",
    text: "My fashion destination for quality clothing, prompt shipping, and unbeatable style.",
    image:
      "https://i.ibb.co/Gd146dc/240-F-617942260-gq2ms-Ocduq6-V0k9-Ea-Up-Z0r-U3m-Gj-Am-Klx.jpg",
  },
  {
    id: 4,
    name: "David Johnson",
    position: "Happy Customer",
    text: "Wide variety of stylish options; this website has become my go-to for all my fashion needs.",
    image:
      "https://i.ibb.co/hXmmwCH/240-F-622120265-HY3bi4i0-DNk-Edw-Q4-Rd-ODi3p1-Ac0-A9-NAu.jpg",
  },
  {
    id: 5,
    name: "NICK ",
    position: "Happy Customer",
    text: "Reliable source for chic outfits; I keep coming back for their unbeatable deals.",
    image: "https://i.ibb.co/WnRX98f/photo-1566753323558-f4e0952af115.jpg",
  },
  {
    id: 6,
    name: "David ",
    position: "Happy Customer",
    text: "Reliable source for chic outfits; I keep coming back for their unbeatable deals.",
    image: "https://i.ibb.co/gwRjDRn/istockphoto-1178744445-612x612.jpg",
  },
];

const TestimonialsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) =>
        prevStep === testimonialsData.length - 1 ? 0 : prevStep + 1
      );
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Parallax bgImage="https://i.ibb.co/Zh0pSWb/b4.jpg " strength={400}>
      <div className="bg-opacity-70 bg-gray-900 py-16 ">
        <div className="container mx-auto text-center relative">
          <h2 className="text-lg md:text-2xl font-semibold md:font-bold md:mb-8 mb-4">
            What Our Customers Say
          </h2>
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.id} className="text-white">
                <div className="bg-opacity-70 bg-white p-4 md:p-12 rounded-lg text-left text-gray-800 mx-auto max-w-[90%]  md:max-w-xl">
                  <div className="md:mb-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 md:w-16 h-12 md:h-16 rounded-full inline-block mr-4 mb-3"
                    />
                    <p className="inline-block align-middle text-gray-500 text-sm md:text-base ">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 md:text-base text-sm ">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            ))}
          </SwipeableViews>
        </div>
      </div>
    </Parallax>
  );
};

export default TestimonialsSection;
