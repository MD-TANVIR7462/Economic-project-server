import React from "react";
import { FaCcDiscover, FaRegTrashAlt } from "react-icons/fa";

const OrderTableRow = ({ singleProduct ,openModal,DeleteProduct}) => {
  return (
    <tr key={singleProduct?._id} className='"border-b border-indigo-800 " '>
      <td>
        <img
          src={singleProduct?.image}
          className="md:w-24 w-20 h-12 md:h-16 rounded-xl"
          alt=""
        />
      </td>
      <td className="font-semibold">{singleProduct?.name}</td>
      <td className="font-semibold">
        {singleProduct?.price} <span className="text-green-500">$</span>
      </td>
      <td className="font-semibold">{singleProduct?.brand}</td>
      <td className="font-semibold">{singleProduct?.category}</td>
      <td className="font-semibold">{singleProduct?.subcategory}</td>
      <td>
        <button
          onClick={() => {
            openModal(singleProduct?._id);
          }}
          className="rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">
            <FaCcDiscover />
          </span>
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            DeleteProduct(singleProduct?._id);
          }}
          className="rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">
            <FaRegTrashAlt />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
