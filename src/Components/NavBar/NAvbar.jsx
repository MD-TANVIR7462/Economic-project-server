
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NAvbar = () => {
   const user = true
  const navOptions = (
   
    <>
      <li className='text-xl font-semibold '><Link to={'/'}>Home</Link></li>
      <li className='text-xl font-semibold'><Link to={'/shop/all'}>Shop</Link></li>
      <li className='text-xl font-semibold '><Link to={'/'}>Blog</Link></li>
      <li className='text-xl font-semibold'><Link to={'/shop'}>Contact</Link></li>
      <li className='text-xl font-semibold'><Link to={'/shop'}>About</Link></li>
    </>
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   //  <div className={`navbar ${isScrolled ? 'bg-white shadow-md' : 'bg-none'} fixed top-0 left-0 right-0 z-50`}>
   <div className={`navbar   ${isScrolled ? "bg-white shadow-md" : "bg-none"} md:py-6 md:px-16 fixed top-0 z-10`}>

   <div className="navbar-start">
      <div className="dropdown">
         <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
         </label>
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
     {navOptions}
         </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
   </div>
   <div className="navbar-start hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
{navOptions}
      </ul>
   </div>
   <div className="navbar-end ">
      <button className="btn btn-ghost btn-circle mr-2 md:mr-4">
         <svg xmlns="http://www.w3.org/2000/svg" className="md:h-7 h-6 w-6 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <div className="dropdown dropdown-end z-10">
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2 md:mr-4">
            <div className="md:w-16 w-10 rounded-full">
               <img src="https://i.ibb.co/WnRX98f/photo-1566753323558-f4e0952af115.jpg" />
            </div>
         </label>
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
               <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
               </a>
            </li>
            <li><a>Settings</a></li>
            {
               user ? <li><a>Logout</a></li> : <li><a>LogIn</a></li>
            }
         </ul>
      </div>

      <div className="dropdown dropdown-end z-10">
         <label tabIndex={0} className="btn btn-ghost btn-circle mr-2 md:mr-4">
            <div className="indicator">
               <svg xmlns="http://www.w3.org/2000/svg" className="md:h-7 h-6 w-6 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
               <span className=" bg-red-600 text-white rounded-full px-1 py-1 indicator-item">8</span>
            </div>
         </label>
         <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
               <span className="font-bold text-lg">8 Items</span>
               <span className="text-info">Subtotal: $999</span>
               <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  );
};

export default NAvbar;
