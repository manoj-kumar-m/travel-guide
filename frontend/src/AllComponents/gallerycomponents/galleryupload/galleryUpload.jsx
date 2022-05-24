import React, { useState } from 'react'
import GalleryNav from '../gallerynav/gallerynav';
// import Alert from '../gallleryalert/galleryAlert';
import classes from './galleryUpload.module.css'
import axios from 'axios'
// import {Image} from 'cloudinary-react'
const GalleryUpload = () => {

    // const [fileInputState, setFileInputState] = useState('');
    // const [successMsg, setSuccessMsg] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileInputChange = (e) => {
        // console.log(e.target.files)
        // const file = e.target.files[0];
        // previewFile(file);
        // setSelectedFile(file);
        // setFileInputState(e.target.value);

        const f = e.target.files[0];
        setSelectedFile(f);
        previewFile(selectedFile);
    };


// -----------------------image preview------------------
    
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            return setPreviewSource(reader.result);
        };
        

  
    };

// -----------------------uploading Image Function-----------------
    
    // const uploadImage = async (base64EncodedImage) => {
    //     try {
    //         const img = {
    //             data: base64EncodedImage
    //         }
    //         axios.post('http://localhost:8000/app/upload', img)
    //         // await fetch('/upload', {
    //         //     method: 'POST',
    //         //     body: JSON.stringify({ data: base64EncodedImage }),
    //         //     headers: { 'Content-Type': 'application/json' },
    //         // });
    //         setFileInputState('');
    //         setPreviewSource('');
    //         setSuccessMsg('Image uploaded successfully');
    //     } catch (err) {
    //         console.error(err);
    //         setErrMsg('Something went wrong!');
    //     }
    // };

    
// -------------------handleUpload----------------------------

    const handleUpload = (e) => {
        e.preventDefault();

        if (!selectedFile) return;

        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);

        // reader.onloadend = () => {
        //     uploadImage(reader.result);
        // };

        // reader.onerror = () => {
        //     console.error('Oh Shit!');
        //     setErrMsg('something went wrong!');
        // };
        const formData = new FormData()
        
        formData.append('file',  selectedFile)
        formData.append('upload_preset', 'travelguide')
         
        axios.post("https://api.cloudinary.com/v1_1/travel-guide/image/upload/v1570979139/travelguide", formData)
            .then(res => console.log(res))
       

    };



   



    return (
        <>
            <GalleryNav />
            
            <div className={classes.container}>
                <h1 className={classes.title}>Upload Your Moments</h1>
                    {/* <Alert msg={errMsg} type="danger" />
                    <Alert msg={successMsg} type="success" /> */}
                    
                    
                    <form onSubmit={handleUpload} className={classes.form}>
                        
                        <div className={classes.formContainer}>
                       <span>Upload Your Captures :  </span> <input
                                id="fileInput"
                                type="file"
                                name="image"
                                onChange={handleFileInputChange}
                                // value={fileInputState}
                                className={classes.formInput}
                                multiple
                            />
                        
                        </div>

                        {previewSource && (
                         <div className={classes.preview}>

                            <h3>Preview : </h3><br />
                            {/* <Image cloudName = "travel-guide" publicId/> */}
                                <img
                                    src={previewSource}
                                    alt="chosen"
                                />
                            
                        </div>
                    )}

                    <div className={classes.description}>
                        <h3>Description : </h3>
                        <textarea  maxlength="250"></textarea>
                    
                    </div>
                    <div>

                        <input type="reset" className={classes.reset}  />
                        <input className={classes.upload} type="submit" value="Upload"  />
                    </div>
                               
                </form>

            </div>



    </>
  )
}

export default GalleryUpload