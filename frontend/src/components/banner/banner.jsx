import React from 'react'
import classes from './banner.module.css'
const Banner = () => {
  return (
    <section className={classes.banner}>
        <div className={classes.bannerHighlights}>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.col8}>
                        <h2>Get 30% OFF on trending destination</h2>
                        <p>Book your tickets before this 31st and get some amazing discounts </p>
                    </div>
                    <div className={classes.col4}>
                        <button type="button" className={classes.bookingBtn}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner