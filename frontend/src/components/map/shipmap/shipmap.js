import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shipmap = () => {
  useEffect(() => {
    function isObject(obj) {
      return obj != null && obj.constructor.name === 'Object';
    }

    function parseBoolValue(value) {
      var new_value;
      if (value === undefined) {
        new_value = false;
      }
      if (value === 'true' || value == true) {
        new_value = true;
      } else if (value === 'false' || value == false) {
        new_value = false;
      } else {
        new_value = false;
      }
      return new_value;
    }

    var obj = window.map_options_name && window.map_options_name !== '' && isObject(window[window.map_options_name])
      ? window[window.map_options_name]
      : window;

    var rh = window.location.href;
    if (rh.indexOf('file://') >= 0 || rh.indexOf('file%3A%2F%2F') >= 0) rh = 'testingonly';
    rh = encodeURIComponent(rh);
    var w = obj.width;
    if (w === undefined) {
      w = 800;
    }
    var ws = w.toString();
    if (parseInt(w) < 480 && ws.charAt(ws.length - 1) !== '%') {
      w = 480;
    }
    if (ws.charAt(ws.length - 1) === '%') {
      obj.width = ws;
    } else {
      obj.width = parseInt(w);
    }

    var h = obj.height;
    if (h === undefined) {
      h = 600;
    }
    var height = parseInt(h);
    if (height < 400) {
      obj.height = 400;
    } else {
      obj.height = height;
    }

    if (obj.names === undefined) {
      obj.names = false;
    } else {
      obj.names = parseBoolValue(obj.names);
    }

    if (!document.getElementById('vesselfinder')) {

    var iframe = document.createElement('iframe');
    iframe.name = 'vesselfinder';
    iframe.id = 'vesselfinder';
    iframe.width = obj.width;
    iframe.height = obj.height;
    iframe.frameBorder = '0';
    var showtrack=true;

    var url = `https://www.vesselfinder.com/aismap?`; 
    url += `&ra=${rh}`; 
    url += `&imo=${9839430}`;
    url += `&track=${showtrack}`;
    iframe.src = url;
    document.getElementById('map-container').appendChild(iframe);
    }
     
    /*var mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.appendChild(iframe);
    }*/

    // Clean up (remove iframe if needed)
    /*return () => {
      document.getElementById('map-container').removeChild(iframe);
    };*/
  }, []);

  return (
    <div id="map-container">
               <Link to='/shipdashboard' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>See Ship Details</h1>
                    </div>
                  </Link>
    </div>
  );
}

export default Shipmap;

