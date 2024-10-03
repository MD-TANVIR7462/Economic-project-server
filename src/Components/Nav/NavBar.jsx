import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiPhoneOutgoing,
  FiBook,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";

//Navbar output...
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //handle the scroll....
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: <FiHome />, label: "Home", to: "/" },
    { icon: <FiShoppingCart />, label: "Shop", to: "/shop/all" },
    { icon: <FiPhoneOutgoing />, label: "Contact", to: "/contact" },
    { icon: <FiBook />, label: "Blogs", to: "/blog" },
    // { icon: <FiGrid />, label: "Dashboard" },
  ];

  const NavItem = ({ icon, label,to }) => (
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
    <nav
      className={`${
        isScrolled
          ? " bg-[#2f2d31] shadow-md"
          : "bg-none text-[#2f2d31] text-xl"
      } md:py-6 text-white p-5 `}
    >
      <ul className="flex justify-between items-center max-w-6xl mx-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );

  const MobileNav = () => (
    <nav className="bg-gradient-to-r bg-[#2f2d31] text-white p-4 shadow-lg flex justify-between items-center">
      <span className="text-xl font-bold">Swift Mart</span>
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-[#2f2d31]  p-4 shadow-lg"
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
};

export default NavBar;
