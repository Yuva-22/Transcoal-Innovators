import React from 'react';
import './ship.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Shipmap from '../../components/map/shipmap/shipmap';


function ship() {
  return (
    <div className='ship'>
      <Sidebar />
         <div className='shipcontainer'>
          <Navbar />
          <div className='shipcharts'> 
              {/* <div className='shipdetails'>
                <h1 className='shipdetail'>Ship Details</h1>
                <p className='shipdetail'>Ship Name: VOLCAN DE TINAMAR</p>
                <p className='shipdetail'>IMO Number: 9506291</p>
              </div> */}
              <Shipmap />
          </div>
      </div>
    </div>
  )
}

export default ship;