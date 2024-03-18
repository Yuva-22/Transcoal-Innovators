import React from 'react';
import './order.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Widget from '../../components/widgets/widget';
import Routemap from '../../components/map/routemap/routemap';

function order() {
  return (
    <div className='order'>
        <Sidebar/>
       <div className="ordercontainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="Truck"/>
          <Widget type="Coal"/>
          <Widget type="Distance"/>
          <Widget type="Duration"/>
        </div> */}
          <Routemap /> 

      </div>
    </div>
  )
}

export default order;