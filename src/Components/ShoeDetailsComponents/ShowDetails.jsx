import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import DetailsBenner from "./DetailsBenner";
import Cetegory from "../Cetegory/Cetegory";
import Related from "../Reviews/Related";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const ShowDetails = () => {
  const Product = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [sub, setSub] = useState([]);
  const { user } = useContext(AuthContext);

  const {
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
    _id,
  } = Product;

  useEffect(() => {
    fetch(`http://localhost:5000/more/${subcategory}`)
      .then((res) => res.json())
      .then((data) => {
        setSub(data);
      });
  }, []);

  // console.log(sub);
  //rander star funtion****
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

  //minus button
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //plus button
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  //take the value of quentity
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  //take the size vlue
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  //add to cart funtion
  const addTocart = () => {
    const bookmarkProducts = {
      name,
      price,
      color,
      material,
      image,
      brand,
      subcategory,
      category,
      Quantity: quantity,
      oldID: _id,
      selectedSize,
      email: user?.email,
    };
    fetch(`http://localhost:5000/bookmarks?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmarkProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        let title = "Add To cart";
        let icon = "success";
        if (data.message) {
          title = data.message;
          icon = "error";
        }
        Swal.fire({
          position: "top-center",
          icon: icon,
          title: title,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-indigo-50 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm md:text-2xl text-blue-600 font-semibold mb-4",
            content: "text-gray-700",
          },
        });
        setQuantity(1);
      });
  };

  return (
    <div className="md:min-h-[75vh]">
      <div>
        <DetailsBenner name={name} category={category} />
      </div>
      <div className="md:flex md:justify-center md:items-center md:my-20 my-10 ">
        <div className="rounded-lg md:py-8 md:px-14 bg-base-200 grid md:grid-cols-2 md:w-5/6 mx-auto  md:gap-8  w-[95%] shadow-xl p-2 m-2 ">
          <img
            src={image}
            className=" w-[95%] mx-auto md:w-full md:h-[450px]"
            alt="image"
          />

          <div className="card-body">
            <h2 className="font-semibold mb-2 md:font-bold text-2xl text-center md:text-4xl  md:mb-5">
              {name}
            </h2>
            <div>
              <p className="text-md md:text-2xl font-bold">
                price : <span className="text-green-600">$</span>{" "}
                <span>{price}</span>{" "}
              </p>
              <p className="text-md md:text-xl pt-1 font-bold">
                Brand : <span className="font-semibold">{brand}</span>
              </p>
              <p className="text-md md:text-xl  pt-1 font-bold">
                Material : <span className="font-semibold">{material}</span>
              </p>
              <p className="text-md md:text-xl  pt-1 font-bold">
                Color : <span className="font-semibold">{color}</span>
              </p>
              <p className="text-md md:text-xl  pt-1 font-bold">
                {" "}
                Available:{" "}
                <span className="font-semibold">{Quantity} Items</span>
              </p>
              <span className="flex items-center">
                <span className="text-md md:text-xl font-bold">
                  {" "}
                  Your Size :
                </span>
                <select
                  className=" select-xs
                         md:select border select-disabled ml-2  md:min-w-max"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option
                    disabled
                    value="M"
                    className="font-medium md:font-semibold"
                  >
                    Choose
                  </option>
                  <option value="M" className="font-medium md:font-semibold">
                    M
                  </option>
                  <option value="XL" className="font-medium md:font-semibold">
                    XL
                  </option>
                  <option value="SM" className="font-medium md:font-semibold">
                    SM
                  </option>
                  <option value="2XL" className="font-medium md:font-semibold">
                    2XL
                  </option>
                </select>
              </span>
              <p className=" text-md md:text-xl pt-1 font-bold">
                {" "}
                description:{" "}
                <span className="font-semibold">{description} </span>
              </p>
            </div>
            <div className=" md:justify-between  md:mt-5 md:items-center flex md:flex-row flex-col ">
              <p className="font-bold text-lg flex mb-1 items-center">
                <span className="mr-1 ">{rating}/5</span> {renderStars(rating)}
              </p>
              <div className="flex  items-center">
                <button
                  className="text-xl font-semibold rounded-md border md:px-3 px-3 md:py-2 focus:outline-none bg-gray-100"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  className="text-xl w-12 rounded-sm md:w-16 text-center mx-2 border focus:outline-none"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
                <button
                  className="text-xl font-semibold rounded-md border px-2 md:px-3 md:py-2 mr-4 focus:outline-none bg-gray-100"
                  onClick={increaseQuantity}
                >
                  +
                </button>
                <button
                  type="button"
                  className="text-xl md:text-2xl btn border-none px-4 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-400 to-purple-900 hover:from-pink-500 hover:to-indigo-950 ml-3"
                  onClick={addTocart}
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Related sub={sub} id={_id}></Related>
    </div>
  );
};

export default ShowDetails;
