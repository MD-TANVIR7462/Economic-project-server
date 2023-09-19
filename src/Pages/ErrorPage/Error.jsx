import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
   const error = useRouteError()

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <img src='https://i.ibb.co/kgMJRZB/images.png' alt="Error" className="mx-auto  w-72 h-64" />
        <h2 className="text-sm md:text-2xl  font-bold text-gray-800 mb-4">{error?.error?.message}</h2>
        <p className="text-gray-600 mb-6 text-2xl md:text-4xl font-bold"> {error?.status}</p>
        
        <Link
         to={"/"}
         
        >
         <button
            type="button"
            className="rounded px-5 py-2.5 overflow-hidden group bg-base-300 relative hover:bg-gradient-to-r hover:from-base-300 hover:to-base-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-base-300 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Back To Home</span>
          </button>
        </Link>
      </div>
    </div>
   );
};

export default Error;