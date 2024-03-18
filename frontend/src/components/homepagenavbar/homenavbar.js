import React from 'react';
import { Link } from 'react-router-dom';
import './homenavbar.css';
import emblem from'../../images/emblem.png';


function homenavbar() {
    return (
    <div className='homenavbar'>
        <h1 className='navbar-logo'><img  className="emblemimage" src={emblem} alt="logo" />GOVERNMENT OF INDIA</h1>
        <ul className='navmenu'>
            <li>
                <Link className='navlinks' to='/'><i class="fa-solid fa-house"></i>Home</Link>
                <Link className='navlinks' to='/login'><i class="fa-solid fa-arrow-right-to-bracket"></i>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default homenavbar