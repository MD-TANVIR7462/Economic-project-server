import { FaGoogle } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const NAvbar = () => {
   const user = false
   const [isOpen, setIsOpen] = useState(false);
   const [selectedId, setSelectedId] = useState(null);
   const [resiterModal, setResisterModal] = useState(false);

// Authintication Function====>>>

const handleResister = (e)=>{
   e.preventDefault();
   const form = e.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;
      const imageUrl = form.image.value
      const user = { name : name, image : imageUrl,email : email};
      console.log(user);

}





//Modal function===========>>
   const openModal = () => {
      setSelectedId();

      setIsOpen(true);
   };

   const closeModal = () => {
      // setSelectedId(null);
      setIsOpen(false);
   };

   const ModalResister = () => {
      setResisterModal(true)
      setIsOpen(false)
   }
   const closeResisterModal = () => {
      setResisterModal(false);
   }

//navbar Scroll ======>>>>

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
            <a className="btn btn-ghost normal-case text-xl">LOGO</a>
         </div>
         <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navOptions}
            </ul>
         </div>
         <div className="navbar-end ">
            <button className="btn btn-ghost btn-circle mr-1 md:mr-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="md:h-7 h-6 w-6 md:w-7   text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            {
               user ? <div className="dropdown dropdown-end z-10">
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

                     <li><a>Logout</a></li>


                  </ul>
               </div>
                  : <button className="btn btn-primary" onClick={openModal} >Login</button>
            }

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
         {isOpen &&
            <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
               <div className="modal-box ">

                  <span className='flex justify-between items-center'>
                     <p className='pl-[5%] text-3xl font-bold '>Login</p>
                     <button className="btn btn-square hover:bg-purple-600  bg-purple-500 text-white" onClick={closeModal}>
                        X
                     </button>
                  </span>
                  <form className="md:p-[2%]">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text ">Email</span>
                        </label>
                        <input type="text" placeholder="email" required className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text" >Password</span>
                        </label>
                        <input type="text" placeholder="password" required className="input input-bordered" />
                        <span className=' mt-3 flex justify-between'>
                           <label className="label">
                              <span className="label-text-alt text-green-600 hover:text-blue-600" onClick={ModalResister}> Resister Now</span>
                           </label >
                           <label className="label">
                              <span className="label-text-alt link link-hover">Forgot password?</span>
                           </label>

                        </span>
                     </div>
                     <div className="form-control mt-6">
                        <button class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                           <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                           </span>
                           <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
                           <span class="relative invisible">Login</span>
                        </button>
                     </div>
                  </form>
                  <div className="mt-4 flex flex-col items-center ">
                     <p className="text-sm text-center  mb-3">Sign Up With</p>
                     <button className='btn btn-circle bg-purple-500 px-4 text-center text-white hover:bg-purple-700'><FaGoogle></FaGoogle></button>
                  </div>
               </div>
            </div>
         }

         {
            resiterModal && <div className={`modal ${resiterModal ? 'modal-open' : ''}`}>
               <div className="modal-box ">

                  <span className='flex justify-between items-center'>
                     <p className='pl-[5%] text-3xl font-bold '>Resister</p>
                     <button className="btn btn-square hover:bg-purple-600  bg-purple-500 text-white" onClick={closeResisterModal}>
                        X
                     </button>
                  </span>
                  <form className="md:p-[2%]" onSubmit={handleResister}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text ">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="text" required className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text ">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text" >Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" required className="input input-bordered" />

                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text" >Your Profile</span>
                        </label>
                        <input type="file" required name='image' className="file-input file-input-bordered file-input-accent file-input-sm w-full max-w-xs" />

                     </div>

                     <div className="form-control mt-6">
                        <button class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                           <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                           </span>
                           <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Resister</span>
                           <span class="relative invisible">Resister</span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         }

      </div>
   );
};

export default NAvbar;
