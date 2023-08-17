import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FiHome, FiShoppingCart, FiCreditCard, FiMenu, FiX } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/Authprovider';

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
    <div className="flex h-screen">
      <div className={`fixed left-0 h-screen w-52 md:w-64 bg-gray-900 text-white transition-transform duration-500  ease-in-out ${menuOpen ? 'translate-x-0 ' : '-translate-x-64'
        }`}
      >
        <div className="p-4">


          {

            user &&

            <span className='flex  justify-between mb-8  items-center '>
              <div className="md:w-20 w-12 flex flex-col items-center gap-2 ">
                <img src={user.photoURL} className='rounded-lg cursor-pointer ' />

                <p className='text-white font-semibold text-xs md:text-sm cursor-not-allowed '>Admin</p>
              </div>
              {menuOpen && (
                <button
                  className=" md:hidden text-white btn text-lg btn-ghost btn-circle avatar"
                  onClick={toggleMenu}
                >
                  <FiX />
                </button>
              )}

            </span>

          }


          <Link to={"/"} className="block py-2">
            <FiHome className="h-5 w-5 mr-2 inline" />
            Home
          </Link>


          <Link to={"/"} className="block py-2">
            <FiShoppingCart className="h-5 w-5 mr-2 inline" />
            Orders
          </Link>
          <Link to={"/"} className="block py-2">
            <FiCreditCard className="h-5 w-5 mr-2 inline" />
            Payments
          </Link>
          <div className="border-b border-indigo-800 my-4" />
          <Link to={"/"} className="block py-2">
            <FiHome className="h-5 w-5 mr-2 inline" />
            Home
          </Link>


          <Link to={"/"} className="block py-2">
            <FiShoppingCart className="h-5 w-5 mr-2 inline" />
            Orders
          </Link>
        </div>

      </div>

      <div className="w-full block ">
        {windowWidth < 768 && (
          <div className={`md:hidden bg-gray-900 w-full top-0 z-10 text-white px-4 h-[70px] flex items-center `}>


            <FiMenu onClick={toggleMenu} className={`h-5 w-5 ${menuOpen ? 'hidden' : 'block'}`} />

          </div>
        )}
        <div className={`bg-gray-100 p-8 rounded-lg ${windowWidth < 768 ? '' : 'ml-64'}`}>
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;


