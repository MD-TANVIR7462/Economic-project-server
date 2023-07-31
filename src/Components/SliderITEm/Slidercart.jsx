
import { FaRegEye, FaCartPlus, FaStar } from 'react-icons/fa';



const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

const Slidercart = ({ product }) => {
 

  return (
    <div className="mb-3 md:mb-0 shadow-md hover:shadow-lg transition-shadow duration-300" 
  
    >
      <div className="relative bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-700">
        <div className="group">

   
          <img
            src={product.image}
            alt=""
            className="w-full h-[250px] md:h-[380px] object-cover opacity-100 scale-100 group-hover:scale-110 transition-transform group-hover:opacity-100 duration-1000"
          />
          <div className="pb-8 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-1000">
            <span className="flex justify-center items-center gap-5">
              <button className="btn pt-2 px-4 pb-1 text-2xl hover:text-blue-700 hover:scale-110 transition-all duration-500">
                <FaRegEye />
              </button>
              <button className="btn pt-2 px-4 pb-1 text-2xl hover:text-red-700 hover:scale-110 transition-all duration-500">
                <FaCartPlus />
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-6 px-2">
        <span>
          <p className="text-xl text-slate-600 font-semibold">{product.name}</p>
          <p className="text-xl text-slate-600 font-medium">For {product.category}</p>
          <p className="text-xl text-black hover:text-slate-500">
            {product.price} <span className="text-green-700 font-semibold">$</span>
          </p>
        </span>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
};

export default Slidercart;
