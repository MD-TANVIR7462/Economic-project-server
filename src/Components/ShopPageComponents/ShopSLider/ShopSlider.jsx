import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slidercart from "../../SliderITEm/Slidercart";
import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import Loader from "../../Loadin/Loader";
import PaginationMenu from "../../PaginationMenu/PaginationMenu";

const ShopSlider = () => {
  const { cetegory } = useParams();
  const cetegoryList = ["all", "man", "women", "kid"];
  const ultimateCtegory = cetegoryList.indexOf(cetegory);
  const [activeTabIndex, setActiveTabIndex] = useState(ultimateCtegory);
  const [productsmain, setProducts] = useState([]);
  const [man, setMEn] = useState([]);
  const [women, setWomen] = useState([]);
  const [kid, setKid] = useState([]);
  const [page, setPage] = useState(1); // New state for pagination
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default to large devices
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const { products, isLoading } = UseProducts();

  // Handle responsive number of items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(12);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (products) {
      setProducts(products);
      const men = products.filter((product) => product.category === "man");
      const women = products.filter((product) => product.category === "women");
      const kid = products.filter((product) => product.category === "kids");
      setMEn(men);
      setWomen(women);
      setKid(kid);
    }
  }, [products]);

  // Filter products based on search query and category
  const filteredProducts = (categoryProducts) => {
    return categoryProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Paginate the products
  const paginatedProducts = (categoryProducts) => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts(categoryProducts).slice(
      startIndex,
      startIndex + itemsPerPage
    );
  };

  // Handle pagination navigation
  const handleNextPage = (categoryProducts) => {
    if (
      page < Math.ceil(filteredProducts(categoryProducts).length / itemsPerPage)
    ) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    setPage(1); // Reset page to 1 on tab switch
  };

  return (
    <div className="my-3 md:my-8 mx-auto">
      <div>
        <Tabs
          selectedIndex={activeTabIndex}
          onSelect={(index) => handleTabSelect(index)}
        >
          <span className="md:flex md:justify-center px-5">
            <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg">
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
                    ? "border-b-4 border-[#FF2020] text-red-700 bg-red-50"
                    : ""
                }`}
              >
                Kid's
              </Tab>
            </TabList>
          </span>

          {/* Search bar */}
          <div className="flex justify-center md:mb-8 mb-6 md:mt-4 px-5">
            <input
              type="text"
              placeholder="Search products"
              className="w-3/4 md:w-1/4 px-4 py-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {isLoading && <Loader />}
          {!isLoading && products && (
            <>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {paginatedProducts(productsmain).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <PaginationMenu
                        item={productsmain}
                        filteredProducts={filteredProducts}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        setPage={setPage}
                        page={page}
                        itemsPerPage={itemsPerPage}
                      />
                    </div>
                  </div>
                </span>
              </TabPanel>
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {paginatedProducts(man).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <PaginationMenu
                        item={man}
                        filteredProducts={filteredProducts}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        setPage={setPage}
                        page={page}
                        itemsPerPage={itemsPerPage}
                      />
                    </div>
                  </div>
                </span>
              </TabPanel>

              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {paginatedProducts(women).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <PaginationMenu
                        item={women}
                        filteredProducts={filteredProducts}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        setPage={setPage}
                        page={page}
                        itemsPerPage={itemsPerPage}
                      />
                    </div>
                  </div>
                </span>
              </TabPanel>
              {/* // Kid's Products Tab Panel */}
              <TabPanel>
                <span>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3">
                    {paginatedProducts(kid).map((product) => (
                      <Slidercart
                        product={product}
                        key={product.id}
                      ></Slidercart>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <PaginationMenu
                        item={kid}
                        filteredProducts={filteredProducts}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                        setPage={setPage}
                        page={page}
                        itemsPerPage={itemsPerPage}
                      />
                    </div>
                  </div>
                </span>
              </TabPanel>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopSlider;
