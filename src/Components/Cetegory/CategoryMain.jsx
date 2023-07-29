import React from 'react';
import Cetegory from './Cetegory';

const CategoryMain = () => {
   const categoriesData = [
      {
        image:
          "https://i.ibb.co/CKk6nYD/240-F-90886459-Yv7-Cyp3d-Hg-QUg-Yr-Ow-F6m-HQBt-Eohe1z3-P.jpghttps://i.ibb.co/CKk6nYD/240-F-90886459-Yv7-Cyp3d-Hg-QUg-Yr-Ow-F6m-HQBt-Eohe1z3-P.jpg",
        title: "Men's Fashion",
        Cetegoryname: "men",
        id : 1
      },
      {
        image:
          "https://i.ibb.co/hF6vM3s/240-F-368881299-zu-SAOta-Jgtj3-XLAS0a-HNm6tk-Nh8-WSoh-H.jpg",
        title: "Woman's Fashion",
        Cetegoryname: "women",
        id : 2
      },
      {
        image: "https://i.ibb.co/9H74qtP/istockphoto-1295801745-612x612.jpg",
        title: "Kid's Fashion",
        Cetegoryname: "kid",
        id : 3
      },
    ];
  
   return (
      <div className=' w-[93%] md:w-[90%] mx-auto md:gap-5 grid grid-cols-1 md:grid-cols-3 my-6 md:my-10'>
     
      {
         categoriesData.map(data => <Cetegory data={data} key={data.id}></Cetegory> )
      }
      
      </div>
   );
};

export default CategoryMain;






 