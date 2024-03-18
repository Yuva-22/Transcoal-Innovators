import React from 'react';
import './hero.css';
import coalimage from'../../images/coal-image.jpg';


function hero() {
  return (
    <div className='hero'>
        {/* <img src={coalimage} alt="hero"></img> */}
        <div className='hero-text'>
            <h1>MINISTRY OF COAL</h1>
            <a href="/login" className='show'>LOGIN</a>
        </div>
    </div>
  )
}

export default hero