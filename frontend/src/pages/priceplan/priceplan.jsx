import React from 'react'
import classes from './priceplan.module.css'
const Priceplan = () => {
  return (
      <>
        <div className={classes.container}>
              <h2>Choose your plan</h2>
        <div className={classes.price-row}>
            <div className={classes.price-col}>
                <p>Starter</p>
                <h3>19$ <span>/ month</span></h3>
                <ul>
                    <li>1 Website</li>
                    <li>10 GB Disk Space</li>
                    <li>Free Email Address</li>
                    <li>Basic Web Builder</li>
                    <li>No SSL Certificate</li>
                    <li>Limited Support</li>
                </ul>
                <button>Add To Cart</button>
            </div>
            <div className={classes.price-col}>
                <p>Advanced</p>
                <h3>19$ <span>/ month</span></h3>
                <ul>
                    <li>1 Website</li>
                    <li>10 GB Disk Space</li>
                    <li>Free Email Address</li>
                    <li>Basic Web Builder</li>
                    <li>No SSL Certificate</li>
                    <li>Limited Support</li>
                </ul>
                <button>Add To Cart</button>
            </div>
            <div className={classes.price-col}>
                <p>Premium</p>
                <h3>19$ <span>/ month</span></h3>
                <ul>
                    <li>1 Website</li>
                    <li>10 GB Disk Space</li>
                    <li>Free Email Address</li>
                    <li>Basic Web Builder</li>
                    <li>No SSL Certificate</li>
                    <li>Limited Support</li>
                </ul>
                <button>Add To Cart</button>
            </div>
        </div>
        </div>

      </>
  )
}

export default Priceplan
