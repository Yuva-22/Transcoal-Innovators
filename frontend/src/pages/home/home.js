import React from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import Table from '../../components/table/table';
import Mymap from '../../components/mymap';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Speed from '../../dashboardcomponents/speedometer/speed';
import WaterIcon from '@mui/icons-material/Water';
import HikingIcon from '@mui/icons-material/Hiking';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import { Icon } from '@iconify/react';
import InventoryIcon from '@mui/icons-material/Inventory';
import Widget from '../../components/widgets/widget';
import Linechart from '../../components/linechart/linechart';
import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';

function Home() {

 // Import necessary Firebase modules
  
const firebaseConfig = {
    // Your Firebase config
    apiKey: "AIzaSyA9GY3XZDa-aIaSpufP03FrtsVGQnE-jPw",
    authDomain: "raspi-90a60.firebaseapp.com",
    databaseURL: "https://raspi-90a60-default-rtdb.firebaseio.com",
    projectId: "raspi-90a60",
    storageBucket: "raspi-90a60.appspot.com",
    messagingSenderId: "932765612481",
    appId: "1:932765612481:web:bc8ea4790de50c3b92d740",
    measurementId: "G-GEWZDNFQDR"
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const theftDbRef = ref(database, 'Theft_status'); // theft_status databass
  const moistureDbRef = ref(database, 'Moisture'); //moisture
  const routeDbRef = ref(database, 'Route_Deviation'); //route-deviation
  const levelDbRef = ref(database, 'Level Manage'); //level
  const haltDbRef = ref(database, 'Prolonged Halt'); // Prolonged Halt
  
  
  const [theftInput, setTheftInput] = useState(null);
  const [moistureInput, setMoistureInput] = useState(null);
  const [moistureLevel, setMoistureLevel] = useState(0);
  const [routeDeviation, setRouteDeviation] = useState(null);
  const [level, setLevel] = useState(null);
  const [halt, setHalt] = useState(0);

    useEffect(() => {
      
      const fetchTheftData = () => {
        // Listen for changes in the database location
        onValue(theftDbRef, (snapshot) => {
          const fetchedData = snapshot.val();

          const theftOccurredArray = Object.values(fetchedData);

          if (theftOccurredArray.length > 0) {
            setTheftInput(theftOccurredArray[theftOccurredArray.length-1]);
          }
        }, (error) => {
          console.error('Error fetching data:', error);
          // Handle error while fetching data
        });
      };

      const fetchMoistureData = () => {
        // Listen for changes in the database location
        onValue(moistureDbRef, (snapshot) => {
          const fetchedData = snapshot.val();
          
          const moistureOccurredArray = Object.values(fetchedData);
  
          if (moistureOccurredArray.length > 0) {
            setMoistureInput(moistureOccurredArray[moistureOccurredArray.length-1]);
          }
        }, (error) => {
          console.error('Error fetching data:', error);
          // Handle error while fetching data
        });
      };

      const fetchRouteDeviation = () => {
        // Listen for changes in the database location
        onValue(routeDbRef, (snapshot) => {
          const fetchedData = snapshot.val();
          
          const routeDeviatedArray = Object.values(fetchedData);
  
          if (routeDeviatedArray.length > 0) {
            setRouteDeviation(routeDeviatedArray[routeDeviatedArray.length-1]);
          }
        }, (error) => {
          console.error('Error fetching data:', error);
          // Handle error while fetching data
        });
      };

      const fetchLevelData = () => {
        // Listen for changes in the database location
        onValue(levelDbRef, (snapshot) => {
          const fetchedData = snapshot.val();
          
          const levelArray = Object.values(fetchedData);
  
          if (levelArray.length > 0) {
            setLevel(levelArray[levelArray.length-1]);
          }
        }, (error) => {
          console.error('Error fetching data:', error);
          // Handle error while fetching data
        });
      };

      const fetchHaltData = () => {
        // Listen for changes in the database location
        onValue(haltDbRef, (snapshot) => {
          const fetchedData = snapshot.val();

          const fetchHaltArray = Object.values(fetchedData);

          if (fetchHaltArray.length > 0) {
            setHalt(fetchHaltArray[fetchHaltArray.length-1]);
          }
        }, (error) => {
          console.error('Error fetching data:', error);
          // Handle error while fetching data
        });
      };

  
      fetchTheftData();
      
      fetchMoistureData();

      fetchRouteDeviation();

      fetchLevelData();

      fetchHaltData();

    }, []);

    useEffect(() => {
      if (theftInput !== null) {
        console.log(theftInput);
      }
    }, [theftInput]);

    useEffect(() => {
      if (moistureInput !== null) {
        console.log(moistureInput);
        if(moistureInput.water_status === 'Detected')
        {
          setMoistureLevel(Math.floor((Math.random() * (7-1 + 1) + 1)));
        }
        else
        {
          setMoistureLevel(Math.floor((Math.random() * (10-8 + 1) + 8)));
        }
      }
    }, [moistureInput]);

    useEffect(() => {
      if (routeDeviation !== null) {
        console.log(routeDeviation);
      }
    }, [routeDeviation]);
  
    useEffect(() => {
      if (level !== null) {
        console.log(level);
      }
    }, [level]);

    useEffect(() => {
      if (halt !== null) {
        console.log(halt);
      }
    }, [halt]);
  


    const data = {
        labels: ['0', '300', '600', '900', '1200','1500','1800','2100','2400','2700'],
        datasets: [
          {
            label: 'Average Speed of the Truck',
            data: [0,50,45,60,50,65,60,56,60,54],
            borderColor: 'rgb(28,163,236)',
            backgroundColor: 'rgb(28,163,236)',
          },
        ],
      };
    
      const options = {
        // Customize chart options here
        scales: {
          x:{
            title: {
              display: true,
              text: 'DISTANCE (in Kms)',
              color: '#999',
              font: {
                size: 14,
                weight: 'bold',
              },
          }
        },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'AVERAGE SPEED (in Km/Hr)',
              color: '#999',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: {
              // Specify custom y-axis values
              stepSize: 10, // Set the interval between each tick
              min: 0, // Minimum value on the y-axis
              max: 100, // Maximum value on the y-axis
            },
          },
        },
      };

      const [isShowntruck,setIsShowntruck] = useState(false);
  const [isShowndriver,setIsShowndriver] = useState(false);


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
    <div className='home'>
       <Sidebar />
         <div className='homecontainer'>
          <Navbar />
          <div className='chartsfirst'>
              {/* <Mymap /> */}
              <div className='firstdiv'>
                  <div className="widgets">
                  <Link to='/order' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>Track My Vehicle</h1>
                    </div>
                  </Link>
                  <Link to='http://localhost:8001/camera-feed' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>Show Live Feed</h1>
                    </div>
                  </Link>
                    {/* <Widget type="Truck"/>
                    <Widget type="Coal"/>
                    <Widget type="Distance"/>
                    <Widget type="Duration"/> */}
                </div>
              </div>
              <div className='seconddiv'>
                <div>
                        <div className='levelmanage'>
                            <WaterDropIcon className='icon' style={{fontSize:'80',color:moistureInput && moistureInput.water_status === "Detected" ? 'red': 'green', marginTop:'10',marginLeft:'110',marginRight:'110',marginLeft:'110',marginRight:'110'}}/>
                            <h1 className='waterleveltitle'>MOISTURE LEVEL : {moistureLevel} %</h1>
                        </div>
                        <div className='levelmanage'>
                            <WaterIcon className='icon' style={{fontSize:'80',color:level && level === 'Low' ? 'gray' : level && level === 'Normal' ? 'green' : 'red', marginTop:'10',marginLeft:'110',marginRight:'110'}} />
                            <h1 className='waterleveltitle'>LEVEL MANAGE</h1>
                        </div>
                  </div>
                  <div>
                        <div className='levelmanage'>
                            <Icon icon="game-icons:cctv-camera" style={{fontSize:'80',color:theftInput && theftInput === 'No Theft' ? 'green': theftInput && theftInput === 'No Connection' ? 'gray' : 'red',marginTop:'10',marginLeft:'110',marginRight:'110'}} />
                            <h1 className='waterleveltitle'>SUSPICIOUS ACTIVITY</h1>
                        </div>
                        <div className='levelmanage'>
                            <InventoryIcon className='icon' style={{fontSize:'80',color:level && level === 'High' ? 'red' : 'green',marginTop:'10',marginLeft:'110',marginRight:'110'}} />
                            <h1 className='waterleveltitle'>OVERLOAD</h1>
                        </div>
                </div>
                <div>
                        <div className='levelmanage'>
                            <ForkRightIcon className='icon' style={{fontSize:'80',color:routeDeviation && routeDeviation === "Not Deviated" ? 'green' : 'red',marginTop:'10',marginLeft:'110',marginRight:'110'}} />
                            <h1 className='waterleveltitle'>ROUTE DEVIATION</h1>
                        </div>
                        <div className='levelmanage'>
                            <Icon icon="fontisto:truck"  style={{fontSize:'80',color:halt && halt > 90 ? 'red' : 'green',marginTop:'10',marginLeft:'110',marginRight:'110'}}/>
                            <h1 className='waterleveltitle'>PROLONGED HALT</h1>
                        </div>
                  </div>
              </div>
           </div>
        <div className='chartsecond'>
            {/* <div className="widgets">
              <Link to='/order' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                <div className='starttrack'>
                    <h1 className='starttracktitle'>TRACK MY VEHICLE</h1>
                </div>
              </Link>
                <Widget type="Truck"/>
                <Widget type="Coal"/>
                <Widget type="Distance"/>
                <Widget type="Duration"/>
            </div> */}
            <div className='chartsection'>
              <Linechart data={data} options={options} />
            </div>
        </div>
         <div className='chartsthird'>
        <div class="showbuttons">
            <div className='showtruck' onClick = {handletruckClick}>Show Truck Details</div>
            <div className='showtruck' onClick = {handledriverClick}>Show Driver Contact Details</div>
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
    </div>
  )
}

export default Home;