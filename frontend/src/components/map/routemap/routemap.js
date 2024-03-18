import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './routemap.css'
import { Link } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1IjoieXV2YTIyIiwiYSI6ImNscHh0ZGY3ZjB6eXIyc3M4bDE1ZWJuaXIifQ.mWtL5RlcNef6lh6kyGTawA';

const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([80.2707,13.0827]);
  const endPoint = [80.2812,13.0633]; 

  // useEffect(() => {
  //   const initializeMap = ({ setMap, mapContainer }) => {
  //     const mapInstance = new mapboxgl.Map({
  //       container: mapContainer.current,
  //       style: 'mapbox://styles/mapbox/streets-v12',
  //       center: [80.278720,13.060690],
  //       zoom: 12,
  //     });

  //     mapInstance.on('load', () => {
  //       setMap(mapInstance);
  //       mapInstance.setMaxBounds(mapInstance.getBounds());

  //       // Add starting point to the map
  //       mapInstance.addLayer({
  //         id: 'point',
  //         type: 'circle',
  //         source: {
  //           type: 'geojson',
  //           data: {
  //             type: 'FeatureCollection',
  //             features: [
  //               {
  //                 type: 'Feature',
  //                 properties: {},
  //                 geometry: {
  //                   type: 'Point',
  //                   coordinates: start,
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         paint: {
  //           'circle-radius': 10,
  //           'circle-color': '#3887be',
  //         },
  //       });

        // mapInstance.addLayer({
        //     id: 'endpoint',
        //     type: 'circle',
        //     source: {
        //       type: 'geojson',
        //       data: {
        //         type: 'FeatureCollection',
        //         features: [
        //           {
        //             type: 'Feature',
        //             properties: {},
        //             geometry: {
        //               type: 'Point',
        //               coordinates: endPoint,
        //             },
        //           },
        //         ],
        //       },
        //     },
        //     paint: {
        //       'circle-radius': 10,
        //       'circle-color': '#f30',
        //     },
        //   });

  //       // Call getRoute function with constant endpoint
  //       getRoute(endPoint,mapInstance);
  //     });
  //   };

  //   if (!map) initializeMap({ setMap, mapContainer });
  // }, [map, start]);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [ 80.27810018264898,13.073382134601943],
        zoom: 14,
      });

      
  
      mapInstance.on('load', () => {
        setMap(mapInstance);
        mapInstance.setMaxBounds(mapInstance.getBounds());
  
        function createDraggableMarker(coordinates, id) {
          var ele6060 = document.createElement('div');
          ele6060.id = 'marker6060';
          const marker = new mapboxgl.Marker({
            draggable: true,
            element:ele6060,
            color:'#000000'
          })
            .setLngLat(coordinates)
            .addTo(mapInstance);
  
          // marker.on('dragend', () => {
          //   const newCoordinates = marker.getLngLat();
          //   // Update the coordinates of the dragged point
          //   // For example, you can use these updated coordinates in your application logic
          //   console.log('New coordinates:', newCoordinates);
          // });

  
          return marker;
        }

  
        // Add starting point to the map
        const startPointMarker = createDraggableMarker(start, 'start');

        startPointMarker.on('dragend', () => {
          const nc = startPointMarker.getLngLat();
          if(nc.lng < 80.26 || nc.lng > 80.29 || nc.lat < 13.06 || nc.lat > 13.09)
          {
            alert("Route Deviated !");
          }

          console.log(nc);
        })
        
        mapInstance.addLayer({
          id: 'endpoint',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: endPoint,
                  },
                },
              ],
            },
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#f30',
          },
        });

        // mapInstance.addLayer({
        //   id: 'endpoint',
        //   type: 'circle',
        //   source: {
        //     type: 'geojson',
        //     data: {
        //       type: 'FeatureCollection',
        //       features: [
        //         {
        //           type: 'Feature',
        //           properties: {},
        //           geometry: {
        //             type: 'Point',
        //             coordinates: start,
        //           },
        //         },
        //       ],
        //     },
        //   },
        //   paint: {
        //     'circle-radius': 10,
        //     'circle-color': '#f30',
        //   },
        // });

  
        // Call getRoute function with constant endpoint
        getRoute(endPoint, mapInstance);
      });
    };
  
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, start]);
  

  const getRoute = async (end,mapInstance) => {
    try {
      // Fetch route
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      );
      console.log(query);
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route,
        },
      };
      console.log(route);


      const long_arr = []
      const lat_arr = []

      for (const key in route) {
        const [longitude, latitude] = route[key];
        
        lat_arr.push(latitude);
        long_arr.push(longitude);
      }

      const MinLat = Math.min(...lat_arr);
      const MinLong = Math.min(...long_arr);
      const MaxLat = Math.max(...lat_arr);
      const MaxLong = Math.max(...long_arr);


      

      
      
      //console.log(geojson);

      /*if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        mapInstance.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
        */
        if (mapInstance.getSource('route')) {
          mapInstance.getSource('route').setData({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: data.geometry.coordinates,
            },
          });
        } else {
          mapInstance.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: data.geometry.coordinates,
                },
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          });
        }
      
      // Display turn-by-turn instructions
      const instructionsDiv = document.getElementById('instructions');
      const steps = data.legs[0].steps;

      let tripInstructions = '';
      for (const step of steps) {
        tripInstructions += `<li>${step.maneuver.instruction}</li>`;
      }

      instructionsDiv.innerHTML = `<p><strong>Trip duration: ${Math.floor(data.duration / 60)} min  </strong></p><ol>${tripInstructions}</ol>`;
    } 
    catch (error) 
    {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <div className='routemap'>
      <div ref={(el) => (mapContainer.current = el)} style={{ width: '100%', height: '600px'}} />
      <div id="instructions"></div>
      <Link to='/dashboard' className='link' style={{textDecoration:'none',color:'#1CA3EC'}}>
                    <div className='starttrack'>
                        <h1 className='starttracktitle'>See Truck Details</h1>
                    </div>
                  </Link>
    </div>
  );
};

export default Map;

