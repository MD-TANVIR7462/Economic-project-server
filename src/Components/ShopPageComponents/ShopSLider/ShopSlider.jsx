import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slidercart from '../../SliderITEm/Slidercart';
import { useParams } from 'react-router-dom';




const ShopSlider = () => {
  const {cetegory}=useParams()
  const cetegoryList = ["all","man","women","kid"]
  const ultimateCtegory = cetegoryList.indexOf(cetegory)
 
console.log(ultimateCtegory)
  const [activeTabIndex, setActiveTabIndex] = useState(ultimateCtegory);
  const [products, setProducts] = useState([]);
  const [smallLength, setsmallLength] = useState([])

  const handleTabSelect = (index) => {
    
    setActiveTabIndex(index);
  };
  useEffect(() => {
    fetch("../../../public/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        if (data.length > 20) {
          setsmallLength(data.slice(0, 20));
        } else {
          setsmallLength(data);
        }
      })

  }, [])


  console.log(smallLength)

  const men = products.filter(product => product.category === "man")
  const women = products.filter(product => product.category === "women")
  const kid = products.filter(product => product.category === "kids")



  return (
    <div className=' my-16 md:my-32 mx-auto' >


      <div
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${"https://i.ibb.co/cYCj6t9/top-view-online-shopping-concept-with-credit-card-smart-phone-computer-isolated-office-yellow-table.jpg"})` }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Sale</h1>
            <p className="text-lg md:text-xl mb-6">Up to 50% Off</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
        />
      </div>

      <div>
        <Tabs selectedIndex={activeTabIndex} onSelect={(index)=>handleTabSelect(index)} >
            {/* defaultIndex={activeTabIndex}  selectedindex also can use use as defaultindex ei 2 ta same kaj kore***** */}
          <span className='md:flex md:justify-center mt-24 px-5'>

            <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg md:mb-8 ">
              <Tab
                className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${activeTabIndex === 0 ? 'border-b-4 border-[#FF2020] text-red-700 bg-red-50' : ''
                  }`}
              >
                All
              </Tab>
              <Tab
                className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${activeTabIndex === 1 ? 'border-b-4 border-[#FF2020] text-red-700 bg-red-50' : ''
                  }`}
              >
                Men
              </Tab>
              <Tab
                className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${activeTabIndex === 2 ? 'border-b-4 border-[#FF2020] text-red-700 bg-red-50' : ''
                  }`}
              >
                Women
              </Tab>
              <Tab
                className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${activeTabIndex === 3 ? ' border-[#FF2020] text-red-700 bg-red-400' : ''
                  }`}
              >
                Kid's
              </Tab>
            </TabList>
          </span>

          <TabPanel>
            <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3'>
              {
                smallLength.map(product => <Slidercart product={product}></Slidercart>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3'>
              {
                men.map(product => <Slidercart product={product}></Slidercart>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3 '>
              {
                women.map(product => <Slidercart product={product}></Slidercart>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid md:grid-cols-4 md:gap-6 gap-3 grid-cols-1 w-[90%] mx-auto '>
              {
                kid.map(product => <Slidercart product={product}></Slidercart>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopSlider;
