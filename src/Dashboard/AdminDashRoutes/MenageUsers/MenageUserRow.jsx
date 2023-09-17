import React from "react";
import { FaUser, FaUserGraduate } from "react-icons/fa";

const MenageUserRow = ({ singleUser, handleUsers ,openIMG}) => {
  return (
    <tr key={singleUser?._id} className='"border-b border-indigo-800 " '>
      <td>
        <label className="btn btn-ghost   avatar">
          <div
            onClick={() => openIMG(singleUser?.image)}
            className="md:w-24 w-20 h-12 md:h-16 rounded-lg "
          >
            <img src={singleUser?.image} alt="IMG" />
          </div>
        </label>
      </td>
      <td className="text-xs md:text-sm font-normal md:font-semibold ">
        {singleUser?.name}
      </td>
      <td className="text-xs md:text-sm font-normal md:font-semibold  ">
        {singleUser?.email}
      </td>
      <td className="font-normal md:font-semibold ">{singleUser?.role}</td>
      <td>
        <button
          disabled={singleUser.role === "user"}
          onClick={() => {
            handleUsers(singleUser?._id, "user");
          }}
          className="rounded px-4 py-2 md:px-5 md:py-2.5   overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">
            <FaUser />
          </span>
        </button>
      </td>
      <td>
        <button
          disabled={singleUser.role === "admin"}
          onClick={() => {
            handleUsers(singleUser?._id, "admin");
          }}
          className="rounded px-4 py-2 md:px-5 md:py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">
            <FaUserGraduate />
          </span>
        </button>
      </td>
    </tr>
  );
};

export default MenageUserRow;
