// import logo from './logo.svg';
import './App.css';

import Loader from './pages/loading/loader';
import React, {useState, useEffect} from 'react'
import Home from './pages/home/home';

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout( () => {
        setLoading(false)
      },4000)
  },[])
  
  return (
   
      <>
        { loading ? <Loader /> : <Home /> }
      </>
        
  

  )
}


export default App;
