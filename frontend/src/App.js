import './App.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './pages/home/home';
import Order from './pages/order/order';
import Information from './pages/information/information';
import Train from './pages/train/train';
import Ship from './pages/ship/ship';
import Homepage from './pages/homepage/homepage';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Theft from './pages/theft/theft'
import Profile from './pages/profile/profile';
import Orderid from './pages/orderid/orderid';
import Traindashboard from './pages/traindashboard/traindashboard';
import Shipdashboard from './pages/shipdashboard/shipdashboard';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {Toaster} from 'react-hot-toast';



function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Toaster position='top-center' toastOptions={{duration : 4000}}/>
        <Routes>
          <Route path="/">
            <Route path = "theft" element = {<Theft/>} />
            <Route path = "login" element = {<Login/>}/>
            <Route path = "register" element = {<Register/>} />
            <Route index element={<Homepage />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="order" element={<Order />} />
            <Route path="truckinfo" element={<Information />} />
            <Route path="traininfo" element={<Train />}/>
            <Route path="traindashboard" element={<Traindashboard />} />
            <Route path="shipinfo"  element={<Ship />}/>
            <Route path="shipdashboard" element = { <Shipdashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path='orderid' element = {<Orderid />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
