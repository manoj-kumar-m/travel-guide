import './App.css';

// import Home from './pages/home/home';
import Loader from './pages/loading/loader';
import React from 'react'
import { useState, useEffect } from 'react'
import Register from './pages/register/register';
import Home from './pages/home/home';
import Userhome from './pages/userhome/userhome';

import Features from './pages/featured/featured';

import Gallery from './pages/gallery/gallery';

import Login from './pages/login/login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Tours from './pages/tours/tours';
import Priceplan from './pages/priceplan/priceplan';


const App = () => {
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      },1000)
  },[])
  
  return (
      
      <>
     
     
      <Router>
        <Routes>
          <Route exact path="/" element={loading ? <Loader /> :<Home />} />
          <Route exact path="/login" element= {<Login />} />
          <Route exact path="/register" element= {<Register />} />
          <Route exact path="/home" element= {<Userhome />} />
          <Route path="/features"  element={<Features/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/pricing" element={<Priceplan/>} />
          <Route path="/tours" element={<Tours />} />
          
        </Routes>
      </Router>


    </>        
   

  )
}


export default App;
