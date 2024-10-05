import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Nav/NavBar";
import Loader from "./Components/Loadin/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1000); // 2000ms (2 seconds) for demonstration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#1e1d1f] font-JosefinSans">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <div className="max-w-[2000px] mx-auto">
            <ToastContainer />
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
// <div className="flex justify-center items-center h-screen">
//   <div className="flex flex-col items-center">
//     <div className="loader"></div> {/* Custom loading spinner */}
//     <p className="text-white mt-4">Loading, please wait...</p>
//   </div>
// </div>
