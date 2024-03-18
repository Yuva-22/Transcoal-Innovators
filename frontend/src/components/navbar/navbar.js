import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';
import { useState } from 'react';

function Navbar() {

  const [isdropdown,setIsdropdown] = useState(false);

  const handleDropdownClick = event => {
    setIsdropdown(current => !current);
  }

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="Search..."/>
          < SearchOutlinedIcon/>
        </div> */}
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
          </div>
          {/* <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          <div className="item">
            {/* <img src="https://cdn5.vectorstock.com/i/1000x1000/25/09/user-icon-man-profile-human-avatar-vector-10552509.jpg" 
            alt="image" className="avatar"/> */}

           <AccountCircleIcon className="icon" style={{width:'25',height:'25'}} onClick={handleDropdownClick} />
           {isdropdown && (
           <div className='profiledropdown'>
              <Link to="/profile" className="dropdownlink" style={{textDecoration:'none'}} ><p className='menuitem'><AccountCircleIcon className='dropdownicon' style={{width:'17',height:'17',border:'none'}}  />Profile</p></Link>
              <Link to="/login" className="dropdownlink" style={{textDecoration:'none'}}><p className='menuitem'> <LogoutIcon className='dropdownicon' style={{width:'17',height:'17',border:'none'}}  />Logout</p></Link>
           </div>
           ) }
            {/* <Link to="/profile" className="link" style={{textDecoration:'none'}}>
            <AccountCircleIcon className="icon" style={{width:'25',height:'25'}} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;