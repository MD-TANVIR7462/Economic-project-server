import React from 'react';

const BlogCards = ({img,title,}) => {
   return (
      <div className='mb-5 mt-2' >
         <div className="card items-center bg-pink-50 grid md:grid-cols-2 md:w-5/6 md:mx-auto card-side  shadow-xl p-2 m-2 md:px-8">

            <figure ><img src={img} className=' p-2 h-[250px] md:h-[500px] rounded-md' alt="Blog" /></figure>

            <div className="card-body px-4">
               <h2 className=" font-bold text-md md:text-2xl mb-3">{title}</h2>
              
               <p className='text-sm md:text-base text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam commodi quod odit ipsa laudantium numquam! Deserunt illum impedit animi eum consequatur libero hic fugiat soluta. Provident perferendis alias optio. </p>

               <p className='text-sm mt-1 md:text-base font-semibold md:font-bold '>CONTINUE READING .......</p>

            </div>
         </div>
       
      </div>
   );
};

export default BlogCards;


