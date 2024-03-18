import React from 'react';
import './information.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Table from '../../components/table/table';
import { useState } from 'react';

function Information() {
  const [isShowntruck,setIsShowntruck] = useState(false);
  const [isShowndriver,setIsShowndriver] = useState(false);


  const handleLiveClick = (e) => {

    e.preventDefault();
    const link = "http://localhost:3001/camera-feed";

    window.open(link, '_blank');
  }

  const handletruckClick = event => {
    setIsShowntruck(current => !current);
    if(isShowndriver==true)
    {
      setIsShowndriver(current => !current);
    }
  }
  const handledriverClick = event => {
    setIsShowndriver(current => !current);
    if(isShowntruck==true)
    {
      setIsShowntruck(current => !current);
    }
  }


  return (
    <div className='information'>
      <Sidebar/>
       <div className="informationcontainer">
        <Navbar />
        <button type = "submit" className = "liveFeedButton" target = "_blank" onClick={handleLiveClick}>Go to Live Feed</button>
        <div class="showbuttons">
            <button className='showtruck' onClick = {handletruckClick}>Show Truck Details</button>
            <button className='showtruck' onClick = {handledriverClick}>Show Driver Contact Details</button>
        </div>
        {isShowntruck && (
        <div className='truckdetailcontainer'>
        <h1 className='trucktitle'>TRUCK DETAILS</h1>
         <Table value1="No.of.Trucks" value2="1" />
         <Table value1="Amount of coal" value2="23.5 tonnes" />
         <Table value1="Starting point" value2="Chennai" />
         <Table value1="Ending point" value2="Bhopal" />
         <Table value1="Estimated Duration" value2="26 hours" />
         <Table value1="Total Distance" value2="1476 kms" />
         <Table value1="Distance covered" value2="1171 kms" />
         </div>
         )}
         {isShowndriver && (
         <div className='driverdetailcontainer'>
         <h1 className='trucktitle'>DRIVER DETAILS</h1>
         <Table value1="Name" value2="ABC" />
         <Table value1="Driver ID" value2="123456" />
         <Table value1="Phone" value2="9876543210" />
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Information;