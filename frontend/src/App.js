import './App.css';

// import Home from './pages/home/home';
import Loader from './pages/loading/loader';
import React from 'react'
import { useState, useEffect } from 'react'
import Register from './pages/register/register';
import Home from './pages/home/home';
import Userhome from './pages/userhome/userhome';

import Features from './pages/featured/featured';

import Tours from './pages/tours/tours';

import Login from './pages/login/login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Priceplan from './pages/priceplan/priceplan';
import GalleryUpload from './AllComponents/gallerycomponents/galleryupload/galleryUpload';
import GalleryNav from './AllComponents/gallerycomponents/gallerynav/gallerynav';
import Gallery from './AllComponents/gallerycomponents/gallery/gallery';


const App = () => {

  const [user, setuser] = useState({})
  const [reguser, setreguser] = useState({})

  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      },6000)
  },[])
  
  return (
      
      <>
     
     
      <Router>
        <Routes>
          <Route exact path="/" element={loading ? <Loader /> :<Home />} />
          <Route exact path="/home" element={
            
            (user && user._id) ?    <Userhome /> : <Login/>
            
          } />
          <Route exact path="/register" element= {<Register setreguser={ setreguser}/>} />
          <Route exact path="/login" element={<Login setuser={ setuser} />} />
          <Route path="/features"  element={<Features/>} />
          
          <Route path="/pricing" element={<Priceplan/>} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/gallery/upload" element={<GalleryUpload />} />
          <Route path="/tours/gallery" element={<Gallery />} />
        </Routes>
      </Router>
      

    </>        
   

  )
}


export default App;
