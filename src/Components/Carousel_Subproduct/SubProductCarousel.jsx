import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slidercart from "../SliderITEm/Slidercart";

const RelatedProductCarousel = ({ finalSub: products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const getVisibleProducts = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1280) return 4; // xl
    if (windowWidth >= 1024) return 3; // lg
    return 2; // md
  };

  const [productsPerView, setProductsPerView] = useState(getVisibleProducts());

  useEffect(() => {
    const handleResize = () => {
      setProductsPerView(getVisibleProducts());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerView >= products.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - productsPerView : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div
      className="relative  px-4 py-8 "
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-label="Related Products Carousel"
    >
      <div className="overflow-hidden border  mx-auto">
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * (100 / productsPerView)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <AnimatePresence>
            {products.map((product) => (
              <Slidercart product={product} key={product._id}></Slidercart>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        aria-label="Previous products"
      >
        <BsChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        aria-label="Next products"
      >
        <BsChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RelatedProductCarousel;
