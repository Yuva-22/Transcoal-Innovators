import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './mymap.css';

function Mymap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 8,
      });
    });
  }, []);

  return (
    <div >
      {viewport.latitude && viewport.longitude && (
        <div className="mymap">
          <Map className="mymap" id="mymap"
            style={{width:'80vw',height:'80vh'}}
            mapboxAccessToken="pk.eyJ1IjoieXV2YTIyIiwiYSI6ImNscHh0ZGY3ZjB6eXIyc3M4bDE1ZWJuaXIifQ.mWtL5RlcNef6lh6kyGTawA"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/standard"
            onRender={(event) => event.target.resize()}
            >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default Mymap;


