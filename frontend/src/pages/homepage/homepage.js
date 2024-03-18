import React from 'react';
import './homepage.css';
import Homenavbar from '../../components/homepagenavbar/homenavbar';
import Hero from '../../components/hero/hero';
import { useEffect } from 'react';
import videoFile from '../../components/videofile'


function Homepage() {



    useEffect(() => {
      // This code ensures the video plays automatically when the component mounts
      const video = document.getElementById('backgroundVideo');
      video.play().catch(error => {
        // Handle autoplay error (for instance, in mobile browsers)
        console.error('Autoplay was prevented:', error);
      });
    }, []);




  return (
    <div className='homepage'>
      <div className="background-video">
      <video
        id="backgroundVideo"
        autoPlay
        muted
        loop
        playsInline
        className="video"
      >
        <source src = {videoFile} type="video/mp4" />
        {/* Include additional source elements for different video formats */}
        Your browser does not support the video tag.
      </video>
        <Homenavbar />
        <Hero />
    </div>
    </div>
  )
}

export default Homepage;