import React from 'react';
import './orderid.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { getDatabase, ref, onValue, set, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';


function Orderid() {

  const [orderid, setOrderid] = useState('');

  const firebaseConfig = {
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

    const dbRef = ref(database, `Orders/${orderid}`);

      const navigate = useNavigate();

      const navigateorders = (e) => {
        e.preventDefault();
        get(dbRef)
        .then((snapshot) => {
        if (snapshot.exists()) {
          const value = snapshot.val();
          const key = Object.keys(value);
          
          if(key[0] === 'Ship')
          {
            navigate('/shipinfo');
          }
          else if(key[0] ==='Truck')
          {
            navigate('/order');
          }
          else
          {
            navigate('/traininfo');
          }

        // Handle the retrieved value here
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error('Error getting value:', error);
    });
        // navigate('/order');
    };
    
      const navigateDashboard = (e) => {
        e.preventDefault();
        get(dbRef)
        .then((snapshot) => {
        if (snapshot.exists()) {
          const value = snapshot.val();
          const key = Object.keys(value);
          
          if(key[0] === 'Ship')
          {
            navigate('/shipdashboard');
          }
          else if(key[0] ==='Truck')
          {
            navigate('/dashboard');
          }
          else
          {
            navigate('/traindashboard');
          }
        // navigate('/dashboard');
      }
      else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error('Error getting value:', error);
    });
        // navigate('/order');
    };




      function SubmitButton(){
        if (orderid){
          return (
            <div className='buttonclass'>
                <button className = 'orderidbutton' type = "submit" onClick={navigateorders} >Track Vehicle</button>
                <button className = 'orderidbutton' type = "submit" onClick={navigateDashboard}>Status</button>
            </div>
          )
        } else {
          return (
            <div className='buttonclass'>
                <button className = 'orderidbutton' type = "submit" onClick={navigateorders} disabled>Track Vehicle</button>
                <button className = 'orderidbutton' type = "submit" onClick={navigateDashboard} disabled>Status</button>
            </div>
          )
        };
      };
  return (
    <div className='orderid'>
         <form className='orderidform'>
            <h1>Enter your OrderID</h1>
            <label>Enter your OrderID</label>
            <input type = "text" placeholder='Enter the OrderID' value={orderid} onChange={ e => setOrderid(e.target.value)}></input>
            <SubmitButton/>
        </form>
    </div>
  )
}

export default Orderid ;