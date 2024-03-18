import React from 'react';
import './profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
// import Profilechart from '../../components/profilechart/profilechart';
import { PureComponent } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer } from 'recharts';

function Profile() {
  const data = [
    {
      name: 'Jan',
      uv:240,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 264,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 180,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 135,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 201,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 196,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 249,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 216,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 120,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 167,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 242,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 216,
      pv: 4300,
      amt: 2100,
    },
  ];

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">Month: {label}</p>
          <p className="intro">Amount of Coal Ordered(in tonnes)</p>
          <p className="desc">{payload[0].value} tonnes</p>
        </div>
      );
    }
  
    return null;
  }

  return (
    <div className='profile'>
        <Sidebar />
       <div className='profilecontainer'>
            <Navbar />
            <div className='profiletop'>
                <AccountCircleIcon className=']avatar' style={{width:'230',height:'230'}}/>
                <div className="details">
                  <h1 className="itemtitle">John Smith</h1>
                  <div className="detailitem">
                    <span className="itemkey">EMAIL: </span>
                    <span className="itemvalue">johnsmith@gmail.com</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">PHONE: </span>
                    <span className="itemvalue">9876543210</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">ADDRESS: </span>
                    <span className="itemvalue">abc street,xyz</span>
                  </div>
                  <div className="detailitem">
                    <span className="itemkey">COUNTRY: </span>
                    <span className="itemvalue">India</span>
                  </div>
              </div> 
            </div>
            <div className='orderchart'>
              <h1>ORDERS</h1>
            <ResponsiveContainer width={'99%'} height={300}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />}/>
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>
              </ResponsiveContainer>
            </div>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>Generate Report</h1>
                    </div>
       </div>
    </div>
  )
}

export default Profile;