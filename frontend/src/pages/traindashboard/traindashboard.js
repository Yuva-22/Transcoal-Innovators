import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import { Link } from 'react-router-dom';
import './traindashboard.css';

function Traindashboard() {
  return (
    <div className='traindashboard'>
        <Sidebar />
         <div className='traindashboardcontainer'>
            <Navbar />
            <div className='firstdiv'>
            <h1 className='shipdetailtitle'>Train Details</h1>
                <div className='shipcontainer'>
                    <div className='shipdetailscontainer'>
                      <div>
                        <div className='shipdetail'><p>TRAIN NUMBER: 16031</p></div>
                        <div className='shipdetail'><p>TRAIN NAME: Andaman Express</p></div>
                        <div className='shipdetail'><p>FROM: MGR Chennai Central</p></div>
                        <div className='shipdetail'><p>STATION CODE: MAS</p></div>
                        <div className='shipdetail'><p>AMOUNT OF COAL: 4000 tonnes</p></div>
                      </div>
                      <div>
                        <div className='shipdetail'><p>DEPARTURE TIME: 05:15</p></div>
                        <div className='shipdetail'><p>TO: Bhopal Junction</p></div>
                        <div className='shipdetail'><p>STATION CODE: BPL</p></div>
                        <div className='shipdetail'><p>ARRIVAL TIME: 09:05</p></div>
                        <div className='shipdetail'><p>TOTAL DURATION: 27 Hrs</p></div>
                      </div>
                        </div>
                    </div>
                    <div className="widgets">
                  <Link to='/traininfo' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>Track My Train</h1>
                    </div>
                  </Link>
                </div>
              </div>
         </div>
    </div>
  )
}

export default Traindashboard ;