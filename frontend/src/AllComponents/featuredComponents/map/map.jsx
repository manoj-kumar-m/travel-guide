
// import MapGL from 'react-map-gl';
// import classes from './map.module.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import mapboxgl from 'mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import React, { useRef, useEffect, useState } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoibWFub2owNjAzMDEiLCJhIjoiY2wzYmF3azVuMDBwdTNpcGpuMnVreGk1MCJ9.m5mxDyxgbzmnOxtQ1gIaBw';


const Map = () => {

  

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
   
  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
      });
  });
   
  useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
  });
   
  return (
        <div>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
  );

}

export default Map


 

 

 
