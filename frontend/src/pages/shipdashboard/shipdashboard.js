import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import { Link } from 'react-router-dom';
import './shipdashboard.css';


function shipdashboard() {
  return (
    <div className='shipdashboard'>
        <Sidebar />
         <div className='shipdashboardcontainer'>
            <Navbar />
            <div className='firstdiv'>
            <h1 className='shipdetailtitle'>Ship Details</h1>
                <div className='shipcontainer'>
                    <div className='shipdetailscontainer'>
                      <div>
                        <div className='shipdetail'><p>SHIP NAME: MSC GULSUN</p></div>
                        <div className='shipdetail'><p>IMO: 9839430</p></div>
                        <div className='shipdetail'><p>MMSI: 372003000</p></div>
                        <div className='shipdetail'><p>Speed: 12.5 Kn</p></div>
                        <div className='shipdetail'><p>AMOUNT OF COAL: 4000 tonnes</p></div>
                      </div>
                      <div>
                        <div className='shipdetail'><p>Gross Tonnage: 232618</p></div>
                        <div className='shipdetail'><p>Length Overall(m): 400</p></div>
                        <div className='shipdetail'><p>Beam: 62</p></div>
                        <div className='shipdetail'><p>ETA: 36 HRS</p></div>
                        <div className='shipdetail'><p>Gross Tonnage: 232618</p></div>
                      </div>
                        </div>
                    </div>
                    <div className="widgets">
                  <Link to='/shipinfo' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>Track My ship</h1>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
            </div>
  )
}

export default shipdashboard;



