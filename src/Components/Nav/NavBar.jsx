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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    CreatUSerEmail,
    user,
    SignInUSer,
    signOutUSer,
    updateUser,
    loading,
    googleCreatUSer,
  } = useContext(AuthContext);

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

  const DesktopNav = () => (
    // <nav className="bg-gradient-to-r bg-[#2f2d31] text-white p-4 shadow-lg">
    <nav className="bg-[#2f2d31] shadow-md  text-xl md:py-6 text-white p-5 ">
      <ul className="flex justify-around mx-auto items-center  max-w-5xl ">
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
    </nav>
  );
  //mobile nav
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
            <ul className="mt-16 space-y-6 ">
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
