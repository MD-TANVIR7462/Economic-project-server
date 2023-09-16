import { useContext } from "react";
import { FaRegEye, FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(<FaStar key={i} className="text-pink-700" />);
  }
  if (rating % 1 !== 0) {
    stars.push(
      <FaStarHalfAlt key={Math.ceil(rating)} className="text-pink-700" />
    );
  }
  for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
    stars.push(<FaStar key={i} className="text-gray-300" />);
  }
  return stars;
};

const Slidercart = ({ product }) => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const details = (id) => {
    navigate(`/details/${id}`);
  };

  const AddtoCart = () => {
    const {
      name,
      price,
      color,
      material,
      image,
      brand,
      subcategory,
      category,
      _id,
      Quantity
    } = product;
    console.log(product);

    const bookmarkProducts = {
      name,
      price,
      color,
      material,
      image,
      brand,
      subcategory,
      category,
      ProductTotal:Quantity,
      Quantity: 1,
      oldID: _id,
      selectedSize: "M",
      email: user?.email,
    };
    fetch(`http://localhost:5000/bookmarks?email=${user.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmarkProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
       if(!data.message){
        toast.success("Product Bookmarked", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
       }
      });
  };
  return (
    <div className="mb-3 md:mb-0 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg ">
      <div
        className="relative bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700"
      >
        <div className="group">
          <img
            src={product.image}
            alt=""
            className="w-full object-cover object-center  h-[270px] md:h-[320px]  ob opacity-100 scale-100 hover:scale-110 transition-transform group-hover:opacity-100 duration-1000"
          />
          <div className="pb-8 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-1000">
            <span className="flex justify-center items-center gap-5">
              <button
                onClick={() => details(product?._id)}
                className="btn pt-2 px-4 pb-1 text-2xl hover:text-blue-700 hover:scale-110 transition-all duration-500"
              >
                <FaRegEye />
              </button>
              <button
                onClick={AddtoCart}
                className="btn pt-2 px-4 pb-0 text-2xl hover:text-red-700 hover:scale-110 transition-all duration-500"
              >
                <FaCartPlus />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-6 px-2">
        <span>
          <p className="text-md md:text-xl text-slate-600 font-semibold">
            {product.name}
          </p>
          <p className="text-md md:text-xl text-slate-600 font-medium">
            For {product.category}
          </p>
          <p className="md:text-xl text-[#168a73]">
            {product.price}{" "}
            <span className="text-[#168a73]font-semibold">$</span>
          </p>
        </span>
        {/* <StarRating rating={product.rating} /> */}
        <p className="font-bold text-sm md:text-lg flex items-center">
          {" "}
          <span className="mr-1">{product.rating}/5</span>{" "}
          {renderStars(product.rating)}
        </p>
      </div>
    
    </div>
  );
};

export default Slidercart;
