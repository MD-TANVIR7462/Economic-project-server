import React from 'react';
import { FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsBenner from './DetailsBenner';

const ShowDetails = () => {
   const Product = useLoaderData()

   const { id,
      name,
      price,
      description,
      color,
      material,
      image,
      brand,
      rating,
      subcategory,
      category,
      Quantity,
      _id } = Product
   console.log(_id, name, price, description, color, material);


   const renderStars = (rating) => {
      const stars = [];
      for (let i = 1; i <= Math.floor(rating); i++) {
         stars.push(<FaStar key={i} className="text-yellow-400" />);
      }
      if (rating % 1 !== 0) {
         stars.push(
            <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
         );
      }
      for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
         stars.push(<FaStar key={i} className="text-gray-300" />);
      }
      return stars;
   };



   return (
      <div className=''>

         <DetailsBenner name={name} category={category} ></DetailsBenner>
         <div className='flex justify-center items-center  my-20 '>
            <div className=" card  md:py-8 md:px-14  bg-base-200   grid md:grid-cols-2 md:w-5/6 md:mx-auto card-side  shadow-xl p-2 m-2 ">

               <figure className='rounded'><img src={image} className=' p-2' alt="image" /></figure>

               <div className="card-body">
                  <h2 className="text-center font-bold text-2xl mb-3">{name}</h2>
                  <div className='md:flex  justify-center '><span className='text-base font-bold'>Ingradients : </span>
                     <p>{category}</p>
                     <p>{subcategory}</p>
                     <p>{brand}</p>
                  </div>
                  <p className=''> <span className='text-base font-bold'>Cooking-Mathod : </span> {description}</p>

                  <div className="card-actions  justify-center pt-3 flex ">
                     <p className="font-bold text-lg flex items-center"> <span className='mr-1'>{rating}</span>  {renderStars(rating)}

                     </p>


                     <button type="button" className="  text-2xl btn border-none px-4 py-3 rounded-lg text-white font-bold  bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950" ><FaHeart></FaHeart> </button>
                  </div>
               </div>


            </div>
         </div>




      </div>
   );
};

export default ShowDetails;