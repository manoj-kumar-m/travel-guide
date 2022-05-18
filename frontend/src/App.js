// import logo from './logo.svg';
import './App.css';

// import Home from './pages/home/home';
// import Loader from './pages/loading/loader';
import React from 'react'
// import  {useState, useEffect} from 'react'
import Userhome from './userhome/userhome';

const App = () => {
  // const [loading, setLoading] = useState(false)
  // useEffect(()=>{
  //     setLoading(true)
  //     setTimeout( () => {
  //       setLoading(false)
  //     },4000)
  // },[])
  
  return (
     <Userhome/>
   
//       <>
//       {/* { loading ? <Loader /> : <Home /> } */}
// </>        
   

  )
}


export default App;
