// import React from 'react';

// const MyProducts = () => {
//    return (
//       <div>

//       </div>
//    );
// };

// export default MyProducts;

import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaRegTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Components/Provider/Authprovider';
import AddaProductBenner from '../AddaProduct/AddaProductBenner';


const MyProducts = () => {
   const [products, setProduct] = useState([]);
   const [feedback, Setfeedback] = useState('')
   const { user } = useContext(AuthContext);
   const navigate = useNavigate()

   useEffect(() => {
      fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setProduct(data);
         });
   }, [user]);


   // const updateDetails = (id) => {
   //    navigate(`/dashboard/updateDetails/${id}`)
   // }


   // const FeedbackHandle = (_id)=>{

   //    fetch(`https://ass-12-server-mu.vercel.app/instructorclasses/${_id}`)
   //    .then(res=>res.json())
   //    .then(data=>Setfeedback(data.Feedback))
   //    window.my_modal_1.showModal()
   // }

   console.log(user);
   return (

      <div>
         <AddaProductBenner name={"Your Product's"} subtitle={user?.displayName} img={"https://i.ibb.co/7SN0S6z/b2.jpg"} ></AddaProductBenner>
         {
            user ?
               <div className="w-full  bg-white shadow-lg overflow-x-auto">
                  <table className=" table table-xs  md:table-sm">
                     <thead>
                        <tr className="text-white bg-gray-900">

                           <th>Product Img</th>
                           <th>Product Name</th>
                           <th>Price</th>
                           <th>Brand</th>
                           <th>Cetegory</th>
                           <th>Subcetegory</th>
                           <th>Update It</th>
                           <th>Delete It</th>
                        </tr>
                     </thead>
                     <tbody>
                        {products?.map((singleProduct, index) => (
                           <tr key={singleProduct?._id} className='"border-b border-indigo-800 " '>

                              <td>
                                 <img src={singleProduct?.image} className="w-24 h-12 rounded-xl" alt="" />
                              </td>
                              <td>{singleProduct?.name}</td>
                              <td>{singleProduct?.price} $</td>
                              <td className="">{singleProduct?.brand}</td>
                              <td className="font-semibold">{singleProduct?.category}</td>
                              <td className="font-semibold">{singleProduct?.subcategory}</td>
                              <td>
                              <button
                                    type="submit"
                                    className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
                                 >
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative"><FaUserEdit /></span>
                                 </button>
                              </td>
                              <td>
                                 <button
                                    type="submit"
                                    className="rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                                 >
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative"><FaRegTrashAlt /></span>
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               // {/* <dialog id="my_modal_1" className="modal">
               //    <form method="dialog" className="modal-box">
               //       <h3 className="font-bold text-lg">Hellow {user?.displayName}</h3>
               //       <p className="py-4"><span className='text-black font-bold underline'>From Admin  </span> : {feedback}</p>
               //       <div className="modal-action">
               //          <button className="btn">Close</button>
               //       </div>
               //    </form>
               // </dialog> */}

               : <p className='text-[100px] mt-[100px] mb-[200px]   text-center text-red-700 '> <span className="loading loading-bars loading-lg"></span></p>
         }
         {
            !products && <p>You Don't Add any Product</p>
         }

      </div>
   );
};

export default MyProducts;







