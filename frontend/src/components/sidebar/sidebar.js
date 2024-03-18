import React from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import TrainIcon from '@mui/icons-material/Train';
import SailingIcon from '@mui/icons-material/Sailing';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

function Sidebar() {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">TCI</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className='icon' />
                    <Link to="/orderid" style={{textDecoration:"none"}}>
                        <span>Main</span>
                    </Link>
                </li>
                {/* <p className="title">LIST</p>
                <li>
                    <ShoppingCartIcon className='icon' />
                    <Link to="/order" style={{textDecoration:"none"}}>
                        <span>Orders</span>
                    </Link>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <Link to="/truckinfo" style={{textDecoration:"none"}}>
                        <span>Truck Info</span>
                    </Link>
                </li>
                <li>
                    <TrainIcon className='icon' />
                    <Link to="/traininfo" style={{textDecoration:"none"}}>
                        <span>Train Info</span>
                    </Link>
                </li>
                <li>
                    <DirectionsBoatIcon className='icon' />
                    <Link to="/shipinfo" style={{textDecoration:"none"}}>
                        <span>Ship Info</span>
                    </Link>
                </li> */}
                {/*<p className="title">USEFUL LINKS</p>
                <li>
                    <InsertChartIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon' />
                    <span>Notifications</span>
                </li>*/}
                {/*<p className="title">USER</p>
                 <li>
                    <AccountCircleIcon className='icon' />
                    <Link to='/profile' style={{textDecoration:"none"}} >
                    <span>Profile</span>
                    </Link> 
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li> */}
            </ul>
        </div>
        {/* <div className="bottom">
            <div className="color" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="color" onClick={()=> dispatch({type:"DARK"})}></div>
        </div> */}
    </div>
  )
}

export default Sidebar;