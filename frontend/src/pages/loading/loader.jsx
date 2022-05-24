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


