import React from 'react'

const Gallery = () => {
  return (
      
        <section className={classes.gallery}>
            <h1>Travelling Gallery</h1>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="./images/travel-1.jpg" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="./images/travel-2.jpg" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="./images/travel-3.jpg" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col-md-3}>
                        <div className={classes.galleryBox}>
                            <img src="./images/travel-4.jpg" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Gallery