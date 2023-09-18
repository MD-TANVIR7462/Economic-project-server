import NAvbar from "./Components/NavBar/NAvbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="bg-[#1e1d1f] font-JosefinSans" >
      <NAvbar></NAvbar>
      <ToastContainer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
