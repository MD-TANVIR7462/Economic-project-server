import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/Authprovider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loader from "../Components/Loadin/Loader";

const MySwal = withReactContent(Swal);

const RouteGuard = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook for navigation


  if (loading) {
    return (
      <Loader/>
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