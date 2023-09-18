import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import BennerT from "./BennerT";
import BennerMEn from "./BennerMEn";

const Benner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
          <BennerT img={"https://i.ibb.co/Cn0ccL6/h1-hero2-jpg.webp"}></BennerT>
        </SwiperSlide>
         <SwiperSlide>
          <BennerMEn
            img={"https://i.ibb.co/ZKcBXnk/h1-hero1-jpg.webp"}
          ></BennerMEn>
        </SwiperSlide>
      
       
      </Swiper>
    </>
  );
};

export default Benner;
