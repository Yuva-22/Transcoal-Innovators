import React, { useState } from 'react';
import './train.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Table from '../../components/table/table';
import TrainIcon from '@mui/icons-material/Train';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';

function Train() {

  const [value, setValue] = React.useState(1);
  const stationvalues = ['Warangal','Ramagundam','Balharshah','Chandrapur','Sewagram Junction','Nagpur Junction','Itarsi Junction','Bhopal Junction']; // Initial value of the slider

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
    if(value==1)
    {
        console.log("Starting point: Station "+stationvalues[value-1]);
        console.log("Current Station: Station "+stationvalues[value]);
        console.log("Next Station: Station "+stationvalues[value+1]);
    }
    else if(value==stationvalues.length-1)
    {
        console.log("Previous Station: Station "+stationvalues[value-1]);
        console.log("Current Station: Station "+stationvalues[value]);
    }
    else
    {
        console.log("Previous Station: Station "+stationvalues[value-1]);
        console.log("Current Station: Station "+stationvalues[value]);
        console.log("Next Station: Station "+stationvalues[value+1]);
    }
  };

  return (
    <div className='train'>
        <Sidebar />
         <div className='traincontainer'>
          <Navbar />
          
           <div className='traincharts'>
             <div className='train-left-box'>
              <h3 className='traintitle'>TRAIN STATUS</h3>
              <div className='train-box'>

               <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 1</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>START</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>9:00</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>0 kms</div>
                 </div>
               </div>

             <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 2</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>13.30</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>13:45</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>150 kms</div>
                 </div>
               </div>

               <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 3</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>18.45</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>19:00</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>300 kms</div>
                 </div>
               </div>

               <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 4</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>23:00</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>23:10</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>500 kms</div>
                 </div>
               </div>

               <div className='icondiv'>
                 <TrainIcon className='trainicon' style={{fontSize:'30'}}/>
               </div>

               <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 5</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>1:30</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>1:35</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>700 kms</div>
                 </div>
               </div>

               <div className='train-content'>
                 <div className='content'>
                  <div className='place'>STATION 6</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>6:10</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>6:20</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>1000 kms</div>
                 </div>
               </div>

               <div className='train-content'>
                 <div className='content'>
                   <div className='place'>STATION 7</div>
                   <div className='arrivetime'><span className='arrival'>ARRIVAL TIME: </span>8.40</div>
                   <div className='deptime'><span className='departure'>DEPARTURE TIME: </span>END</div>
                   <div className='crossedkm'><span className='kms'>KILOMETER PASSED: </span>1200 kms</div>
                 </div>
               </div>
             </div>
             </div>

             <Link to='/traindashboard' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>See Train Details</h1>
                    </div>
              </Link>

           {/* <div className='traindetailcontainer'>
             <h1 className='traindetailtitle'>TRAIN DETAILS</h1>
             <Table value1="FNR Number" value2="98765432198" />
             <Table value1="Amount of coal" value2="4000 tonnes" />
             <Table value1="Starting point" value2="Chennai" />
             <Table value1="Ending point" value2="Bhopal" />
             <Table value1="Estimated Duration" value2="23 hours" />
           <Table value1="Total Distance" value2="1476 kms" />
             <Table value1="Distance covered" value2="1200 kms" />
             <Table value1="Last Station" value2="STATION 4" />
             <Table value1="Next Station" value2="STATION 5" />
             <Table value1="Expected Time to reach next Station" value2="20mins" />
           </div> */}
       </div>
          {/* <div className='train-section'>
             <Stack sx={{height: 600 }} spacing={1} direction="row">
                 <Slider
                   track="inverted"
                   track={false}
                   value={value}
                   aria-label="Temperature"
                   orientation="vertical"
                   onChange={handleSliderChange}
                   valueLabelDisplay="off"
                   min={1}
                   max={8}
                 />
             </Stack>
          </div>  */}

      </div>
    </div>
  )
}

export default Train;