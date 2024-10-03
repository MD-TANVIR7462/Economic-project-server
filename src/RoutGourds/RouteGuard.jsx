import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/Authprovider";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const RouteGuard = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation


  if (loading) {
    return (
      <p className="flex items-center justify-center h-[50dvh] md:h-[80dvh] text-center ">
        {" "}
        <button className="btn bg-gray-400 text-white">
          <span className="loading loading-spinner"></span>
          loading
        </button>
      </p>
    );
  }

  if (!user) {
    MySwal.fire({
      title: "Please Login First!",
      text: "Please go To the home page !",
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "OK!",
      confirmButtonColor: "#3085d6",
      customClass: {
        container: "swal-container",
        title: "swal-title",
        text: "swal-text",
        confirmButton: "swal-button swal-button--confirm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
   

    return null;
  }



  return children;
};

export default RouteGuard;