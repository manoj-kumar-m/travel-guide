
import React from 'react'
import MapGL from 'react-map-gl';
import classes from './map.module.css'
import { useState } from 'react'
const Map = () => {

  const [viewport, setViewport] = useState({
    longitude:77.5841654,
    latitude: 13.0194186,
    zoom: 10,
  
  })

  return (


      <div className={classes.mapContainer}>
         <div className={classes.mapnavbar}>
            <img src="https://picsum.photos/50" alt="" />
        </div>
        <MapGL
          {...viewport}
          mapboxAccessToken={'pk.eyJ1IjoibWFub2owNjAzMDEiLCJhIjoiY2wzYmF3azVuMDBwdTNpcGpuMnVreGk1MCJ9.m5mxDyxgbzmnOxtQ1gIaBw'}
          style={{
            height: '100vh',
            width: '100%'
          }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        
      </MapGL>
      </div>
  
 
  )
}

export default Map


 

 

 
