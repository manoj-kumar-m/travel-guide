import React from 'react'
import Navbar from '../../AllComponents/navbarcomponents/navbar/navbar'
import classes from './tours.module.css';
const Tours = () => {

  return (
    <div>
      <Navbar />
      
      <div className={classes.tours}>
          <div className={classes.toursHeader}>
            <h1>My Journey</h1>
          
          </div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3840" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox} >
                            <img src="https://picsum.photos/3860" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3880" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3820" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                  </div>
                  <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3840" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3860" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3880" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.toursBox}>
                            <img src="https://picsum.photos/3820" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Tours
