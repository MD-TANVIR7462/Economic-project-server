import NAvbar from "./Components/NavBar/NAvbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/Nav/NavBar";
const App = () => {
  return (
    <div className="bg-[#1e1d1f] font-JosefinSans ">
      {/* <NAvbar></NAvbar> */}
      <NavBar></NavBar>
      <div className="max-w-[2000px] mx-auto">
        <ToastContainer />
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
