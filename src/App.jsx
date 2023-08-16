
import NAvbar from './Components/NavBar/NAvbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';



const App = () => {
  return (
    <div>
     
   
<NAvbar></NAvbar>
<Outlet></Outlet>
<Footer></Footer>    
      
    </div>
  );
};

export default App;