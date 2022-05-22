
import React, { useState, useEffect } from 'react';
import classes from './galleryAlert.module.css'
const GalleryAlert = ({ msg, type }) => {
  
    
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (msg) {
            setShow(true);
            setInterval(() => {
                setShow(false);
            }, 2000);
        }
    }, [msg]);
    return (
        
        <>
        
            {
                show && <div className={classes.alert `classes.alert${type}`}>{msg}</div>
            }
        
        </>
    
    )
  
}

export default GalleryAlert