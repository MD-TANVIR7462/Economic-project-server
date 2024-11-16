import Tilt from "react-parallax-tilt";
import { FaCarAlt, FaRegMoneyBillAlt, FaLifeRing, FaCcStripe } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import { useEffect } from "react";

const features = [
  {
    icon: <FaCarAlt />,
    title: "Free Shipping",
    subtitle: "For all orders over $99",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Money Back Guarantee",
    subtitle: "If goods have problems",
  },
  {
    icon: <FaLifeRing />,
    title: "Online Support 24/7",
    subtitle: "Dedicated support",
  },
  {
    icon: <FaCcStripe />,
    title: "Payment Secure",
    subtitle: "100% secure payment",
  },
];

const FreeShopping = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-3 md:mb-20 w-[92%] mx-auto gap-4 md:justify-items-center">
      {features.map(({ icon, title, subtitle }, index) => (
        <Tilt key={index}>
          <motion.div
            className="mb-5 md:mb-0 flex flex-col md:flex-row text-center md:text-start justify-center md:gap-5 items-center"
            initial={{ opacity: 0 }}  // Start invisible
            animate={{ opacity: 1 }}  // Animate to fully visible
            transition={{ duration: 0.8, delay: index * 0.2 }} // Stagger animation with a slight delay
          >
            <p className="text-4xl md:text-5xl text-[#ca1515] md:mb-3 mb-1">{icon}</p>
            <span>
              <p className="font-semibold md:text-xl text-lg">{title}</p>
              <p className="text-slate-500 md:text-base text-sm font-medium">{subtitle}</p>
            </span>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
};

export default FreeShopping;
