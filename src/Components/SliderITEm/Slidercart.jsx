import { useContext } from "react";
import { FaRegEye, FaCartPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; // Import motion
import LazyLoad from "react-lazy-load";
import UseUsers from "../Hooks/UseUsers";
import Loader from "../Loadin/Loader";

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
  const { allUsers } = UseUsers();
  const activeUserEmail = user?.email;
  const DBUser = allUsers?.find(
    (signleuser) => signleuser?.email === activeUserEmail
  );

  // useEffect(() => {
  //   fetch(
  //     `https://ecommerce-projects-server.vercel.app/user?email=${user?.email}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDbUser(data);
  //     });
  // }, [user]);

  const details = (id) => {
    if (!user) {
      return toast.error("Login First ", {
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
    navigate(`/details/${id}`);
  };

  const AddtoCart = () => {
    if (!user) {
      return toast.error("Login First ", {
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
      Quantity,
    } = product;

    const bookmarkProducts = {
      name,
      price,
      color,
      material,
      image,
      brand,
      subcategory,
      category,
      ProductTotal: Quantity,
      Quantity: 1,
      oldID: _id,
      selectedSize: "M",
      email: user?.email,
    };

    fetch(
      `https://ecommerce-projects-server.vercel.app/bookmarks?email=${user.email}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookmarkProducts),
      }
    )
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
        if (!data.message) {
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

  // Define animation properties
  const cardAnimation = {
    initial: { scale: 1, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)" },
    hover: {
      scale: 0.9, // Slightly increase the scale
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Add a stronger shadow
      rotate: 2, // Slight rotation effect
      transition: { duration: 0.3 }, // Transition duration for hover effect
    },
    tap: {
      scale: 0.98, // Scale down when tapped/clicked
      transition: { duration: 0.1 }, // Quick transition for tap
    },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return product ? (
    <motion.div
      className="mb-3 md:mb-0 shadow-lg hover:shadow-md transition-shadow duration-300 rounded-lg"
      whileHover="hover"
      variants={cardAnimation}
    >
      <div className="relative bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700">
        <div className="group">

            {product?.image ? (
              <motion.img
                src={product?.image}
                alt="product_image"
                className="w-full object-cover object-center h-[270px] md:h-[320px] opacity-100"
                variants={imageAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            ) : (
              <div class="h-full bg-white">
                <div class="flex justify-center items-center h-full">
                  <img
                    class="h-16 w-16"
                    src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                    alt=""
                  />
                </div>
              </div>
            )}
     
          <div className="pb-8 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-1000">
            <span className="flex justify-center items-center gap-5">
              <button
                onClick={() => details(product?._id)}
                className="btn pt-2 px-4 pb-1 text-2xl hover:text-blue-700 hover:scale-110 transition-all duration-500"
              >
                <FaRegEye />
              </button>
              <button
                disabled={DBUser?.role === "admin" || product?.Quantity === 0}
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
            {product?.name}
          </p>
          <p className="text-md md:text-xl text-slate-600 font-medium">
            For {product?.category}
          </p>
          <p className="md:text-xl text-[#168a73]">
            {product?.price}{" "}
            <span className="text-[#168a73] font-semibold">$</span>
          </p>
        </span>
        {/* <StarRating rating={product.rating} /> */}
        <p className="font-bold text-sm md:text-lg flex items-center">
          <span className="mr-1">{product?.rating}/5</span>
          {renderStars(product?.rating)}
        </p>
      </div>
    </motion.div>
  ) : (
    <div class="w-full ">
      <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
      <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
      <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    </div>
  );
};
export default Slidercart;
