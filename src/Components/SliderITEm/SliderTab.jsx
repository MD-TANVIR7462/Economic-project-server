import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion"; // Import motion
import Slider from "./Slider";
import UseProducts from "../Hooks/UseProducts";
import Loader from "../Loadin/Loader";

const SliderTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  const { products: Data } = UseProducts();

  useEffect(() => {
    if (Data) {
      setProducts(Data);
    }
  }, [Data]);

  const men = products?.filter((product) => product.category === "man");
  const women = products?.filter((product) => product.category === "women");
  const kid = products?.filter((product) => product.category === "kids");
  const proDucts = products;

  // Define animation properties
  const animationProps = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-[90%] mx-auto ">
      <div className=" my-[5%] max-h-full ">
        <div>
          <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
            <span className="md:flex md:justify-between mb-8">
              <h2 className=" text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x text-center md:text-start">
                Trending This Week
                {/* <motion.span
                  className="absolute -bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                /> */}
              </h2>
              <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg mb-5">
                <Tab
                  className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 0
                      ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                      : ""
                  }`}
                >
                  All
                </Tab>
                <Tab
                  className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 1
                      ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                      : ""
                  }`}
                >
                  Male
                </Tab>
                <Tab
                  className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 2
                      ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                      : ""
                  }`}
                >
                  Female
                </Tab>
                <Tab
                  className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                    activeTabIndex === 3
                      ? " border-[#FF2020] text-red-700 bg-red-400"
                      : ""
                  }`}
                >
                  Kid's
                </Tab>
              </TabList>
            </span>

            {products.length > 0 ? (
              <>
                <TabPanel>
                  <motion.div {...animationProps} key={activeTabIndex}>
                    <Slider item={proDucts} />
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <motion.div {...animationProps} key={activeTabIndex}>
                    <Slider item={men} />
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <motion.div {...animationProps} key={activeTabIndex}>
                    <Slider item={women} />
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <motion.div {...animationProps} key={activeTabIndex}>
                    <Slider item={kid} />
                  </motion.div>
                </TabPanel>
              </>
            ) : (
              <Loader />
            )}
          </Tabs>
        </div>
      </div>
      <h2 className=" text-2xl mb-[2%] md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x text-center md:text-start">
        What Our Customers Say
      </h2>
    </div>
  );
};

export default SliderTab;
