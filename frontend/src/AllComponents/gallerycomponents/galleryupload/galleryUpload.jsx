import React, { useState } from 'react'
// import Navbar from '../../navbarcomponents/navbar/navbar';
import GalleryNav from '../gallerynav/gallerynav';
import Alert from '../gallleryalert/galleryAlert';
import classes from './galleryUpload.module.css'
const GalleryUpload = () => {



    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
     


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };


// -----------------------image preview------------------
    
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();

        if (!selectedFile) return;

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        reader.onloadend = () => {
            uploadImage(reader.result);
        };

        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
        

    };
// -----------------------uploading Image -----------------
    
    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };



   



    return (
        <>
            <GalleryNav />
            
            <div className={classes.container}>
                <h1 className={classes.title}>Upload Your Moments</h1>
                    <Alert msg={errMsg} type="danger" />
                    <Alert msg={successMsg} type="success" />
                    
                    
                    <form onSubmit={handleSubmitFile} className={classes.form}>
                        
                        <div className={classes.formContainer}>
                       <span>Upload Your Captures :  </span> <input
                                id="fileInput"
                                type="file"
                                name="image"
                                onChange={handleFileInputChange}
                                value={fileInputState}
                                className={classes.formInput}
                                multiple
                            />
                        
                        </div>

                        {previewSource && (
                         <div className={classes.preview}>
                            
                                <h3>Preview : </h3><br />
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