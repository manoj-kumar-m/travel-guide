import React from 'react'
import classes from './galleryComp.module.css'
const GalleryComp = () => {
  return (
      
      <div className={classes.gallery}>
          <div className={classes.galleryHeader}>
            <h1>Travelling Gallery</h1>
            <a href="/tours">see all {`>`} </a>
          </div>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="https://picsum.photos/3840" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="https://picsum.photos/3860" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="https://picsum.photos/3880" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.galleryBox}>
                            <img src="https://picsum.photos/3820" alt="" />
                            <h4>Los Angeles</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default GalleryComp