// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//     title: "Top Collection",
//     subtitle: "Discover the hottest trends",
//     description: "Explore our curated collection of top fashion pieces and accessories that define your style.",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//     title: "Accessories",
//     subtitle: "Complete your look",
//     description: "Find the perfect accessories to elevate your outfits, from bags to jewelry.",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//     title: "New Fashion",
//     subtitle: "Be Awesome Always",
//     description: "Stay ahead of the fashion curve with our new arrivals and timeless pieces.",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative h-[50dvh] xl:h-[80dvh] max-h-[900px] overflow-hidden">
//       <AnimatePresence initial={false} custom={currentSlide}>
//         <motion.div
//           key={currentSlide}
//           custom={currentSlide}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0"
//         >
//           <div
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-40" />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//               <motion.h1
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="text-5xl md:text-7xl font-bold mb-2"
//               >
//                 {slides[currentSlide].title}
//               </motion.h1>
//               <motion.p
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 className="text-xl md:text-2xl mb-4"
//               >
//                 {slides[currentSlide].subtitle}
//               </motion.p>
//               <motion.p
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="text-lg md:text-xl mb-8 max-w-xl text-center"
//               >
//                 {slides[currentSlide].description}
//               </motion.p>
//               <Link to={'/shop/all'}>
//                 <motion.button
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.8, duration: 0.7 }}
//                   className="bg-white text-black px-5 py-2 rounded-full font-semibold text-lg hover:bg-gray-200 flex items-center"
//                 >
//                   <FaShoppingCart className="mr-2" />
//                   Shop Now
//                 </motion.button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition duration-300"
//       >
//         <FaArrowLeft className="text-black text-2xl" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none transition duration-300"
//       >
//         <FaArrowRight className="text-black text-2xl" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Top Collection",
    subtitle: "Discover the hottest trends",
    description:
      "Explore our curated collection of top fashion pieces and accessories that define your style.",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Accessories",
    subtitle: "Complete your look",
    description:
      "Find the perfect accessories to elevate your outfits, from bags to jewelry.",
    buttonText: "Browse Accessories",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "New Fashion",
    subtitle: "Be Awesome Always",
    description:
      "Stay ahead of the fashion curve with our new arrivals and timeless pieces.",
    buttonText: "View New Arrivals",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="grid grid-cols-3">
      <div className="relative h-[55dvh] xl:h-[80dvh] max-h-[900px] overflow-hidden col-span-2">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold mb-2 drop-shadow-lg"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl mb-4 drop-shadow-md"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow-md"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <Link to={"/shop/all"}>
                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                    className="bg-white text-black px-5 py-2 rounded-full font-semibold text-lg hover:bg-gray-200 flex items-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Shop Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none transition duration-300"
        >
          <FaArrowLeft className="text-black text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 focus:outline-none transition duration-300"
        >
          <FaArrowRight className="text-black text-2xl" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-yellow-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      {/* <Gallery/> */}
    </div>
  );
};

export default HeroSection;
