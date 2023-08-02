import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slidercart from '../../SliderITEm/Slidercart';
import { useParams } from 'react-router-dom';
import { flushSync } from 'react-dom';




const ShopSlider = () => {
  const {cetegory}=useParams()
  const cetegoryList = ["all","man","women","kid"]
  const ultimateCtegory = cetegoryList.indexOf(cetegory)
 
  const [activeTabIndex, setActiveTabIndex] = useState(ultimateCtegory);
  const [products, setProducts] = useState([]);
  const [man,setMEn] = useState([]);
  const [women,setWomen] = useState([])
  const [kid,setKid] = useState([]) 
  const [smallLength, setsmallLength] = useState([])
  const [manPruduct , setmanPruduct] = useState([])
  const [womanPruduct , setwomanPruduct] = useState([])
  const [kidPruduct , setKIdPruduct] = useState([])

//hid buttons//

  const [hideAll,setHideALL] = useState(false);
  const [hideMen,setHideMen] = useState(false);
  const [hidewomen,setHidewomen] = useState(false);
  const [hidekid,setHideKid] = useState(false);

  const handleTabSelect = (index) => {
    
    setActiveTabIndex(index);
  };
  useEffect(() => {
    fetch("../../../public/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setsmallLength(data.length > 20 ? data.slice(0, 20) : data)
        const men = data.filter(product => product.category === "man");
        const women = data.filter(product => product.category === "women")
        const kid = data.filter(product => product.category === "kids")
        setMEn(men)
        setWomen(women)
        setKid(kid)
        setmanPruduct(men.length >= 20 ? men.slice(0, 20) : men);
        setwomanPruduct(women.length>20? women.slice(0,20) : women)
        setKIdPruduct(kid.length>20?kid.slice(0,20) :kid)
      })

  }, [])



const loadAllData = () =>{
setsmallLength(products)
setHideALL(true)

}

const loadMenAll = ()=>{
  setmanPruduct(man)
  setHideMen(true)
}
const loadwoMenAll = ()=>{
  setwomanPruduct(women)
  setHidewomen(true)
  
}
const loadkidAll = ()=>{
  setKIdPruduct(kid)
  setHideKid(true)
}







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
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 md:px-8 md:py-3 rounded-full">
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
          <span >
            <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3'>
              {
                smallLength.map(product => <Slidercart product={product} key={product.id}></Slidercart>)
              }
         
       

            </div>
           <p className='text-center mt-12'>
           {
              hideAll || <button   onClick={loadAllData}    className="  w-24 md:w-32  relative md:px-5 px-4 py-1 md:py-2 text-sm md:text-base font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-400 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-pink-600 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
              <span className="relative ">Show ALL</span>
           </button> 
             }
           </p>
        
            </span>
          </TabPanel>
          <TabPanel>
       <span>
       <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3'>
              {
                manPruduct.map(product => <Slidercart product={product}  key={product.id}></Slidercart>)
              }

            </div>
            <p className='text-center mt-12'>
           {
           !hideMen && man.length>20 ? <button   onClick={loadMenAll}    className="  w-24 md:w-32  relative md:px-5 px-4 py-1 md:py-2 text-sm md:text-base font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-400 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-pink-600 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
              <span className="relative ">Show ALL</span>
           </button>  : ''
             }
           </p>
       </span>
          </TabPanel>
          <TabPanel>
            <span>
            <div className='grid md:grid-cols-4 md:gap-6 grid-cols-1 w-[90%] mx-auto gap-3 '>
              {
                womanPruduct.map(product => <Slidercart product={product} key={product.id}></Slidercart>)
              }
            </div>
            <p className='text-center mt-12'>
           {
           !hidewomen && women.length>20 ? <button   onClick={loadwoMenAll}    className="  w-24 md:w-32  relative md:px-5 px-4 py-1 md:py-2 text-sm md:text-base font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-400 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-pink-600 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
              <span className="relative ">Show ALL</span>
           </button>  : ''
             }
           </p>
            </span>
          </TabPanel>
          <TabPanel>
            <span>
            <div className='grid md:grid-cols-4 md:gap-6 gap-3 grid-cols-1 w-[90%] mx-auto '>
              {
                kidPruduct.map(product => <Slidercart product={product} key={product.id}></Slidercart>)
              }
            </div>
            <p className='text-center mt-12'>
           {
           !hidekid && kid.length>20 ? <button   onClick={loadkidAll}    className="  w-24 md:w-32  relative md:px-5 px-4 py-1 md:py-2 text-sm md:text-base font-medium text-white group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-pink-500 group-hover:bg-pink-400 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-pink-600 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-pink-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
              <span className="relative ">Show ALL</span>
           </button>  : ''
             }
           </p>
            </span>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopSlider;
