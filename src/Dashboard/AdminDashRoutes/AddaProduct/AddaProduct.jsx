import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/Authprovider';
import AddaProductBenner from './AddaProductBenner';

const imgHostingToken = import.meta.env.VITE_Image_Upload_Key;

const AddaProduct = () => {
   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const { register, handleSubmit, reset } = useForm();
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

   const onSubmit = (data) => {
      const formData = new FormData();
      formData.append('image', data.image[0]);

      fetch(img_hosting_url, {
         method: 'POST',
         body: formData
      })
         .then((res) => res.json())
         .then((imgResponse) => {
            if (imgResponse.success) {
               const imgURL = imgResponse.data.display_url;
               const {
                  name,
                  brand,
                  email,
                  material,
                  price,
                  Quantity,
                  color,
                  rating,
                  category,
                  subcategory,
                  description
               } = data;
            
               const newPrice = parseFloat(price);
               const newQuantity = parseFloat(Quantity);
               const newRating = parseFloat(rating);

               const product = {
                  name,
                  brand,
                  email,
                  material,
                  price: newPrice,
                  Quantity: newQuantity,
                  color,
                  rating: newRating,
                  category,
                  subcategory,
                  description,
                  image: imgURL
               };
               console.log(product);
               fetch('http://localhost:5000/addproducts', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(product)
               })
                  .then((res) => res.json())
                  .then((data) => {
                     Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Added',
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                           popup: 'bg-indigo-50 rounded-lg shadow-md p-3 md:p-8   md:max-w-md',
                           title: 'text-sm md:text-2xl text-blue-600 font-semibold mb-4',
                           content: 'text-gray-700',
                        }
                     });
                     navigate('/dashboard');
                     reset();
                  });
            }
         });
   };

   return (

      <div className="w-full pb-12 ">
         <AddaProductBenner name={"Add A Product"} subtitle={"Explore New Style"} img={"https://i.ibb.co/cN24B75/banner.png"} ></AddaProductBenner>
         <form onSubmit={handleSubmit(onSubmit)} className="max-w-md md:max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="md:grid grid-cols-2 gap-4 my-6 ">
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Product Name*</label>
                  <input
                     type="text"
                     placeholder="Product Name"
                     {...register("name", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full p-2"
                  />
               </div>
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Brand Name*</label>
                  <input
                     type="text"
                     placeholder="Brand Name"
                     {...register("brand", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full p-2"

                  />
               </div>
            </div>
            <div className="mb-6 md:grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Admin Email*</label>
                  <input
                     type="email"
                     placeholder="Admin Email"
                     {...register("email", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full p-2"
                     readOnly
                     value={user?.email}
                  />
               </div>
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Metarial Name*</label>
                  <input
                     type="text"
                     placeholder="Metaria Name"
                     {...register("material", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full p-2"

                  />
               </div>
            </div>
            <div className="md:grid grid-cols-2 gap-4 mb-6">
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Price*</label>
                  <input
                     type="number"
                     {...register("price", { required: true })}
                     placeholder="Price"
                     className="input input-bordered w-full p-2"
                  />
               </div>
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Quantity*</label>
                  <input
                     type="number"
                     {...register("Quantity", { required: true })}
                     placeholder="Quantity"
                     className="input input-bordered w-full p-2"
                  />
               </div>
            </div>



            <div className="md:grid grid-cols-2 gap-4 mb-6">
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Color*</label>
                  <input
                     type="text"
                     {...register("color", { required: true })}
                     placeholder="color"
                     className="input input-bordered w-full p-2"
                  />
               </div>
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">Rating*</label>
                  <input
                     type="number"
                     {...register("rating", { required: true })}
                     placeholder="Give rating under 5 "
                     className="input input-bordered w-full p-2"
                  />
               </div>
            </div>
            <div className="md:grid grid-cols-3 gap-4 mb-6">
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">category*</label>


                  <select  {...register("category", { required: true })} className="select select-success w-full max-w-md  md:max-w-xs">
                     <option disabled selected>Pick One</option>
                     <option>Men</option>
                     <option>Women</option>
                     <option>Kid</option>

                  </select>

               </div>
               <div>
                  <label className="block text-gray-700  font-semibold mb-2">subcategory*</label>
                  <select    {...register("subcategory", { required: true })}
                     className="select select-success w-full max-w-md  md:max-w-xs ">
                     <option disabled selected>Pick One</option>
                     <option>shoes</option>
                     <option>jeans</option>
                     <option>handbags</option>
                     <option>shirts</option>
                     <option>sunglasses</option>
                     <option>watches</option>
                     <option>tshirts</option>
                     <option>jackets</option>
                     <option>dresses</option>
                     <option>caps</option>
                     <option>belts</option>
                     <option>hoodies</option>


                  </select>
               </div>
               <div>
                  <label className="block text-gray-700 font-semibold mb-2">description*</label>
                  <input type="text" {...register("description", { required: true })} placeholder="Type here" className="input input-bordered input-success w-full max-w-md  md:max-w-xs" />
               </div>
            </div>
            <div className="mb-6">
               <label className="block text-gray-700 font-semibold mb-2">Product Image*</label>
               <input
                  type="file"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-success  w-full  "
               />
            </div>
            <p className="text-center">
               <button
                  type="submit"
                  className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
               >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Submit</span>
               </button>
            </p>
         </form>
      </div>
   );
};

export default AddaProduct;
