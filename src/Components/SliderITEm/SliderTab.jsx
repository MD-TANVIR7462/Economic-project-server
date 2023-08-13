import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from './Slider';
import UseProducts from '../Hooks/UseProducts';

const SliderTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
 const [products,setProducts] = useState([])

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };
const {products:Data,refech,isloading}=UseProducts()
useEffect(()=>{
if(Data){
  setProducts(Data)
}
},[Data])




  const men = products?.filter(product=>product.category==="man")
  const women = products?.filter(product=>product.category==="women")
  const kid= products?.filter(product=>product.category==="kids")
  const proDucts = products 
  // console.log(products,men,kid,women);
 

  return (
    <div className='w-[90%]  my-16 md:my-32 mx-auto' >
      <div>
        <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect} >
         <span className='md:flex md:justify-between mb-8'>
         <h2 className=' text-2xl md:text-4xl font-bold text-center md:text-start'>Trending This Week</h2>
          <TabList className="flex justify-center md:justify-normal md:space-x-4 p-2 rounded-lg mb-5 ">
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
              Male
            </Tab>
            <Tab
              className={`cursor-pointer text-md md:text-xl font-semibold px-4 py-2 transition-colors duration-300 ease-in-out border-b-4 border-transparent hover:border-[#FF2020] ${activeTabIndex === 2 ? 'border-b-4 border-[#FF2020] text-red-700 bg-red-50' : ''
                }`}
            >
             Female
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
           
           <Slider item={proDucts} key={1}></Slider>
          
          </TabPanel>
          <TabPanel>
            <Slider item={men} key={2}></Slider>
          </TabPanel>
          <TabPanel>
            <Slider item={women} key={3}></Slider>
          </TabPanel>
          <TabPanel>
            <Slider item={kid} key={4}></Slider>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SliderTab;
