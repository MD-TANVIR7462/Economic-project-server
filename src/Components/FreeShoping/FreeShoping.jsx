import Tilt from "react-parallax-tilt";
import {
  FaCarAlt,
  FaRegMoneyBillAlt,
  FaLifeRing,
  FaCcStripe,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FreeShoping = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mb-3 md:mb-20 w-[92%] mx-auto gap-4 md:justify-items-center">
      <Tilt>
        <div
          className="mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start justify-center  md:gap-5 items-center "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <p className="text-4xl md:text-5xl text-[#ca1515] md:mb-3 mb-1 ">
            <FaCarAlt></FaCarAlt>
          </p>
          <span>
            <p className="font-semibold md:text-xl  text-lg">Free Shipping</p>
            <p className="text-slate-500 md:text-base text-sm font-medium">
              For all oder over $99
            </p>
          </span>
        </div>
      </Tilt>
      <Tilt>
        <div
          className="mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center justify-center "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <p className="text-4xl md:text-5xl text-[#ca1515] md:mb-3 mb-1 ">
            <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
          </p>
          <span className="">
            <p className="font-semibold md:text-xl  text-lg">Money Back Guarantee</p>
            <p className="text-slate-500 md:text-base text-sm font-medium">If good have Problems</p>
          </span>
        </div>
      </Tilt>
      <Tilt>
        <div
          className="mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <p className="text-4xl md:text-5xl text-[#ca1515] md:mb-3 mb-1 ">
            <FaLifeRing></FaLifeRing>
          </p>
          <span>
            <p className="font-semibold md:text-xl  text-lg">Online Support 24/7</p>
            <p className="text-slate-500 md:text-base text-sm font-medium">Dedicated support</p>
          </span>
        </div>
      </Tilt>
      <Tilt>
        <div
          className="mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start  md:gap-5 items-center  "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          <p className="text-4xl md:text-5xl text-[#ca1515] md:mb-3 mb-1 ">
            <FaCcStripe></FaCcStripe>{" "}
          </p>
          <span>
            <p className="font-semibold md:text-xl  text-lg">Payment Secure</p>
            <p className="text-slate-500 md:text-base text-sm font-medium">100% secure payment</p>
          </span>
        </div>
      </Tilt>
    </div>
  );
};

export default FreeShoping;
