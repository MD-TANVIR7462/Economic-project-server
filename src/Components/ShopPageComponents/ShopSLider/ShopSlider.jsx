import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slidercart from "../../SliderITEm/Slidercart";
import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import Loader from "../../Loadin/Loader";
const ShopSlider = () => {
  const { cetegory } = useParams();
  const cetegoryList = ["all", "man", "women", "kid"];
  const ultimateCtegory = cetegoryList.indexOf(cetegory);

  const [activeTabIndex, setActiveTabIndex] = useState(ultimateCtegory);
  const [productsmain, setProducts] = useState([]);
  const [man, setMEn] = useState([]);
  const [women, setWomen] = useState([]);
  const [kid, setKid] = useState([]);
  const [smallLength, setsmallLength] = useState([]);
  const [manPruduct, setmanPruduct] = useState([]);
  const [womanPruduct, setwomanPruduct] = useState([]);
  const [kidPruduct, setKIdPruduct] = useState([]);

  const [hideAll, setHideALL] = useState(false);
  const [hideMen, setHideMen] = useState(false);
  const [hidewomen, setHidewomen] = useState(false);
  const [hidekid, setHideKid] = useState(false);

  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  const { products, isLoading } = UseProducts();

  useEffect(() => {
    if (products) {
      setProducts(products);
      setsmallLength(products?.length > 20 ? products.slice(0, 20) : products);
      const men = products?.filter((product) => product.category === "man");
      const women = products?.filter((product) => product.category === "women");
      const kid = products?.filter((product) => product.category === "kids");
      setMEn(men);
      setWomen(women);
      setKid(kid);
      setmanPruduct(men?.length >= 20 ? men.slice(0, 20) : men);
      setwomanPruduct(women?.length > 20 ? women.slice(0, 20) : women);
      setKIdPruduct(kid?.length > 20 ? kid.slice(0, 20) : kid);
    }
  }, [products]);

  // Filter products based on search query and category
  const filteredProducts = (categoryProducts) => {
    return categoryProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Load all products for a category
  const loadAllData = () => {
    setsmallLength(productsmain);
    setHideALL(true);
  };

  const loadMenAll = () => {
    setmanPruduct(man);
    setHideMen(true);
  };

  const loadwoMenAll = () => {
    setwomanPruduct(women);
    setHidewomen(true);
  };

  const loadkidAll = () => {
    setKIdPruduct(kid);
    setHideKid(true);
  };

  return (
    <div className=" my-3 md:my-8 mx-auto">
      <div>
        <Tabs
          selectedIndex={activeTabIndex}
          onSelect={(index) => handleTabSelect(index)}
        >
          <span className="md:flex md:justify-center  px-5">
            <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg  ">
              <Tab
                className={`cursor-pointer text-sm md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                  activeTabIndex === 0
                    ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                    : ""
                }`}
              >
                All
              </Tab>
              <Tab
                className={`cursor-pointer text-sm md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                  activeTabIndex === 1
                    ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                    : ""
                }`}
              >
                Male
              </Tab>
              <Tab
                className={`cursor-pointer text-sm md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                  activeTabIndex === 2
                    ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                    : ""
                }`}
              >
                Female
              </Tab>
              <Tab
                className={`cursor-pointer text-sm md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${
                  activeTabIndex === 3
                    ? " border-[#FF2020] text-red-700 bg-red-400"
                    : ""
                }`}
              >
                Kid's
              </Tab>
            </TabList>
          </span>

          {/* Search bar */}
          <div className="flex justify-center md:mb-8 mb-6   md:mt-4 px-5">
            <input
              type="text"
              placeholder="Search products"
              className="w-3/4  md:w-1/4 px-4 py-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {isLoading && <Loader />}
          {!isLoading ? (
            <>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {filteredProducts(smallLength).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <p className="text-center mt-12">
                    {hideAll || (
                      <button
                        onClick={loadAllData}
                        type="submit"
                        className="rounded px-5 py-2.5 overflow-hidden group bg-base-300 relative hover:bg-gradient-to-r hover:from-base-300 hover:to-base-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-base-300 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Show All</span>
                      </button>
                    )}
                  </p>
                </span>
              </TabPanel>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {filteredProducts(manPruduct).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <p className="text-center mt-12">
                    {!hideMen && man.length > 20 ? (
                      <button
                        onClick={loadMenAll}
                        type="submit"
                        className="rounded px-5 py-2.5 overflow-hidden group bg-base-300 relative hover:bg-gradient-to-r hover:from-base-300 hover:to-base-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-base-300 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Show All</span>
                      </button>
                    ) : (
                      ""
                    )}
                  </p>
                </span>
              </TabPanel>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {filteredProducts(womanPruduct).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <p className="text-center mt-12">
                    {!hidewomen && women.length > 20 ? (
                      <button
                        onClick={loadwoMenAll}
                        type="submit"
                        className="rounded px-5 py-2.5 overflow-hidden group bg-base-300 relative hover:bg-gradient-to-r hover:from-base-300 hover:to-base-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-base-300 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Show All</span>
                      </button>
                    ) : (
                      ""
                    )}
                  </p>
                </span>
              </TabPanel>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-4 md:gap-6 gap-3 grid-cols-1 w-[90%] mx-auto">
                    {filteredProducts(kidPruduct).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <p className="text-center mt-12">
                    {!hidekid && kid.length > 20 ? (
                      <button
                        onClick={loadkidAll}
                        type="submit"
                        className="rounded px-5 py-2.5 overflow-hidden group bg-base-300 relative hover:bg-gradient-to-r hover:from-base-300 hover:to-base-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-base-300 transition-all ease-out duration-300"
                      >
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Show All</span>
                      </button>
                    ) : (
                      ""
                    )}
                  </p>
                </span>
              </TabPanel>
            </>
          ) : (
       <Loader/>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopSlider;
