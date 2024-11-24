import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Slidercart from "./Slidercart";

const Slider = ({ item }) => {
  const [setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [Space, setSpace] = useState(40);
  useEffect(() => {
    // Function to update slidesPerView based on window width
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 568) {
        setSlidesPerView(1); // Show only 1 slide on phone devices
        setSpace(50);
      } else if (window.innerWidth <= 1150) {
        setSlidesPerView(2); // Show only 1 slide on phone devices
        setSpace(50);
      } 
      else if (window.innerWidth <= 1500) {
        setSlidesPerView(3); // Show only 1 slide on phone devices
        setSpace(35);
      }
      else {
        setSlidesPerView(4); // Show 3 slides on other devices
        setSpace(25);
      }
    };

    // Initial update
    updateSlidesPerView();

    // Add event listener to update on window resize
    window.addEventListener("resize", updateSlidesPerView);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="  mx-auto ">
      <div className="">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={slidesPerView}
          centeredSlides={false}
          spaceBetween={Space}
          pagination={{
            type: "",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          {item?.map((product) => (
            <SwiperSlide key={product._id}>
              <Slidercart product={product} key={product._id}></Slidercart>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
