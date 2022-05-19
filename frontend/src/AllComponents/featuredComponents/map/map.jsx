
import React from 'react'
import MapGL from 'react-map-gl';
import classes from './map.module.css'
import { useState ,useRef, useCallback} from 'react'
// import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// import url from 'url';
// const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFub2owNjAzMDEiLCJhIjoiY2wzYmF3azVuMDBwdTNpcGpuMnVreGk1MCJ9.m5mxDyxgbzmnOxtQ1gIaBw'
const Map = () => {

  const [viewport, setViewport] = useState({
    longitude:77.5841654,
    latitude: 13.0194186,
    zoom: 10,
  
  })
  // const mapRef = useRef();

  // const handleViewportChange = useCallback(
  //   (newViewport) => setViewport(newViewport),
  //   []
  // );

  // // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  // const handleGeocoderViewportChange = useCallback(
  //   (newViewport) => {
  //     const geocoderDefaultOverrides = { transitionDuration: 1000 };

  //     return handleViewportChange({
  //       ...newViewport,
  //       ...geocoderDefaultOverrides
  //     });
  //   },
  //   []
  // );

  return (


      <div className={classes.mapContainer}>
         <div className={classes.mapnavbar}>
            {/* <img src="https://picsum.photos/50" alt="" /> */}
        </div>
        <MapGL
          {...viewport}
          mapboxAccessToken={'pk.eyJ1IjoibWFub2owNjAzMDEiLCJhIjoiY2wzYmF3azVuMDBwdTNpcGpuMnVreGk1MCJ9.m5mxDyxgbzmnOxtQ1gIaBw'}
          style={{
            height: '70vh',
            width: '100%'
          }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        {/* <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        /> */}
      </MapGL>
      </div>
  
 
  )
}

export default Map


 

 

 
