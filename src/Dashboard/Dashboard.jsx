import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { FiHome, FiShoppingCart, FiCreditCard, FiMenu,FiGrid,FiPhoneOutgoing } from "react-icons/fi";

import { RxPlus } from "react-icons/rx";
import { FaBuffer, FaUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Components/Provider/Authprovider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [bookmark, setBookmark] = useState([]);
  const [DBUser, setDbUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/bookmarks?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookmark(data);
      });

    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, [user]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 768) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex ">
      <div
        className={`fixed left-0 z-10 h-screen w-52 md:w-64 bg-[#171618] transition-transform duration-500  ease-in-out ${
          menuOpen ? "translate-x-0 " : "-translate-x-64"
        }`}
      >
        <div className="p-4">
          {user && (
            <span className="flex  justify-between mb-8  items-center ">
              <div className="md:w-20 w-12 flex flex-col items-center gap-2 ">
                <img
                  src={user.photoURL}
                  className="rounded-lg cursor-pointer "
                />

                <p className="text-white font-semibold text-xs md:text-base cursor-not-allowed ">
                  {DBUser?.role}
                </p>
              </div>
              {menuOpen && (
                <button
                  className="btn btn-circle btn-outline text-gray-500 btn-sm md:hidden"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </span>
          )}

          <Link
            to={"/dashboard"}
            className="block py-2 hover:bg-gray-600 rounded-lg"
          >
            <FiHome className="h-5 w-5 mr-2 inline" />
            Dashboard
          </Link>
          {DBUser?.role === "user" && (
            <>
              <Link
                to={"/dashboard/orders"}
                className="block py-2 hover:bg-gray-600 rounded-lg"
              >
                <FiShoppingCart className="h-5 w-5 mr-2 inline" />
                Cart +<span className="text-green-500">{bookmark.length}</span>
              </Link>
              <Link
                to={"/dashboard/payments"}
                className="block py-2 hover:bg-gray-600 rounded-lg"
              >
                <FiCreditCard className="h-5 w-5 mr-2 inline" />
                Payments
              </Link>
            </>
          )}

          {DBUser?.role ===
            "admin" && (
              <span>
                <Link
                  to={"/dashboard/addaProduct"}
                  className="block py-2 hover:bg-gray-600 rounded-lg"
                >
                  <RxPlus className="h-5 w-5 mr-2 inline" />
                  Add A Product
                </Link>
                <Link
                  to={"/dashboard/myproducts"}
                  className="block py-2 hover:bg-gray-600 rounded-lg"
                >
                  <FaBuffer className="h-5 w-5 mr-2 inline" />
                  My Product's
                </Link>
                <Link
                  to={"/dashboard/ManageUser"}
                  className="block py-2 hover:bg-gray-600 rounded-lg"
                >
                  <FaUser className="h-5 w-5 mr-2 inline" />
                  Menage Users
                </Link>
              </span>
            )}

          <div className="border-b border-indigo-800 my-4" />
          <Link to={"/"} className="block py-2 hover:bg-gray-600 rounded-lg">
            <FiHome className="h-5 w-5 mr-2 inline" />
            Home
          </Link>

          <Link
            to={"/shop/all"}
            className="block py-2 hover:bg-gray-600 rounded-lg"
          >
            <FiShoppingCart className="h-5 w-5 mr-2 inline" />
            Shop
          </Link>
          <Link to={"/blog"} className="block py-2 hover:bg-gray-600 rounded-lg">
            <FiGrid className="h-5 w-5 mr-2 inline" />
            Blog
          </Link>
          <Link to={"/contact"} className="block py-2 hover:bg-gray-600 rounded-lg">
            <FiPhoneOutgoing className="h-5 w-5 mr-2 inline" />
            Contact
          </Link>
        </div>
      </div>
     
      <div className="w-full block ">
        {windowWidth < 768 && (
          <div
            className={`md:hidden bg-gray-900 w-full top-0 z-10 text-white px-4 h-[70px] flex items-center `}
          >
            <FiMenu
              onClick={toggleMenu}
              className={`h-5 w-5 ${menuOpen ? "hidden" : "block"}`}
            />
          </div>
        )}
        <div
          className={` h-screen   rounded-lg ${
            windowWidth < 768 ? "" : "ml-64"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
