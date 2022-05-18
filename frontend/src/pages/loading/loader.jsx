import React from 'react'
import classes from './loader.module.css'
const Loader = () => {
  return (
        <div className={classes.container}>
            <img className={classes.preloader} src="./assets/loader.gif" alt="" />
        </div>
  )
}

export default Loader


// https://assets.materialup.com/uploads/0ce3d5a6-1972-494c-89f7-bf9a727804f2/preview.gif