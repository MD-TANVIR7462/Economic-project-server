import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Slidercart from "../SliderITEm/Slidercart";
import Loader from "../Loadin/Loader";

const Related_carosel = ({ products }) => {
  if (!products) {
    return <Loader />;
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuickView, setShowQuickView] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);

  const visibleProducts = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1380) return 4; // For large screens
    if (screenWidth >= 1024) return 3; // For tablets or medium screens
    if (screenWidth >= 768) return 2; // For smaller tablets
    if (screenWidth >= 508) return 2; // For smaller tablets
    return 1; // For mobile devices
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProducts() >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleProducts() : prevIndex - 1
    );
  };

  const handleKeyPress = (e, action) => {
    if (e.key === "Enter" || e.key === " ") {
      action();
    }
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPosition =
      e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPos;
    setCurrentTranslate(diff * 1.5); // Increased sensitivity
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate;

    if (Math.abs(movedBy) > 50) {
      // Reduced threshold for easier sliding
      if (movedBy > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setCurrentTranslate(0);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full  mx-auto px-4 py-8  "
      role="region"
      aria-label="Product Carousel"
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6 transition-all ease-out"
          style={{
            transform: `translateX(calc(-${
              currentIndex * (100 / visibleProducts())
            }% + ${currentTranslate}px))`,
          }}
          initial={false}
          animate={{ x: `-${currentIndex * (100 / visibleProducts())}%` }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 900, damping: 17 }}
              className="flex-none mx-auto w-full sm:w-[50%]   lg:w-[30%] xl:w-[24%]"
            >
              <Slidercart product={product} key={product._id} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({
          length: Math.ceil(products.length / visibleProducts()),
        }).map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex(index * visibleProducts())}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              currentIndex / visibleProducts() === index
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        onKeyPress={(e) => handleKeyPress(e, prevSlide)}
        className="absolute left-0 top-1/2  bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 "
        aria-label="Previous products"
      >
        <BsChevronLeft className="w-6 h-6 text-gray-800" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        onKeyPress={(e) => handleKeyPress(e, nextSlide)}
        className="absolute right-0 top-1/2  bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 "
        aria-label="Next products"
      >
        <BsChevronRight className="w-6 h-6 text-gray-800" />
      </motion.button>
    </div>
  );
};

export default Related_carosel;
