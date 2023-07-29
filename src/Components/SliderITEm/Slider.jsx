
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Slidercart from './Slidercart';


const Slider = () => {
  const [setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [Space,setSpace] =useState(40)
  useEffect(() => {
    // Function to update slidesPerView based on window width
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(2); // Show only 1 slide on phone devices
        setSpace(10)
      } else {
        setSlidesPerView(3); // Show 3 slides on other devices
        setSpace(40)
      }
    };

    // Initial update
    updateSlidesPerView();

    // Add event listener to update on window resize
    window.addEventListener('resize', updateSlidesPerView);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);



  return (
    <div className=' w-[90%] mx-auto '>
      <div className=''>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={slidesPerView}
          centeredSlides={false}
          spaceBetween={Space}


          pagination={{
            type: '',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >


          <SwiperSlide>

            <Slidercart></Slidercart>

          </SwiperSlide>
          <SwiperSlide><Slidercart></Slidercart></SwiperSlide>
          <SwiperSlide><Slidercart></Slidercart></SwiperSlide>
          <SwiperSlide><Slidercart></Slidercart></SwiperSlide>
          <SwiperSlide><Slidercart></Slidercart></SwiperSlide>


        </Swiper>


      </div>
    </div>
  );
};

export default Slider;



