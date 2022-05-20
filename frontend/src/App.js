import './App.css';

// import Home from './pages/home/home';
import Loader from './pages/loading/loader';
import React from 'react'
import { useState, useEffect } from 'react'
import Register from './pages/register/register';
import Home from './pages/home/home';
// import Userhome from './pages/userhome/userhome';
// import Choose from './AllComponents/featuredComponents/choose/choose';

// import Map from './AllComponents/featuredComponents/map/map';
// import Features from './pages/featured/featured';
// import Userhome from './pages/userhome/userhome';
// import Priceplan from './pages/priceplan/priceplan';
// import NavApp from './AllComponents/navbarcomponents/NavApp'
import Login from './pages/login/login';


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
      {/* {loading ? <Loader /> : <Home />} */}
     
      {loading ?<Loader/> : <> <Register/> </>}
    </>        
   

  )
}


export default App;
