import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaGoogle, FaShoppingCart } from "react-icons/fa";
import {
  FiHome,
  FiPhoneOutgoing,
  FiBook,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiGrid,
} from "react-icons/fi";
import { FaBuffer } from "react-icons/fa6";
const ImageHosting = import.meta.env.VITE_Image_Upload_Key; //!img hosting

//Navbar output...
const NavBar = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${ImageHosting}`;//!img hosting url.....
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dbUser, setDbUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [Error, setEror] = useState("");
  const [resiterModal, setResisterModal] = useState(false);


  const {
    CreatUSerEmail,
    user,
    SignInUSer,
    signOutUSer,
    updateUser,
    loading,
    googleCreatUSer,
  } = useContext(AuthContext);
  // const user = { role: "admin" };
  //..for handle mobile and desktop menu..
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  //navitems......
  const navItems = [
    { icon: <FiHome />, label: "Home", to: "/" },
    { icon: <FiShoppingCart />, label: "Shop", to: "/shop/all" },
    { icon: <FiPhoneOutgoing />, label: "Contact", to: "/contact" },
    { icon: <FiBook />, label: "Blogs", to: "/blog" },
    // { icon: <FiGrid />, label: "Dashboard" },
  ];
  const navIAdmin = { icon: <FiGrid />, label: "Dashboard", to: "/dashboard" };
  //.........navitem with motion....
  const NavItem = ({ icon, label, to }) => (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <Link to={to} className="flex gap-2">
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </Link>
    </motion.li>
  );
  // DBUSER fetch with current user email.......
  //user form DB
  useEffect(() => {
    fetch(
      `https://ecommerce-projects-server.vercel.app/user?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, [user]);

  //!Auth firebase.......................
  //Logout ====>>>
  const logout = () => {
    signOutUSer()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfully Logged Out!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "bg-base-300 rounded-lg shadow-md p-3 md:p-8   md:max-w-md",
            title: "text-sm md:text-2xl font-semibold mb-4",
            content: "text-gray-700",
          },
        });

        setEror("");
      })
      .catch((error) => {
        setEror(error.message);
      });
  };

  //!all modals functions........
  const openModal = () => {
    // setSelectedId();
    setEror("");
    setIsOpen(true);
  };
  const closeModal = () => {
    // setSelectedId(null);
    setIsOpen(false);
    setEror("");
  };

  const ModalResister = () => {
    setResisterModal(true);
    setIsOpen(false);
    setEror("");
  };
  const closeResisterModal = () => {
    setResisterModal(false);
    setEror("");
  };















// ?desktop
  const DesktopNav = () => (
    // <nav className="bg-gradient-to-r bg-[#2f2d31] text-white p-4 shadow-lg">
    <nav className="bg-[#2f2d31] shadow-md  text-xl md:py-4 text-white p-5 flex ">
      <ul className="flex gap-16 mx-auto items-center  max-w-5xl ">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
        {user && !loading && (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Link to={navIAdmin.to} className="flex gap-2">
              <span className="text-xl">{navIAdmin.icon}</span>
              <span>{navIAdmin.label}</span>
            </Link>
          </motion.li>
        )}
      </ul>
      {user && (
        <div className="dropdown dropdown-end z-10">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar mr-2 md:mr-4"
          >
            <div className="md:w-16 w-10 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co.com/DQgJfhL/images-2.png"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-xs md:menu-sm  bg-[#171618] dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-40  md:w-52"
          >
            <li>
              {dbUser?.role === "user" && (
                <Link to={"dashboard/orders"}>
                  <span className="font-semibold flex items-center gap-1">
                    <FaShoppingCart></FaShoppingCart> Book Mark's
                  </span>
                </Link>
              )}
              {dbUser?.role === "admin" && (
                <Link to={"dashboard/myproducts"}>
                  <span className="font-semibold flex items-center gap-1">
                    <FaBuffer /> My Product's
                  </span>
                </Link>
              )}
            </li>

            <li>
              <span
                onClick={logout}
                className="font-semibold flex items-center gap-1"
              >
                <BiLogOut />
                Logout
              </span>
            </li>
          </ul>
        </div>
      )}
      {loading && <span className="loading loading-ring loading-lg"></span>}
      {!user && !loading && (
        <button
          className="btn btn-circle  btn-ghost text-white  md:border-2 md:border-white text-3xl md:mr-2 "
          onClick={openModal}
        >
          <BsBoxArrowInRight></BsBoxArrowInRight>
        </button>
      )}
    </nav>
  );
  //?mobile nav
  const MobileNav = () => (
    <nav className="bg-gradient-to-r bg-[#2f2d31] text-white p-4 shadow-lg flex justify-between items-center z-50">
      <span className="text-xl font-bold">Swift Mart</span>
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isNavOpen ? <FiX /> : <FiMenu />}
      </button>
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-[#2f2d31]  p-4 shadow-lg "
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <FiX />
            </button>
            <span>
            {user && (
              <div className="dropdown dropdown-end z-10 ">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mr-2 md:mr-4"
                >
                  <div className="md:w-16 w-10 rounded-md">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co.com/DQgJfhL/images-2.png"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-xs md:menu-sm  bg-[#171618] dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-40  md:w-52"
                >
                  <li>
                    {dbUser?.role === "user" && (
                      <Link to={"dashboard/orders"}>
                        <span className="font-semibold flex items-center gap-1">
                          <FaShoppingCart></FaShoppingCart> Book Mark's
                        </span>
                      </Link>
                    )}
                    {dbUser?.role === "admin" && (
                      <Link to={"dashboard/myproducts"}>
                        <span className="font-semibold flex items-center gap-1">
                          <FaBuffer /> My Product's
                        </span>
                      </Link>
                    )}
                  </li>

                  <li>
                    <span
                      onClick={logout}
                      className="font-semibold flex items-center gap-1"
                    >
                      <BiLogOut />
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            )}
            {loading && (
              <span className="loading loading-ring loading-lg"></span>
            )}
            {!user && !loading && (
              <button
                className="btn btn-circle btn-ghost text-white  border-2 border-white text-2xl mr-2 "
                onClick={openModal}
              >
                <BsBoxArrowInRight></BsBoxArrowInRight>
              </button>
            )}
            </span>
            <ul className="mt-7 space-y-6 ">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}

              {user && !loading && (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Link to={navIAdmin.to} >
                    <span className="text-xl">{navIAdmin.icon}</span>
                    <span>{navIAdmin.label}</span>
                  </Link>
                </motion.li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-50 ">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default NavBar;
