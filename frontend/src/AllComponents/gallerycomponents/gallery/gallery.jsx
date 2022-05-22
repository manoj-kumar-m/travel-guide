import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import classes from './gallery.module.css'
import GalleryNav from '../gallerynav/gallerynav';
const GalleryHome = () => {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <>

        <GalleryNav/>
        <div>
            {/* <h1 className={classes.title}>Cloudinary Gallery</h1> */}
            <div className={classes.gallery}>
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>
            </div>
        </>
    );
}

export default GalleryHome