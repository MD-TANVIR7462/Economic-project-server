import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Nav/NavBar";
import Loader from "./Components/Loadin/Loader";
import { ScrollToTop } from "./config";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 600); // 1000ms (1 seconds) for demonstration

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-[#291334] font-JosefinSans">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Toaster position="bottom-right" reverseOrder={false} />
          <ScrollToTop />
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
